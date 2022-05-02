import React from "react";
import classes from "./todo.module.css";
import { useEffect } from "react";

function Todo(props){
   
    const changeHandler=(e)=>{
        props.setTodo(e.target.value);
        localStorage.setItem("todoValue",e.target.value)
    }
    useEffect(()=>{
        props.setTodo(localStorage.getItem("todoValue"));
    },[]);
    return <>
       <p>TO DO</p> 
       <textarea className={classes.textarea} value={props.todo==null?"":props.todo} onChange={changeHandler}>
       </textarea>
    </>
}
export default Todo;