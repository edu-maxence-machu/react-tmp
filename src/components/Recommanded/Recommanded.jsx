import React from "react";
import styles from "./Recommanded.module.css";

const Recommanded = ({ title }) => {
  console.log(title);

  return (
    <div className={styles.row} style={{ height: "100px" }}>
      <span className={styles.title}> {title} </span>

      {/* 
      <div className={styles.container}>
        <div className={styles.flexScroll}>
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "orange",
            }}
          ></div>
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "orange",
            }}
          ></div>
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "orange",
            }}
          ></div>
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "orange",
            }}
          ></div>
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "orange",
            }}
          ></div>
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "orange",
            }}
          ></div>
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "orange",
            }}
          ></div>
        </div>
      </div> */}
    </div>
  );
};

export default Recommanded;
