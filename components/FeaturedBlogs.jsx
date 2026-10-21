import { ArrowRight,} from "lucide-react"
import Link from "next/link"
import FeaturedBlogsCard from "./FeaturedBlogsCard"
const FeaturedBlogs = ({blogs}) => {
  return (
    <section className="w-full my-6">

      <div className="max-w-6xl mx-auto px-6">
        <h3 className="uppercase text-indigo-600 mb-2 text-sm">Editors's Picks</h3>
        <div className="flex items-center justify-between mb-6">
        <h2 className='text-3xl md:text-4xl text-primary font-bold font-heading'>
          Featured Blogs
        </h2>
        <Link href="/blogs"
         className="flex items-center gap-2 text-primary/80 hover:text-primary">View All <ArrowRight height={15} className=""/></Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {
            blogs?.slice(0,4).map((blog)=>(
              <FeaturedBlogsCard
                key={blog._id}
                blog={blog}
              />
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default FeaturedBlogs
