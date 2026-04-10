"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (acceptAll: boolean) => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        accepted: acceptAll,
        timestamp: Date.now(),
      })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="banner">
      <p>
        We use cookies to enhance your experience. You can accept or reject
        non-essential cookies.
        
      </p>
      <div className="actions">
        <button onClick={() => handleConsent(false)}>Reject</button>
        <button onClick={() => handleConsent(true)}>Accept</button>
      </div>

      {/* Inline styles for the component */}
      <style jsx>{`
        .banner {
          position: fixed;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: #0b1020;
          color: white;
          border-radius: 12px;
          padding: 16px;
          max-width: 900px;
          margin: 0 auto;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 1000;
        }

        .banner a {
          color: #5ad1b9;
          font-weight: 600;
          text-decoration: underline;
        }

        .actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        .actions button {
          border: none;
          border-radius: 6px;
          padding: 8px 16px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.2s;
        }

        .actions button:first-child {
          background: transparent;
          border: 1px solid #555;
          color: white;
        }

        .actions button:first-child:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .actions button:last-child {
          background: #5ad1b9;
          color: #04131a;
        }

        .actions button:last-child:hover {
          background: #4ac7aa;
        }
      `}</style>
    </div>
  );
}
