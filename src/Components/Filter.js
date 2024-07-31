import React from 'react'

const Filter = (props) => {
  let filterData = props.filterData;
  let titles = props.titles;
  let settitles =props.settitles;
  function filhandle (title){
   settitles(title);
  }
    return (
        <div style={{marginLeft:"450px"}}>
          {filterData.map((data)=>{
           return <button onClick={()=>filhandle(data.title)} style={{marginLeft:'10px',backgroundColor:"black",color:"white",padding:"5px",borderRadius:"3px",fontWeight:'bold',fontSize:"15px",marginTop:"7px",marginBottom:"7px"}}>
                {data.title}
            </button>
          })}
        </div>
      )
}

export default Filter
