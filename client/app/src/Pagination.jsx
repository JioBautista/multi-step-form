import React from "react";
import styles from "./styles/pagination.module.scss";

function Pagination() {
  return (
    <div className={styles.wrapper}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </div>
  );
}

export default Pagination;
