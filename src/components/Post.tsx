import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

export default function Post({ username, userImg, id, img, caption }: {
  username: string,
  userImg: string,
  id: string,
  img: string,
  caption: string
}) {
  return (
    <div className={'bg-white my-7 border rounded-md'}>
      <div className={'flex items-center'}>
        <img className={'h-12 rounded-full object-cover border p-1 mr-3'} src={userImg} alt="username" />
        <p className={'font-bold flex-1'}>{username}</p>
        <EllipsisHorizontalIcon className={'h-5'} />
      </div>

      <img src={img} alt="" className="object-cover w-full" />
    </div>
  )
}