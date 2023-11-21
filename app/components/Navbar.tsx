﻿"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'

export default function Navbar() {

  const [searchBoxVisibility, setSearchVisibility] = useState(false)

  return (
    <nav className="navbar">
      <Link href="/" className="flex-none w-10">
        <Image src="/img/logo.png" width={24} height={24} alt="logo" className='w-full' />
      </Link>

      <div className={clsx('absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show', (searchBoxVisibility ? 'show' : 'hide'))}>
        <input
          type="text"
          placeholder='search'
          className='w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder: text-dark-grey md:pl-12'
        />
        <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
      </div>

      <div className='flex items-center gap-3 md:gap-6 ml-auto'>
        <button className='md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center'
          onClick={() => setSearchVisibility(currentVal => !currentVal)}
        >
          <i className="fi fi-rr-search text-2xl"></i>
        </button>

        <Link href='/editor' className='hidden md:flex gap-2 link'>
          <i className="fi fi-rr-file-edit"></i>
          <p>Write</p>
        </Link>

        <Link href='/signin' className='btn-dark py-2'>
          <p>Sign In</p>
        </Link>

        <Link href='/signup' className='btn-light py-2 hidden md:block'>
          <p>Sign Up</p>
        </Link>

      </div>
    </nav>
  )
}