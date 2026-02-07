"use client";

import { useCallback, useEffect, useState } from "react";

const GOOGLE_SCRIPT_SRC = "https://accounts.google.com/gsi/client";
const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

export function useGoogleIdentity() {
  const [ready, setReady] = useState(() =>
    typeof window !== "undefined" && Boolean(window.google?.accounts?.id)
  );

  useEffect(() => {
    if (!CLIENT_ID) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    if (window.google?.accounts?.id) {
      setReady(true);
      return;
    }

    let script = document.querySelector(`script[src="${GOOGLE_SCRIPT_SRC}"]`);
    const handleLoad = () => setReady(true);
    const handleError = () => setReady(false);

    if (script) {
      if (script.getAttribute("data-loaded")) {
        handleLoad();
      } else {
        script.addEventListener("load", handleLoad, { once: true });
        script.addEventListener("error", handleError, { once: true });
      }
      return () => {
        script?.removeEventListener("load", handleLoad);
        script?.removeEventListener("error", handleError);
      };
    }

    script = document.createElement("script");
    script.src = GOOGLE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      script.setAttribute("data-loaded", "true");
      handleLoad();
    };
    script.onerror = handleError;
    document.head.appendChild(script);

    return () => {
      script?.removeEventListener("load", handleLoad);
      script?.removeEventListener("error", handleError);
    };
  }, []);

  const getIdToken = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (!CLIENT_ID) {
        reject(new Error("Google Client ID is not configured."));
        return;
      }

      if (typeof window === "undefined" || !window.google?.accounts?.id) {
        reject(new Error("Google services are not ready yet. Please try again."));
        return;
      }

      let settled = false;

      const finalize = (callback) => (args) => {
        if (settled) return;
        settled = true;
        callback(args);
      };

      const handleCredential = finalize((response) => {
        if (response?.credential) {
          resolve(response.credential);
        } else {
          reject(new Error("Google did not return a credential."));
        }
      });

      const handleDismiss = finalize((notification) => {
        const reason = notification?.getMomentType?.() || notification?.type;
        if (notification?.isNotDisplayed?.() || notification?.isSkippedMoment?.()) {
          reject(new Error("Google sign-in was dismissed."));
        } else {
          reject(new Error(reason || "Google sign-in could not continue."));
        }
      });

      window.google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredential,
        cancel_on_tap_outside: false,
      });

      window.google.accounts.id.prompt(handleDismiss);
    });
  }, []);

  return {
    ready,
    getIdToken,
  };
}
