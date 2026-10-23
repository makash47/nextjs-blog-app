
import { getPaginatedBlogs } from "@/lib/data";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { Sparkle } from "lucide-react";

export const metadata = {
  title: "Blogs",
  description: "Browse all Blogify blogs related to programming, web dev , databases."
}


export default async function BlogsPage({ searchParams }) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const { blogs, totalPages } = await getPaginatedBlogs(page, 8);


  const baseUrl = process.env.SITE_URL||"http://localhost:3000";
const blogsPageSchema = {
  "@context":"https:schema.org",
  "@type":"CollectionPage",
  name:"Blogify Articles",
  description:"Explore articles, tutorials, and insights on web development, React, Next.js, JavaScript, and more.",
    url:
    page > 1
      ? `${baseUrl}/blogs?page=${page}`
      : `${baseUrl}/blogs`,
}

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <script type="application/ld+json"
      dangerouslySetInnerHTML={{
    __html: JSON.stringify(blogsPageSchema).replace(
      /</g,"\\u003c"),}}
/>

      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-600 rounded-full px-3 text-sm py-1 text-indigo-700 dark:bg-indigo-950/50"><Sparkle height={15} />The Blogify Journal</div>
        <h1 className="text-primary text-4xl font-bold font-heading">Explore All<span className="text-indigo-600">Articles</span></h1>
        <p className="font-sans text-lg text-gray-600 dark:text-gray-400">Discover technical deep-dives, industry insights, and creative guides.</p>
      </div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
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

