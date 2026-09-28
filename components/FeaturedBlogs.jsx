import BlogCard from "./BlogCard"
const FeaturedBlogs = ({blogs}) => {
  return (
    <section className="w-full">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-6">
          Featured Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {
            blogs?.map((blog)=>(
              <BlogCard
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
