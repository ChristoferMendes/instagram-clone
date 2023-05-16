import { Post } from "@/components/Posts";

export default function Post({ username, userImg, id, img, caption }: {
  username: string,
  userImg: string,
  id: string,
  img: string,
  caption: string
}) {
  return (
    <div>
      <h1>{username}</h1>
    </div>
  )
}