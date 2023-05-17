import Stories from "./Stories";
import Posts from "@/components/Posts";

export default function Feed() {
  return (
    <>
      <section className={'md:col-span-2'}>
        <Stories />

        <Posts />
      </section>

      <section>

      </section>
    </>
  )
}
