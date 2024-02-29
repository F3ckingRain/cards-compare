import React from "react";

import styles from "./Wrapper.module.scss";

interface WrapperProps {
  children: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <section className={styles.wrapper}>{children}</section>;
}

export default Wrapper;
