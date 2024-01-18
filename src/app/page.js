'use client'
import React, { useState } from 'react'
import MainMenu from '@/app/components/main'
import EndScreen from '@/app/components/endscreen'
import QuizScreen from '@/app/components/quiz'
import { Ctxdata } from './helper/context'


export default function Home() {
   const [mainmenu,setMainmenu] = useState('menu')
   const [score,setScore] = useState(0)
   
   

  return (
   <div className='app'>
     <h3>Brahmi Quiz Contest</h3>

     <Ctxdata.Provider value={{mainmenu,setMainmenu,score,setScore}}>
    
     {mainmenu === 'menu' && <MainMenu />}
     {mainmenu === 'quiz' && <QuizScreen />}
     {mainmenu === 'end' && <EndScreen />}
     </Ctxdata.Provider>
     
   </div>
  )
}
