import React from "react";
import styles from "../styles/stepone.module.scss";

function StepOne() {
  return (
    <div className={styles.container}>
      <form>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>

        <label>Name</label>
        <input placeholder="e.g. Stephen King" />
        <label>Email Address</label>
        <input placeholder="e.g.stephenking@lorem.com" type="email" />
        <label>Phone Number</label>
        <input placeholder="e.g. +1 234 567 890" type="number" />
      </form>
    </div>
  );
}

export default StepOne;
