import { Fragment, useEffect } from "react";
import { Checkbox } from "./Checkbox";
import "./List.css";
import { useState } from "react";
import './selectionBar.css'

export function List(props) {

const [checked, setCheck] = useState(props.items);
const [allSelected, setAllSelected ] =  useState(false);
const [allUnSelected, setAllUnSelected ] = useState(false);

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
  setAllSelected(false)
  setAllUnSelected(false)
  //running out of time. This doesn't handle edge cases. Can Unselect all manually and unselect button wouldn't gray.
}

function handleUnselectAll(){
  setCheck(props.items)
  setAllUnSelected(true)
  setAllSelected(false)

}

function handleSelectAll(){
  let updated_checks = {...checked}
  for (const territory in updated_checks){
    updated_checks[territory] = true;
  }
  setCheck(updated_checks)
  setAllSelected(true)
  setAllUnSelected(false)
}



  return (
    <div>
        <div className='selection_bar'>
            <>{count} Selected</><button onClick={handleSelectAll} disabled={allSelected} >Select All</button> <button onClick={handleUnselectAll} disabled={allUnSelected}>Unselect All</button>
        </div>
    <div className="list">
      {Object.keys(props.items).map((item) => (
        <Fragment  >
          <div key={item} onClick={()=>{handleClick(item)}}>
            
            {item}{<Checkbox style={{paddingLeft:'50px'}} key={item} selected={ checked[item] } />}<br />
          </div>
            
        </Fragment>
      ))}
    </div>
    </div>

  );
}
