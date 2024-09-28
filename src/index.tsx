import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<BrowserRouter basename={window.location.pathname || ""}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
