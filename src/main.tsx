import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Collapse accidental double slashes (e.g. "//alinhamento-3d...") so routes still match.
const { pathname, search, hash } = window.location;
if (/\/{2,}/.test(pathname)) {
  window.history.replaceState(null, "", pathname.replace(/\/{2,}/g, "/") + search + hash);
}

createRoot(document.getElementById("root")!).render(<App />);
