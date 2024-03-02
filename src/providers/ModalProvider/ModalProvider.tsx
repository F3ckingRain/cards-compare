import React, { Suspense } from "react";

function ModalProvider() {
  return <Suspense fallback={"Загрузка страницы"}></Suspense>;
}

export default ModalProvider;
