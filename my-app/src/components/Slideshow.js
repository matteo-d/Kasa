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

function Previous() {
  console.log('previous')
}

function Next() {
  console.log('next')
}
export default function Slideshow() {
  const { id } = useParams()
  const Data = jsonData.filter(prop => prop.id === id) 
  const Images = getLodgementImages(Data) 
  const [index, setIndex] = useState(0)
  const [array, setArray] = useState(Images)
    if (Data.length === 1) {
    return(
      <Section>
        <ArrowLeft onClick={Previous} src = {Arrow1}/>
        <ArrowRight onClick={Next} src = {Arrow2}/>
      </Section>
      )
    }
  else {
    return <Navigate to="/error" />
  }
}
