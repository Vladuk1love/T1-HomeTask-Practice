import React from 'react';
import styles from "./SingUp.module.css";
import { useSingUpMutation } from "../../redux/tableApi";
import { useFormik } from 'formik'
import { ICandidate } from "../../types";


const initialValues: ICandidate = {
  last_name: "",
  first_name: "",
  email: "",
  role: ""
}

function SingUp() {
  const [singUpFunc, {error, data}] = useSingUpMutation()
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (candidate) => {

      await singUpFunc(candidate).then((info) => {
        alert(info.data)
        // formik.resetForm()
      }).catch((error) => {
        console.log(error)
      })
    },
    validate: (values) => {
      const errors: ICandidate = {
        last_name: "",
        first_name: "",
        email: "",
        role: ""
      }
      if (!values.first_name) {
        errors.first_name = 'поле "имя" обязательно!'
      }
      if (!values.last_name) {
        errors.first_name = 'поле "имя" обязательно!'
      }
      if (!values.email) {
        errors.first_name = 'поле "имя" обязательно!'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'некорректный адрес электронной почты';
      }
      if (!values.role) {
        errors.first_name = 'поле "имя" обязательно!'
      }
      if (errors.last_name === '' && errors.first_name === '' && errors.email === '' && errors.role === '') {
        return {}
      } else {
        return errors
      }
    }
  })
  if (error) {
    console.log(error)
  }


  return (
    <form className={styles.sing_up_container} onSubmit={(e) => {
      e.preventDefault();
      formik.handleSubmit(e)
    }}>
      <p>регистрация</p>
      <label>
        <input
          type="text"
          id={'last_name'}
          placeholder={'фамилия'}
          value={formik.values.last_name}
          onChange={formik.handleChange}/>
        {formik.touched.last_name && formik.errors.last_name && <p>{formik.errors.last_name}</p>}
      </label>
      <label>
        <input
          type="text"
          id={'first_name'}
          placeholder={'имя'}
          value={formik.values.first_name}
          onChange={formik.handleChange}/>
        {formik.touched.first_name && formik.errors.first_name && <p>{formik.errors.first_name}</p>}
      </label>
      <label>
        <input
          type="email"
          id={'email'}
          placeholder={'e-mail'}
          value={formik.values.email}
          onChange={formik.handleChange}/>
        {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
      </label>
      <label>
        <input
          type="text"
          id={'role'}
          placeholder={'роль'}
          value={formik.values.role}
          onChange={formik.handleChange}/>
        {formik.touched.role && formik.errors.role && <p>{formik.errors.role}</p>}
      </label>
      <button type={'submit'}>внести данные</button>
    </form>
  );
}

export default SingUp;