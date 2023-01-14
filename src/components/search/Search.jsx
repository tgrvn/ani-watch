import React from "react";
import styles from "./Search.module.scss";

export default function Search({ value, onChange, clear }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}></div>
      <input
        type={"text"}
        value={value}
        onChange={onChange}
        className={`${styles.input}`}
      />
      <div
        onClick={() => clear()}
        className={`${styles.right} ${value ? styles.icon : ""}`}
      ></div>
    </div>
  );
}
