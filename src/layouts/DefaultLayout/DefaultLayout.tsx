import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import styles from "./DefaultLayout.module.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

function DefaultLayout() {
  return (
    <Suspense fallback={"Загрузка страницы"}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </Suspense>
  );
}

export default DefaultLayout;
