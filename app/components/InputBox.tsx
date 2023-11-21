'use client'

import { useState } from 'react'
import clsx from 'clsx'

type InputBoxType = {
  type: string,
  name: string,
  id?: string,
  value?: string,
  placeholder: string,
  icon: string
}
export default function InputBox({ type, name, id, value, placeholder, icon }: InputBoxType) {
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <div className='relative w-[100%] mb-4'>
      <input
        type={type === 'password' ? passwordVisible ? 'text' : 'password' : type}
        name={name}
        id={id}
        defaultValue={value}
        placeholder={placeholder}
        className='input-box'
      />
      <i className={`fi ${icon} input-icon`}></i>

      {
        type === 'password' ?
          <i className={clsx('fi input-icon left-[auto] right-4 cursor-pointer', (!passwordVisible ? 'fi-rr-eye-crossed' : 'fi-rr-eye'))}
            onClick={() => setPasswordVisible(currentVal => !currentVal)}></i>
          : ''
      }

    </div>
  )
}
