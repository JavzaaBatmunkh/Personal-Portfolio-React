import React from 'react'

export default function LittleButtonLikeComps() {
  return (
    <div>
        <div className='flex flex-cols flex-rows gap-2 pt-10'>
        <div className='bg-gray-200 rounded-full items-center text-center py-1 px-4'>React</div>
                <div className='bg-gray-200 rounded-full text-center items-center py-1 px-4'>Next.js</div>
                <div className='bg-gray-200 rounded-full text-center items-center py-1 px-4'>Typescript</div>
                <div className='bg-gray-200 rounded-full text-center items-center py-1 px-4'>Nest.js</div>
        </div>
            <div className='flex flex-cols flex-rows gap-2 pt-1'>
                <div className='bg-gray-200 rounded-full text-center items-center py-1 px-4'>PostgreSQL</div>
                <div className='bg-gray-200 rounded-full text-center items-center py-1 px-4'>Tailwindcss</div>
                <div className='bg-gray-200 rounded-full text-center items-center py-1 px-4'>Figma</div>
                <div className='bg-gray-200 rounded-full text-center items-center py-1 px-4'>Cypress</div>
            </div>
        <div className='flex flex-cols flex-rows gap-2 pt-1'>
            <div className='bg-gray-200 rounded-full text-center items-center py-1 px-4'>Storybook</div>
            <div className='bg-gray-200 rounded-full text-center items-center py-1 px-4'>Git</div>
        </div>

    </div>
  )
}
