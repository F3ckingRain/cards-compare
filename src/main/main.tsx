import React from "react";
import { createRoot } from "react-dom/client";
import App from "../app/App";
import ProviderWrapper from "@/providers/ProviderWrapper";

import "./main.scss";

const isProd = import.meta.env.PROD;

const root = createRoot(document.getElementById("root")!);

root.render(
  isProd ? (
    <React.StrictMode>
      <ProviderWrapper>
        <App />
      </ProviderWrapper>
    </React.StrictMode>
  ) : (
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  ),
);
