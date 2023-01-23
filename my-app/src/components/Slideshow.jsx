import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from "react-router-dom"
import jsonData from "../data.json"
import { Section, ArrowLeft, ArrowRight } from "../styles/Slideshow"
import Arrow1 from "../assets/arrowLeft.svg"
import Arrow2 from "../assets/arrowRight.svg"

function getLodgementImages(data) {
  let Images = []
  for (let image of data[0].pictures){
    Images.push(image)
  }
  return Images
}


function Previous(img, idx, setIdx) {
  console.log("Entry previous : ", idx)
  let len = img.length
  if (idx === 0) {
      setIdx( idx = len - 1)
      console.log("Exit previous : ", idx)
      return 
  }
  setIdx(idx - 1)
  console.log("Exit previous : ", idx)
}

function Next(img, idx, setIdx) {
  console.log("Entry previous : ", idx)
  let len = img.length
  if (idx === len - 1) {
      setIdx( idx = 0)
      console.log("Exit previous : ", idx)
      return 
  }
  setIdx(idx + 1)
  console.log("Exit previous : ", idx)
}
export default function Slideshow() {
  const { id } = useParams()
  const Data = jsonData.filter(prop => prop.id === id)
  const Images = getLodgementImages(Data)
  const [index, setIndex] = useState(0)
  const [bgImage, setBgImage] = useState(Images[0])

  useEffect(() => {
    setBgImage(Images[index])
  }, [index, Images])

    if (Data.length === 1) {
    return(
      <Section bgImage={bgImage}>
        <ArrowLeft onClick={() => Previous(Images,index,setIndex)} src={Arrow1} />
        <ArrowRight onClick={() => Next(Images,index,setIndex)} src = {Arrow2}/>
      </Section>
      )}
  else {
    return <Navigate to="/error" />
  }
}
