import React from "react";
import { DefaultProviderType } from "@/providers/types";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

function ProviderWrapper({ children }: DefaultProviderType) {
  return (
    <BrowserRouter>
      <RecoilRoot>{children}</RecoilRoot>
    </BrowserRouter>
  );
}

export default ProviderWrapper;
