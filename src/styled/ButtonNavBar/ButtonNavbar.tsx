import React from "react"
import style from "./ButtonNavBar.module.css"

type ButtonNavBarProps = {
   code: string,
   tag: string
}

export const ButtonNavBar: React.FC<ButtonNavBarProps> = ({ code, tag }) => {

   return (
      <div className={style.div}>
         <button className={style.button}>
            <p className={style.tag}>{code} </p>
            <p className={style.text}>{tag} </p>
         </button>
      </div>
   )
}