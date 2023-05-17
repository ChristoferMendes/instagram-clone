import Feed from '@/components/Feed'

export default function Home() {
  const currentUser = true;

  return (
    <main
      className={`grid ${currentUser ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto" : "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"}`}>
      <Feed />
    </main>
  )
}
