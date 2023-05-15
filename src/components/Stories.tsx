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
    const randomNumber = Math.ceil(Math.random() * 70)

    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }),
      img: `https://i.pravatar.cc/150?img=${randomNumber},`,
      id: i
    }));

    setStoryUsers(storyUsers);
  }, [])

  return (
    <div>
      {storyUsers.map(user => (
        <Story key={user.id} img={user.img} username={user.username} />
      ))}
    </div>
  )
}
