import React from "react";
import { DefaultProviderType } from "@/providers/types";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ModalProvider from "@/providers/ModalProvider/ModalProvider";

function ProviderWrapper({ children }: DefaultProviderType) {
  return (
    <BrowserRouter>
      <RecoilRoot>
        {children}

        <ModalProvider />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default ProviderWrapper;
