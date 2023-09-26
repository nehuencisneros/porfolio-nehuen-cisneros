import React from "react";
import style from "./Select.module.css"

type ButtonSelectProps = {
   name: string,
   number: string
}

export const SelectButton: React.FC<ButtonSelectProps> = ({name, number}) => {

   return(
      <div style={{display: "flex", alignItems: "center"}}>
         <h4>
            {number}
         </h4>
         <button className={style.button}>
            {name}
         </button>
      </div>
   )
}