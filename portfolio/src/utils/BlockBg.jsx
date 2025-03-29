import React from 'react'

const BlockBg = ()  =>{

  const getBlocks = ()=>{

    const {innerWidth , innerHeight} = window;
    const bs = innerWidth * .05;
    const amountOfBlocks =Math.ceil( innerHeight / bs)
    
    return [...Array(amountOfBlocks)].map((_, i) =>{
         return ( <div key={i} className='block-static'></div> )
    }) 
  }
  return (
    <div>
      
             
      {/* Image de fond  */}
      <div   className='w-full h-full absolute top-0 -z-10  '>
         {
           <div className='fixed top-0 w-screen h-screen flex'>
           {
             [...Array(20)].map((_, i)=>{
               return <div key={i} className={`column-static`}>
                 {
                  getBlocks()
                 }
               </div>
             })
           }
           
         </div>
         }
      </div>
    </div>
  )
}

export default BlockBg
