import React, { useState } from 'react';
import styles from './GetCode.module.css'
import { useGetCodeMutation } from "../../redux/tableApi";


function GetCode() {
  const [getCodeFunc,{data, error}] = useGetCodeMutation()
  const [inputState, setInputState] = useState('')
  if (error){console.log(error)}

  return (
    <div className={styles.get_code_container}>
      <p>получить код</p>
      <form action={"submit"} className={styles.get_code_form} onSubmit={async e => {
        e.preventDefault()
        await getCodeFunc(inputState)

      }}>
        <input type="email" value={inputState}  onChange={(e) => {setInputState(e.target.value)}} placeholder={'e-mail'}/>
        <button>получить код</button>
      </form>
      {data ? <p className ={styles.get_code_message}>{data}</p>:(error && <p>e-mail не найден</p>)}
    </div>
  );
}

export default GetCode;