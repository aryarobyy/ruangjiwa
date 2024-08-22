"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/Input"
import InputImage from '@/components/system/InputImage'
import useToast from '@/hooks/useHotToast'
import Button from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'


const page = () => {
  const [tempImg, setTempImg] = useState(null)
  const {updateToast} = useToast();
  const {user} = useAuth()
  const [post, setPost] = useState({
    userId: '',
    postedBy: '',
    title: '',
    content: '',
    image: ''
  })

    const handleTitle = (e) => {
      const MAX_CHAR = 80;
      const inpuTitle = e.target.value;
      if(inpuTitle.length > MAX_CHAR ) {
        const finalText = inpuTitle.slice(0, MAX_CHAR)
        setPost((prev) => ({ ...prev, title: finalText }))
        setRemainingChar(0);
      } else {
        setPost((prev) => ({ ...prev, title: inpuTitle}))
        setRemainingChar(MAX_CHAR - inpuTitle.length)
      }
    }

    const handleContent = (e) => {
      const MAX_CHAR = 600;
      const inputContent = e.target.value;
      if(inputContent.length > MAX_CHAR ) {
        const finalContent = inputContent.slice(0, MAX_CHAR)
        setPost((prev) => ({ ...prev, title: finalContent }))
        setRemainingChar(0);
      } else {
        setPost((prev) => ({ ...prev, content: inputContent}))
        setRemainingChar(MAX_CHAR - inputContent.length)
      }
    }

    // const handleImage = () => {

    // }

    const handleSubmit = () => {

    }
  return (
    <>
      <Input onChange={handleTitle} value={post.title}/>
      <Input onChange={handleContent} value={post.content}/>
      {/* <InputImage onChange={handleImage} /> */}
      <Button onClick={handleSubmit} />
    </>
  )
}

export default page