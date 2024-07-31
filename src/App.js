import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { apiUrl,filterData} from './data'
import Cards from './Components/Cards'
import { toast } from 'react-toastify'
import Filter from './Components/Filter'
import Spinner from './Components/Spinner'
import Card from './Components/Card'

const App = () => {
  const[course,setcourse]=useState("")
  const[loading,setloading]=useState(true);
  const[titles,settitles]=useState(filterData[0].title);

useEffect( ()=>{

  const fetchData = async()=>{
  setloading(true);
  try{
      const res = await fetch(apiUrl)
      const output= await res.json();
      console.log(output);
      setcourse(output.data)
    }

  
  catch(error){
  toast.error("Please check your internet connection")
  }
  setloading(false);
}
fetchData();
},[]);


  return (
    <div style={{backgroundColor:'#011836',height:'360vh'}}>
    <div>
    <Navbar/>
    </div>
    <div >
    <Filter filterData={filterData} titles={titles} settitles={settitles} />
    </div>
    <div>
      {
        loading ? (<Spinner/>) : (<Cards course={course} titles={titles}/>)
      }
    </div>
    </div>
  )
}

export default App
