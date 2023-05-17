import minifaker from "minifaker";
import Post from './Post'
import 'minifaker/locales/en'

export interface Post {
  id: string;
  username: string;
  userImg: string;
  img: string;
  caption: string;
}

const genPost = () => {
  const posts: Post[] = minifaker.array(4, (i) => {
    const randomNumber = Math.ceil(Math.random() * 70)

    return {
      id: minifaker.uuid.v4(),
      username: minifaker.name({ locale: 'en' }),
      userImg: `https://i.pravatar.cc/150?img=${randomNumber},`,
      img: minifaker.imageUrlFromPlaceholder({ width: 1200, height: 1200 }),
      caption: `Nice capture. This is the picture number ${i}`
    }
  })

  return posts;
}

export default function Posts() {
  const posts = genPost()

  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          caption={post.caption}
          id={post.id}
          img={post.img}
          userImg={post.userImg}
          username={post.username}
        />
      ))}
    </div>
  )
}