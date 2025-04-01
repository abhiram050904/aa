import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-8'>
       
        <div className='flex flex-row gap-20 px-5 mx-10'>
      <div className='flex flex-col gap-3'>
        <h3 className='font-semibold'>Contact details:</h3>
        <p>name:<span className='font-semibold'>Abhiram</span></p>
        <p>mobile:<span className='font-semibold'>+91 12345678</span></p>
        <p>email:<span className='font-semibold'>abc@gmail.com</span></p>
      </div>
      <div>
        <p>Address:</p>
        <p className='font-semibold'>abc nagar,def-123345.</p>
      </div>
      <div>
         <p>Home</p>
         <p>About</p>
         <p>dashboard</p>
         <p>Login</p>

      </div>
    </div>
        <div className='font-semibold'>
        <hr/>
        <p className='flex items-center justify-center pt-4'>&copy; 2025 Abhiram. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
