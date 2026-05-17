import ImageBar from '../imagebar/ImageBar'
import TextBar from '../TextBar/TextBar'
import { useState } from 'react'

const Screen1 = () => {
  const [index,setIndex] = useState(-1);
  function receiveIndex(id:number){
    setIndex(id);
  }
  return (
    <>
    <ImageBar sendIndex={receiveIndex}/>
    <TextBar index={index}/>
    </>
    
  )
}

export default Screen1