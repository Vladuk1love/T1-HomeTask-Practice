import React from 'react';
import styles from "./GetRoles.module.css";
import { useGetRolesQuery } from "../../redux/tableApi";
import Loading from "../Loading/Loading";


function GetRoles() {
  const {data, isLoading, error} = useGetRolesQuery('')
  return (
    isLoading ? <Loading/> :
      <div className={styles.get_roles_container}>
        <p>Направления подготовки IT-лагеря от T1</p>
        <ul>
          {data?.roles.map((item, index) => {
          return <li key={index} style ={{fontSize:"16px"}}>{item}</li>
        })}
        </ul>
      </div>
  );
}

export default GetRoles;