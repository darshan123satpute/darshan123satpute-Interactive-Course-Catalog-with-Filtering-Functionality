import React, { useState } from 'react'
import Card from './Card'
const Cards = (props) => {
  let course = props.course;
  let titles = props.titles;
const[like,setlike]=useState([]);
const allcourse=[];
const getcourse = () =>{
  if(titles== "All"){ 
     Object.values(course).forEach((coursecatagory)=>{
    coursecatagory.forEach((courses)=>{
      allcourse.push(courses);
     
    })
  
  })
  return allcourse;
}
  
  else{
    return course[titles];
  }

  
}

  return (
    <div style={{display:"flex",flexWrap:"wrap",marginLeft:"130px"}}>
      {
      getcourse().map((cour)=>{
        return <Card cour={cour} like={like} setlike={setlike}/>
      })
    }
    </div>
  )
}

export default Cards
