import React from "react";
import style from "./Select.module.css"

type ButtonSelectProps = {
   name: string,
   number: string | null,
}

export const SelectButton: React.FC<ButtonSelectProps> = ({ name, number }) => {

   return (
      <>
         {
            number ?
               <div style={{ display: "flex", alignItems: "center" }} >
                  <h4 className={style.textH4}>
                     {'>'} [{number}]
                  </h4>
                  <h5 className={style.textH5}>o</h5>
                  <button className={style.button}>
                     Ir a {name}
                     <div className={style.container}>
                     </div>
                  </button>
               </div >
               :
               <button className={style.button}>
                  {name}
                  <div className={style.container}>
                  </div>
               </button>
         }
      </>
   )
}