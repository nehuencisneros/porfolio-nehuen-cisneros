import React from "react";
import style from "./Select.module.css"

type ButtonSelectProps = {
   name: string,
   number: string
}

export const SelectButton: React.FC<ButtonSelectProps> = ({ name, number }) => {

   return (
      <div style={{ display: "flex", alignItems: "center" }}>
         <h4 className={style.textH4}>
            [{number}] 
         </h4>
         <h5 className={style.textH5}>o</h5>
         <button className={style.button}>
               ir a {name}
            <div className={style.container}>
            </div>
         </button>
      </div>
   )
}