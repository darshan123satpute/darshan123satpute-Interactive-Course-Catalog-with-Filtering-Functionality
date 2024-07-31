import React from 'react'
import Cards from './Cards'
import {FcLike} from "react-icons/fc"
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify'
const Card = (props) => {
  let cour = props.cour;
  let like=props.like;
  let setlike=props.setlike;
function handler(){
  if(like.includes(cour.id)){
    setlike((step)=>step.filter((cid)=>(cid!==cour.id)));
    toast.warning("like remove");
  }
  else{
    if(like.length===0){
      setlike([cour.id])
    }
    else{
      setlike((step)=>[...step,cour.id])
    }
    toast.success("like sucessfully")
  }

  }

  return (
    <div style={{width:"310px",marginLeft:"30px",marginTop:"20px",marginBottom:"20px",backgroundColor:'#1a2c47',color:"white",textAlign:'center',}}>
      <div>
        <img src={cour.image.url}></img>
      </div>
 <div style={{marginTop:"-15px"}}>
         <button onClick={handler} style={{backgroundColor:'white',padding:"5px",fontSize:"20px",marginLeft:'240px',borderRadius:"20px"}}>
         {
          like.includes(cour.id) ? (<FcLike/>) : (<FcLikePlaceholder/>)
         }
         </button>
 </div>
     
      <div>
        <p style={{fontWeight:'bold',color:'white'}}>{cour.title}</p>
        <p>
          {
            cour.description.length > 100 ? (cour.description.substr(0,100)) + "..." : (cour.description) 
          }
        </p>
      </div>
    </div>
  )
}

export default Card
