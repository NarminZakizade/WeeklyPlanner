import React from "react";
import Day from "./components/days";
import Todo from "./components/todo";
import Notes from "./components/notes";
import classes from "./App.module.css";
import {useState} from "react";
import { useEffect } from "react";
const ref = React.createRef();
function App() {
 
  const [todo,setTodo]=useState("");
  const [notes,setNotes]=useState("");
  const [monday,setMonday]=useState("");
  const [tuesday,setTuesday]=useState("");
  const [wednesday,setWednesday]=useState("");
  const [thursday,setThursday]=useState("");
  const [friday,setFriday]=useState("");
  const [saturday,setSaturday]=useState("");
  const [sunday,setSunday]=useState("");
  const [week, setWeek]=useState("")
function handleChange(e){
setWeek(e.target.value);
localStorage.setItem("weekValue",e.target.value);
}
useEffect(()=>{
  setWeek(localStorage.getItem("weekValue"));
},[]);
  function deleteAll(){
    setWeek("");
    setTodo("");
    setNotes("");
    setMonday("");
    setTuesday("");
    setWednesday("");
    setThursday("");
    setFriday("");
    setSaturday("");
    setSunday("");
    setWeek("");
    localStorage.removeItem("weekValue")
    localStorage.removeItem("mondayValue")
    localStorage.removeItem("tuesdayValue")
    localStorage.removeItem("wednesdayValue")
    localStorage.removeItem("thursdayValue")
    localStorage.removeItem("fridayValue")
    localStorage.removeItem("saturdayValue")
    localStorage.removeItem("sundayValue")
    localStorage.removeItem("todoValue")
    localStorage.removeItem("notesValue")
  }
  return (
    <>
    <div className={classes.container} ref={ref}>
    <div className={classes.floatChild}>
<div className={classes.left}>
    <p className={classes.title}>Weekly planner</p>
      <Day monday={monday} setMonday={setMonday} tuesday={tuesday} setTuesday={setTuesday} wednesday={wednesday} setWednesday={setWednesday} thursday={thursday} setThursday={setThursday} friday={friday} setFriday={setFriday} saturday={saturday} setSaturday={setSaturday} sunday={sunday} setSunday={setSunday}/>
      </div>
    </div>
    <div  className={classes.floatChild}>
    <div className={classes.upper}>
    <p className={classes.title}>Week:<input size="12" value={week==null?"":week} onChange={handleChange} className={classes.week} type="text"></input> <button onClick={deleteAll}>Clear all</button></p>
   

      <Todo setTodo={setTodo} todo={todo}/>
    </div>
    <div className={classes.lower}>
<Notes notes={notes} setNotes={setNotes}/>
    </div>
    </div>
    </div>

    
    </>
    
  );
}
export default App;
