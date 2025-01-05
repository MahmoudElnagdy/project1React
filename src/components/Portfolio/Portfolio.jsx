import React from 'react'
import port1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
export default function Portfolio() {
  return <>
   <div className="portfolio p-4">
   <h1 className='h1 fw-bold text-center'>PORTFOLIO COMPONENT</h1>
   </div>
 
  <div className="container p-5">
<div className="row g-4">
<div className="col-xs-12 col-sm-6 col-md-4">

<img className='w-100 rounded' src={port1} alt="" />


</div>

<div className="col-xs-12 col-sm-6 col-md-4">

<img className='w-100 rounded' src={port2} alt="" />


</div>
<div className="col-xs-12 col-sm-6 col-md-4">

<img className='w-100 rounded' src={port3} alt="" />


</div>
<div className="col-xs-12 col-sm-6 col-md-4">

<img className='w-100 rounded' src={port1} alt="" />


</div>

<div className="col-xs-12 col-sm-6 col-md-4">

<img className='w-100 rounded' src={port2} alt="" />


</div>
<div className="col-xs-12 col-sm-6 col-md-4">

<img className='w-100 rounded' src={port3} alt="" />


</div>

</div>
  </div>
  
  </>
    
  
}
