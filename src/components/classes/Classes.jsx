import React from 'react' ;
import { useState } from 'react';
import { useEffect } from 'react';
import "./class.css" ;

const Classes = () => {
    const [productData, setData] = useState([])

    const fetchData = async() => {
        
       try { let res = await fetch("http://localhost:3000/data")
        let data = await res.json() ;

        if(data){
            setData(data)
        }
    }
    catch(e) {
          console.log(e)
    }

    }

    useEffect(() => {

        fetchData()

    },[])
  return (
    <div className='classesMainContainer'>

        <p className='text'>Classes</p>
        <p className='intText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vel nemo inventoreveniam ipsum consequatur odit exercitationem!</p>
         <div className='gridContainer'>
           {
              productData.length>0 && <div className='grid'>
                 {
                      productData.map((ele) => {
                           return <div className='gridChild'>
                                <img src={ele.ImageUrl}></img>
                                <div className='middleDiv'>
                                    <h3>{ele.Name}</h3>
                                    <p>{ele.ShortDesc}</p>
                                </div>
                                
                                <div className='classBtn'>
                                   <button>View</button>
                                </div>
                                
                           </div>
                      })
                 }

              </div>
           }
           

         </div>
    </div>
  )
}

export default Classes
