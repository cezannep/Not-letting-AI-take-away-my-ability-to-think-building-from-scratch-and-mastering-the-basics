import React from 'react'

const MainText = () => {

    const data = ["branding","web design","marketing","ui/ux design","development","motion design"];

  return (
    <div className='flex flex-col'>
        {
            data.map((x,index)=>{
                return (
                    <h1 className='text-white text-8xl font-["Anton"] font-stretch-semi-expanded' key={index}>{x.toUpperCase()}</h1>
                )
            })
        }
    </div>
  )
}

export default MainText