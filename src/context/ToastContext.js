import React, { createContext, useCallback, useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const timer = useRef();

  // link: { to, label } navigates; action: { label, onClick } runs a callback (e.g. Undo).
  const showToast = useCallback((message, link, action) => {
    clearTimeout(timer.current);
    setToast({ message, link, action, key: Date.now() });
    timer.current = setTimeout(() => setToast(null), action ? 6000 : 3500);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div className="toast-region" role="status" aria-live="polite">
        {toast && (
          <div key={toast.key} className="toast-msg">
            <i className="fas fa-check-circle"></i>
            <span>{toast.message}</span>
            {toast.link && (
              <Link to={toast.link.to} onClick={() => setToast(null)}>
                {toast.link.label}
              </Link>
            )}
            {toast.action && (
              <button
                className="toast-action"
                onClick={() => {
                  toast.action.onClick();
                  setToast(null);
                }}
              >
                {toast.action.label}
              </button>
            )}
            <button className="toast-close" aria-label="Dismiss" onClick={() => setToast(null)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside a ToastProvider");
  return context;
}
