'use client'
import { Ctxdata } from '../helper/context';
import { Questions } from '../helper/question';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

const QuizScreen=()=>{
    const [data,setData] = useState(0)
    const [chooseOptions,setChooseOptions] = useState("") 
    const [timerclass,setTimerclass] = useState('')
    // const [countdown,setCountdown] = useState(10*60)
    const router = useRouter()


    const{score,setScore,mainmenu,setMainmenu} = useContext(Ctxdata)

     const nextQuestion=()=>{ 
         if(Questions[data].Answer === chooseOptions){
            setScore(score + 1)
         }

         setData(data + 1)
         
     }
   
      const handFinshed=()=>{
        if(Questions[data].Answer == chooseOptions){
            setData(data + 1)
       } 
       setMainmenu("end")

      }

      const [minutes,setMinutes] = useState()
      const [seconds,setSeconds] = useState()
      
  
     let intervalid;
     const getCcountdown=()=>{
      const countDownDate = new Date().getTime() + (10 * 60 * 1000) //60 seconds 60 minutes 1000 millseconds //10minutes
      // const countDownDate = new Date().getTime() + (countdown * 1000) //60 seconds 60 minutes 1000 millseconds //10minutes
       intervalid = setInterval(()=>{
        const now = new Date().getTime()
        const distance = countDownDate - now
  
  
        const minutes = Math.floor(distance % (1000 * 60 * 60)/(1000 * 60))
        const seconds = Math.floor(distance % (1000 * 60)/1000)
      
        if(distance < 0){
          clearInterval(intervalid)
          router.push('/logout')
        }
        else{
         setMinutes(minutes)
         setSeconds(seconds)

        //  localStorage.setItem('countdown',countdown.toString)
        }

        if(distance <= 2 * 60 * 1000){
          setTimerclass('red')

      
      }


        // if(distance < 0){
        //   clearInterval(intervalid)
        //   setTimerclass('green')
        // }else if(distance <= 2 * 60 * 1000){
        //   setTimerclass('red')
        // }else{
        //   setTimerclass('')
        // }

        //  setMinutes(minutes)
        //  setSeconds(seconds)
      
      })
       
     }
     
     useEffect(()=>{
      getCcountdown()

     },[])

   



    return (
        <div className='quizscreen'>
          <p className={`timer ${timerclass}`}><b>Timer :- </b><span className='counttimer'>{`${minutes} min : ${seconds}seconds`}</span></p>
         <h3>{Questions[data].id}.{Questions[data].prompt}</h3>      
         <div className='quizoptions'>
           <button className={data === 'A' ? "active" : ""} onClick={()=>setChooseOptions("A")}>{Questions[data].optionA}</button>
           <button className={data === 'B' ? "active" : ""} onClick={()=>setChooseOptions("B")}>{Questions[data].optionB}</button>
           <button className={data === 'C' ? "active" : ""} onClick={()=>setChooseOptions("C")}>{Questions[data].optionC}</button>
           <button className={data === 'D' ? "active" : ""} onClick={()=>setChooseOptions("D")}>{Questions[data].optionD}</button>
         </div>
         {data == Questions.length-1 ? (<span className='finsedQuiz'><button onClick={handFinshed}>Finished Quiz</button></span>) : (
          <span className='nextbutton'><button onClick={nextQuestion}>Next Question</button></span> 
         )}
         
        </div>
    )
}

export default QuizScreen