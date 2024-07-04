import React from 'react';
import styles from "./SetStatus.module.css";
import { useSetStatusMutation } from "../../redux/tableApi";



function SetStatus() {
  const [setStatusFunc, {data, error}] = useSetStatusMutation()

  if (error) {
    console.log(error)
  }

  return (
    <form className={styles.set_status_container} action={'submit'} onSubmit={async (e: React.SyntheticEvent) => {
      e.preventDefault()
      try {
        const target = e.target as typeof e.target & {
          email: { value: string }
          code: { value: string }
        }
        const email = target.email.value
        const code = target.code.value
        await setStatusFunc({email, code})
      } catch (err) {
        console.log(err)
      }
    }}>
      <p>установить статус</p>
      <input name='email' type="email" placeholder={'e-mail'}/>
      <input name="code" type="password" placeholder={'code'}/>
      <button type={'submit'}>установить статус</button>
      {data?.message && <p className ={styles.status_message}>{data?.message}</p>}
    </form>
  );
}

export default SetStatus;