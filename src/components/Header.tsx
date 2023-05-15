import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'
import { faker } from '@faker-js/faker'

export default function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image
          alt='instagram'
          src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
          fill
          className="object-contain"
        // onClick={() => router.push("/")}
        />
      </div>
      <div className="cursor-pointer h-24 w-10 relative lg:hidden">
        <Image
          alt='instagram'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
          fill
          className="object-contain"
        // onClick={() => router.push("/")}
        />
      </div>

      <div className='relative '>
        <div className='absolute top-2 left-2'>
          <MagnifyingGlassIcon className='h-5 text-gray-500' />
        </div>
        <input type="text" name="" id="" title='text' placeholder='Search' className='bg-gray-50 pl-10  border-gray-500 text-sm focus:ring-black focus:border-black rounded-md' />
      </div>

      <div className='flex space-x-4 items-center'>
        <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
        <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
        <Image src={faker.image.avatar()} alt="username" width={'42'} height={'42'} className='rounded-full cursor-pointer'/>
      </div>
    </div>
  )


}
