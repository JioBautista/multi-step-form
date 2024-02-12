import React from "react";
import styles from "./styles/app.module.scss";
import Pagination from "./Pagination";

function App() {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
}

export default App;
