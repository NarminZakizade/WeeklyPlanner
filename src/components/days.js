import React from "react";
import classes from "./days.module.css";
import { useEffect } from "react";

function Day({monday, setMonday, tuesday, setTuesday, wednesday, setWednesday, thursday, setThursday,friday, setFriday, saturday, setSaturday, sunday, setSunday}) {

  const mondaychangeHandler=(e)=>{
  setMonday(e.target.value);
    localStorage.setItem("mondayValue",e.target.value)
  }
  const tuesdaychangeHandler=(e)=>{
    setTuesday(e.target.value);
      localStorage.setItem("tuesdayValue",e.target.value)
    }
    const wednesdaychangeHandler=(e)=>{
      setWednesday(e.target.value);
        localStorage.setItem("wednesdayValue",e.target.value)
      }
      const thursdaychangeHandler=(e)=>{
        setThursday(e.target.value);
          localStorage.setItem("thursdayValue",e.target.value)
        }
        const fridaychangeHandler=(e)=>{
          setFriday(e.target.value);
            localStorage.setItem("fridayValue",e.target.value)
          }
          const saturdaychangeHandler=(e)=>{
            setSaturday(e.target.value);
              localStorage.setItem("saturdayValue",e.target.value)
            }
            const sundaychangeHandler=(e)=>{
              setSunday(e.target.value);
                localStorage.setItem("sundayValue",e.target.value)
              }
useEffect(()=>{
    setMonday(localStorage.getItem("mondayValue"));
},[]);
useEffect(()=>{
 setTuesday(localStorage.getItem("tuesdayValue"));
},[]);
useEffect(()=>{
  setWednesday(localStorage.getItem("wednesdayValue"));
},[]);
useEffect(()=>{
  setThursday(localStorage.getItem("thursdayValue"));
},[]);
useEffect(()=>{
  setFriday(localStorage.getItem("fridayValue"));
},[]);
useEffect(()=>{
  setSaturday(localStorage.getItem("saturdayValue"));
},[]);
useEffect(()=>{
  setSunday(localStorage.getItem("sundayValue"));
},[]);
  return (
 
    <>
      <p className={classes.dayText}>Monday</p>
      <textarea value={monday==null?"":monday} onChange={mondaychangeHandler} className={classes.textarea} > </textarea>
      <p className={classes.dayText}>Tuesday</p>
      <textarea value={tuesday==null?"":tuesday} onChange={tuesdaychangeHandler} className={classes.textarea} > </textarea>
      <p className={classes.dayText}>Wednesday</p>
      <textarea value={wednesday==null?"":wednesday} onChange={wednesdaychangeHandler} className={classes.textarea} > </textarea>
      <p className={classes.dayText}>Thursday</p>
      <textarea value={thursday==null?"":thursday} onChange={thursdaychangeHandler} className={classes.textarea} > </textarea>
      <p className={classes.dayText}>Friday</p>
      <textarea value={friday==null?"":friday} onChange={fridaychangeHandler} className={classes.textarea} > </textarea>
      <p className={classes.dayText}>Saturday</p>
      <textarea value={saturday==null?"":saturday} onChange={saturdaychangeHandler} className={classes.textarea} > </textarea>
      <p className={classes.dayText}>Sunday</p>
      <textarea value={sunday==null?"":sunday} onChange={sundaychangeHandler} className={classes.textarea} > </textarea>
      </>

  );
}
export default Day;
