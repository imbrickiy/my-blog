﻿import Link from 'next/link'
import InputBox from './InputBox'
import Image from 'next/image'

type UserAuthFormType = {
  type: string
}
export default function UserAuthForm({ type }: UserAuthFormType) {
  return (
    <section className='h-cover flex items-center justify-center'>
      <form action="" className='w-[80%] max-w-[400px]'>
        <h1 className='text-4xl font-gelasio capitalize text-center mb-24 '>
          {type === 'sign-in' ? 'Welcome back' : 'Join us today'}
        </h1>

        {
          type !== 'sign-in' ?
            <InputBox type='text' name='fullname' placeholder='Full Name' icon='fi-rr-user' />
            : ''
        }

        <InputBox type='email' name='email' placeholder='Email' icon='fi-rr-at' />
        <InputBox type='password' name='password' placeholder='Password' icon='fi-rr-key' />

        <button className='btn-dark center mt-14'
          type='submit'>
          {type.replace('-', ' ')}
        </button>

        <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
          <hr className='w-1/2 border-black' />
          <p>or</p>
          <hr className='w-1/2 border-black' />
        </div>

        <button className='btn-dark flex items-center justify-center gap-4 w-[90%] center'>
          <Image src='/img/google.png' width='10' height='10' className='w-5' alt='google'></Image>
          continue with google
        </button>

        {
          type === 'sign-in' ?
            <p className='mt-6 text-dark-grey text-xl text-center'> Don&apos;t have an account ?
              <Link href='/signup' className='underline text-black text-xl ml-1'>Join us today</Link>
            </p>
            : 
            <p className='mt-6 text-dark-grey text-xl text-center'>Already a member ?
              <Link href='/signin' className='underline text-black text-xl ml-1'>Sign in here</Link>
            </p>
        }

      </form>
    </section>
  )
}
