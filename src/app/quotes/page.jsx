"use client"
import Button from "@/components/ui/Button";
import quotes from "../assets/data/quotesData";
import React, { useState } from 'react'

const page = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setResult(randomQuote);
  }

  return (
    <>
      <h1>gacor</h1>
      {result ? (
        <p>{result.quote}</p>
      ) : (
        <p>coba klik</p>
      )}
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  )
}

export default page