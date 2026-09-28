
import { getPaginatedBlogs } from "@/lib/data";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
export default async function BlogsPage({ searchParams }) {
  const params = await searchParams;

  const page = Number(params?.page) || 1;

  const { blogs, totalPages } = await getPaginatedBlogs(page, 8);

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        All Blogs
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id.toString()}
            blog={blog}
          />
        ))}
      </div>

    <div className="mt-10 flex items-center justify-center gap-4">
  {page > 1 ? (
    <Link
      href={`/blogs?page=${page - 1}`}
      className="rounded-lg border px-4 py-2 hover:bg-muted"
    >
      Previous
    </Link>
  ) : (
    <span className="rounded-lg border px-4 py-2 opacity-50 cursor-not-allowed">
      Previous
    </span>
  )}

  <span className="text-sm text-muted-foreground">
    Page {page} of {totalPages}
  </span>

  {page < totalPages ? (
    <Link
      href={`/blogs?page=${page + 1}`}
      className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
    >
      Next
    </Link>
  ) : (
    <span className="rounded-lg bg-indigo-600 px-4 py-2 text-white opacity-50 cursor-not-allowed">
      Next
    </span>
  )}
</div>

    </main>
  );
}

