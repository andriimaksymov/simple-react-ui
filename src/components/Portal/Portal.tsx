import { useEffect } from "react";
import { createPortal } from "react-dom";

import { PortalProps } from "../../../types/Portal";

const Portal = ({ children, className, node }: PortalProps) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    if (className) {
      el.classList.add(className);
    }
    document.body.appendChild(el);

    return () => {
      if (className) {
        el.classList.remove(className);
      }
      document.body.removeChild(el);
    };
  }, [className, el, mount]);

  return createPortal(children, node || el);
};

export default Portal;
