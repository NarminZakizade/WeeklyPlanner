import React from "react";
import { useEffect } from "react";
import classes from "./notes.module.css"

function Notes(props){
    function changeHandler(e){
        
    props.setNotes(e.target.value)
    localStorage.setItem("notesValue",e.target.value);
    }
useEffect(()=>{
    props.setNotes(localStorage.getItem("notesValue"))
},[])
    return (
        <>  <p>
                NOTES
            </p>
            <textarea className={classes.textarea}
            value={props.notes==null?"":props.notes}
            onChange={changeHandler}>
            </textarea>
        </>
    )
}
export default Notes;