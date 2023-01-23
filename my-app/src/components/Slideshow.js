import { useParams, Navigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import jsonData from "../data.json"

import { Section, ArrowLeft, ArrowRight } from "../styles/Slideshow"

import Arrow1 from "../assets/arrowLeft.svg"
import Arrow2 from "../assets/arrowRight.svg"

/*function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  });
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}
*/

export default function Slideshow() {
  const { id } = useParams()
  const Data = jsonData.filter(prop => prop.id === id)
  if (Data.length === 1) {
    return(
      <Section>
        <ArrowLeft src = {Arrow1}/>
        <ArrowRight src = {Arrow2}/>
      </Section>
    )}
  else {
    return <Navigate to="/error" />
  }
}
