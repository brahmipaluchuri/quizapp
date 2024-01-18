'use client';
import React from 'react'
import './logout.css'
import Link from 'next/link';

const Logout=()=>{
    return (
        <div className='logout'>
           <h2>Logout your Quiz page</h2>
           <Link href='/' style={{textDecoration:"none"}}>
           <button>home page</button>
           </Link>
          
        </div>
    )
}

export default Logout;