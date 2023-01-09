import React from 'react' ;
import "./introd.css" ;

const Introd = () => {
  return (
    <div className='introContainer'>
       <div>
        <h2>Title</h2>
       </div>
       <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perferendis debitis, unde mollitia <br/>
        commodi eos cum doloremque laboriosam quo quidem! Illo veritatis ducimus officiis officia provident quisquam, et placeat deleniti?
       </div>
       <div>
        <button className='readMoreBtn'>Read More</button>
       </div>
    </div>
  )
}

export default Introd
