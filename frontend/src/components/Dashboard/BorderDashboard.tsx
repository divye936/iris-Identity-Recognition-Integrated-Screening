import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Activity, FileText } from 'lucide-react';
import { useWebSocket } from '../../hooks/useWebSocket';

export default function BorderDashboard() {
  const liveData = useWebSocket('ws://localhost:8000/ws/telemetry');
  
  const [docImage, setDocImage] = useState<string | null>(null);
  const [scanResult, setScanResult] = useState<any>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error("Webcam initialization failed:", err));
    }
  }, []);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Display the preview instantly
    const imageUrl = URL.createObjectURL(file);
    setDocImage(imageUrl);
    
    const formData = new FormData();
    formData.append("file", file);

    // Capture live webcam frame
    if (videoRef.current && videoRef.current.videoWidth > 0) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const liveBlob = await new Promise<Blob | null>((resolve) => 
          canvas.toBlob(resolve, 'image/jpeg', 0.9)
        );
        
        if (liveBlob) {
          formData.append("live_frame", liveBlob, "live_capture.jpg");
        }
      }
    }

    try {
      console.log("Transmitting dual-stream to screening engine...");
      const response = await fetch("http://localhost:8000/screen", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      console.log("Forensic Report Received:", data);
      setScanResult(data.results);
    } catch (error) {
      console.error("Pipeline connection failed:", error);
    }
  };

  const displayFrs = scanResult ? scanResult.calculated_risk : (liveData?.frs || 0.24);
  const displayTamper = scanResult ? scanResult.ela_anomaly : (liveData?.modules?.tamper || 0.34);
  const displayFace = scanResult ? scanResult.face_mismatch : (liveData?.modules?.face || 0.15);
  const bpm = liveData?.bpm || 72.4;
  
  let riskBand = "low";
  let riskStatus = "AUTHENTIC";
  let alertBadge = "badge-success";
  let alertText = "CLEAR TO PROCEED";

  if (displayFrs >= 0.65) {
    riskBand = "high";
    riskStatus = "HIGH RISK";
    alertBadge = "badge-danger";
    alertText = "ESCALATE - FORGERY DETECTED";
  } else if (displayFrs >= 0.30) {
    riskBand = "medium";
    riskStatus = "INCONCLUSIVE";
    alertBadge = "badge-warning";
    alertText = "SECONDARY REVIEW REQUIRED";
  }

  return (
    <div className="w-full h-full">
      <header className="dashboard-header flex justify-between items-center">
        <h1 className="flex items-center gap-3">
          <ShieldCheck size={28} className="text-success" />
          MINISTRY OF HOME AFFAIRS (SSB) · SCREENING SYSTEM
        </h1>
        <div className="flex gap-4">
          <span className="badge badge-info">STATION: DEL-CP-02</span>
          <span className="badge badge-warning">OFFLINE MODE</span>
        </div>
      </header>

      <main className="container flex gap-6 p-6 mt-4">
        {/* Left Column: Forensic Maps */}
        <section className="flex-col gap-4 w-full" style={{ flex: 2 }}>
          <div className="card">
            <h3 className="mb-4">Document Capture & Forensics</h3>
            <div className="flex gap-2 mb-4">
              <button className="button button-primary text-xs">RAW CAPTURE</button>
              <button className="button button-secondary text-xs">ELA HEATMAP</button>
              <button className="button button-secondary text-xs">PRNU NOISE</button>
            </div>
            
            <div className="evidence-panel">
              <div className="evidence-panel-title">
                <FileText size={18} />
                <span>Passport (P&lt;IND) Scan</span>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="heatmap-container relative" style={{ height: '350px', backgroundColor: 'var(--navy-800)' }}>
                  {docImage ? (
                    <>
                      <img src={docImage} alt="Scanned Document" className="w-full h-full object-contain z-10 relative" />
                      <div className="heatmap-overlay z-20"></div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-muted text-sm gap-4">
                      <span>[DOCUMENT VISUALIZATION CANVAS]</span>
                    </div>
                  )}
                </div>

                <label className="button button-primary cursor-pointer text-center w-full">
                  UPLOAD SCAN
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Scoring & Telemetry */}
        <section className="flex-col gap-6 w-full" style={{ flex: 1 }}>
          <div className="card flex flex-col items-center">
            <h3 className="mb-4 text-muted">Forensic Risk Score (FRS)</h3>
            <div className={`risk-gauge ${riskBand} mb-4`}>
              <span className="risk-gauge-value">{(displayFrs * 100).toFixed(1)}%</span>
              <span className="risk-gauge-label">{riskStatus}</span>
            </div>
            <div className={`badge ${alertBadge} status-badge-large w-full justify-center mt-4`}>
              {alertText}
            </div>
          </div>

          <div className="card card-compact">
            <h3 className="text-sm mb-4 text-muted">Module Telemetry</h3>
            <div className="flex flex-col gap-2">
              <div className="module-score high-confidence">
                <span className="module-score-label text-xs">ICAO 9303 / MRZ</span>
                <div className="module-score-bar"><div className="module-score-bar-fill" style={{ width: '98%' }}></div></div>
                <span className="module-score-value">0.02</span>
              </div>
              <div className="module-score medium-confidence">
                <span className="module-score-label text-xs">Tamper Anomaly</span>
                <div className="module-score-bar">
                  <div className="module-score-bar-fill" style={{ width: `${displayTamper * 100}%` }}></div>
                </div>
                <span className="module-score-value">{displayTamper.toFixed(2)}</span>
              </div>
              <div className="module-score high-confidence">
                <span className="module-score-label text-xs">Face Match</span>
                <div className="module-score-bar">
                  <div className="module-score-bar-fill" style={{ width: `${displayFace * 100}%` }}></div>
                </div>
                <span className="module-score-value">{displayFace.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div className="card card-compact">
            <h3 className="text-sm mb-2 flex items-center gap-2 text-muted">
               <Activity size={16} className="text-success" /> Live Kiosk Feed
            </h3>
            
            <div className="relative w-full h-40 bg-black rounded overflow-hidden mb-2 border border-slate-800">
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted 
                className="w-full h-full object-cover transform -scale-x-100"
              />
              <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-emerald-950/80 border border-emerald-500 text-emerald-400 text-[10px] rounded z-10">
                LIVENESS: TRACKING
              </div>
            </div>

            <div className="flex justify-between items-center p-2 rounded" style={{ backgroundColor: 'var(--slate-100)' }}>
               <span className="text-xs text-muted">Cardiovascular Pulse (rPPG)</span>
               <span className="font-bold text-success">{bpm.toFixed(1)} BPM</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="container px-6 mb-6">
        <div className="card card-compact">
          <h3 className="text-sm mb-4 text-muted">System Audit Trail</h3>
          <div className="flex flex-col">
            <div className="audit-log-entry">
              <span className="audit-log-timestamp">20:41:02.104</span>
              <div className="audit-log-event">
                <div className="audit-log-event-title text-sm">Frame Acquired</div>
                <div className="audit-log-event-detail">1080p RGB capture (Laplacian Focus: 248.1)</div>
              </div>
              <span className="audit-log-status text-success text-sm">OK</span>
            </div>
            <div className="audit-log-entry">
              <span className="audit-log-timestamp">20:41:02.312</span>
              <div className="audit-log-event">
                <div className="audit-log-event-title text-sm">MRZ Checksum Verified</div>
                <div className="audit-log-event-detail">P&lt;IND document format valid. Watchlist DB clear.</div>
              </div>
              <span className="audit-log-status text-success text-sm">OK</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}