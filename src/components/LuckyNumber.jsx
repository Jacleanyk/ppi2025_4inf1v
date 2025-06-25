import {useState} from "react";
 import styles from "./LuckyNumber.module.css";

 
 export function LuckyNumber() {
    //React hook - userState();

  const [luckyNumber, setLuckNumber] = useState  (0); 

  function handleClick(){
 
    luckyNumber +=1;
    setLuckNumber(Math.ceil(Math.random()* 31));
   

  }

  return(
    <div className={styles.container}>
      {luckyNumber ? (
        <h1>Lucky Number </h1>
      ): (
        <h1>Lucky number </h1>
      )}

    
    <button className={styles.button} onClick={handleClick}>
           Im feeling lucky today!
    </button>
        {}
    </div>
  
   );
 }
 
