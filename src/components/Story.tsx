import React from 'react'
import { User } from './Stories'
import Image from 'next/image'

export default function Story({ img, username }: { img: string, username: string }) {
  return (
    <div>
      <img src={img} alt={username} />
      <p>{username}</p>
    </div>
  )
}
