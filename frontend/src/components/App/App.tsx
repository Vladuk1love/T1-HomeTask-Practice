import React, { useState } from 'react';
import styles from './App.module.css'
import GetRoles from "../GetRoles/GetRoles";
import SingUp from "../SingUp/SingUp";
import GetCode from "../GetCode/GetCode";
import SetStatus from "../SetStatus/SetStatus";


function App() {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')


  return (
    <div className={styles.app_container}>
      <h1 className={styles.app_container_heading}><span>by</span> Yurtaev Vladislav</h1>
      <GetRoles/>
      <div className={styles.app_main_part}>
        <SingUp/>
        <div className={styles.app_right_side_container}>
          <GetCode/>
          <SetStatus/>
        </div>
      </div>
    </div>
  );
}

export default App;
