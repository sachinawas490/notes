import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {addname,addage,addsection,fetchuser} from './redux/slice/userslice.js'
function Test() {
    const temp=useSelector((state)=>state);
    const dispatch=useDispatch();
    useEffect(()=>{
     const t= dispatch(fetchuser());
    },[])
    const handle=()=>{
    //     dispatch(addname("New Name"));
    // dispatch(addage(25));
    // dispatch(addsection("New Section"));
    // const t=dispatch(fetchuser());
    //  console.log(t)
     console.log(temp)
    }
    console.log(temp)
  return (
   <>
     <h1>Hiiii</h1>
      <h1></h1>
     <button onClick={handle}>handle</button>
   </>
  )
}

export default Test;