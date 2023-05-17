import {
  EllipsisHorizontalIcon,
  HeartIcon,
  BookmarkIcon,
  ChatBubbleLeftIcon,
  FaceSmileIcon
} from '@heroicons/react/24/outline'

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

      <div className={'flex justify-between px-4 pt-4'}>
        <div className={'flex space-x-4'}>
          <HeartIcon className={'post-icon'} />
          <ChatBubbleLeftIcon className={'post-icon'} />
        </div>
        <BookmarkIcon className={'post-icon'} />
      </div>

      <p className={'p-5 truncate'}>
        <span className={'font-bold mr-2'}>{username}</span>
        {caption}
      </p>

      <form action="" className={'flex items-center p-4'}>
        <FaceSmileIcon className={'h-6'} />
        <input className={'border-none flex-1 focus:ring-0'} type="text" name="" id=""
               placeholder={'Enter your comment...'} />
        <button className={'text-blue-400 font-bold select-none'}>Post</button>
      </form>
    </div>
  )
}