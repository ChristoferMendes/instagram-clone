'use client';
import minifaker from 'minifaker'
import { useEffect, useState } from 'react'
import 'minifaker/locales/en'
import Story from './Story';

export interface User {
  username: string
  img: string
  id: number

}

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState<User[]>([])

  useEffect(() => {

    const storyUsers = minifaker.array(20, (i) => {
      const randomNumber = Math.ceil(Math.random() * 70)

      return {
        username: minifaker.username({ locale: 'en' }),
        img: `https://i.pravatar.cc/150?img=${randomNumber},`,
        id: i
      }
    });

    setStoryUsers(storyUsers);
  }, [])

  return (
    <div
      className={'flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none'}>
      {storyUsers.map(user => (
        <Story key={user.id} img={user.img} username={user.username} />
      ))}
    </div>
  )
}
