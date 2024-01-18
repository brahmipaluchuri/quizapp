'use client'
import { Ctxdata } from '../helper/context';
import React, { useContext, useEffect, useState } from 'react'

const MainMenu=()=>{
    const {setMainmenu} = useContext(Ctxdata)
    
    return (
        <div className='menu'>
          <button onClick={()=>setMainmenu('quiz')}>Start Quiz</button>
          
        </div>
    )
}

export default MainMenu