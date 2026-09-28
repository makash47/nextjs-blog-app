import BlogCard from "@/components/BlogCard";
import { getBlogsByCategory } from "@/lib/data";


export default async function CategoryPage({ params }) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);

  const blogs = await getBlogsByCategory(decodedCategory);

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">{category}</h1>

      {blogs.length === 0 ? (
        <p>No blogs found in this category.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
        
            <BlogCard key={blog._id} blog={blog}/>
          ))}
        </div>
      )}
    </main>
  );
}