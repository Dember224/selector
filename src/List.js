import { Fragment, useEffect } from "react";
import { Checkbox } from "./Checkbox";
import "./List.css";
import { useState } from "react";
import './selectionBar.css'

export function List(props) {

const [checked, setCheck] = useState(props.items);

const [count, setCount] = useState(0);

useEffect(()=>{
  let current_count = 0;
  for( const territory in checked){
    if(checked[territory]== true){
      current_count ++;
    }
  }
  setCount(current_count)

}, [checked])

function handleClick(item){
  const new_checked = checked[item] ? false : true;
  let updated_object = {...checked }
  updated_object[item] =  new_checked; 
  setCheck(updated_object)
  
}

function handleUnselectAll(){
  setCheck(props.items)

}

function handleSelectAll(){
  let updated_checks = {...checked}
  for (const territory in updated_checks){
    updated_checks[territory] = true;
  }
  setCheck(updated_checks)
}



  return (
    <div>
        <div className='selection_bar'>
            <>{count} Selected</><button onClick={handleSelectAll} >Select All</button> <button onClick={handleUnselectAll}>Unselect All</button>
        </div>
    <div className="list">
      {Object.keys(props.items).map((item) => (
        <Fragment  >
          <div key={item} onClick={()=>{handleClick(item)}}>
            {<Checkbox key={item} selected={ checked[item] } />}
            {item}<br />
          </div>
            
        </Fragment>
      ))}
    </div>
    </div>

  );
}
