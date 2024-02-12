import React from "react";
import styles from "./styles/pagination.module.scss";

function Pagination() {
  return (
    <div className={styles.container}>
      <img src="src/images/bg-sidebar-mobile.svg" />
      <div className={styles.buttons}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </div>
  );
}

export default Pagination;
