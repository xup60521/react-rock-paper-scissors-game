import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PickProvider } from "./components/PickProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <PickProvider>
        <App />
    </PickProvider>
);
