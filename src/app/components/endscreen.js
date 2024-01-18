'use client'
import { Ctxdata } from '../helper/context'
import { Questions } from '../helper/question'
import React, { useContext } from 'react'

const EndScreen=()=>{
    const {score,setScore,mainmenu,setMainmenu} = useContext(Ctxdata)
    
      const handleRestart=()=>{
        setScore(0)
        setMainmenu("menu")
      }
    
    return (
        <div className='endscreen'>
          <h2>Finally You Got It Score</h2>
          <h3>your score : {score} /{Questions.length}</h3>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen