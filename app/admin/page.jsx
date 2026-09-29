import DeleteButton from "@/components/DeleteButton";
import { headers } from "next/headers";
import Link from "next/link"
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Blog from "@/models/Blogs";
import connectDB from "@/lib/mongodb";
import EditBlogDialogue from "@/components/EditBlogDialogue";

export default async function AdminPage() {
 
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  await connectDB()
  let blogs;
  if (session.user.role === "admin") {
    blogs = await Blog.find();
  } else {
    blogs = await Blog.find({
      authorId: session.user.id,
    }).sort({ createdAt: -1 });
  }
  blogs = JSON.parse(JSON.stringify(blogs));
  return (
    <>
    <div className="w-full py-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-3xl">Admin Dashboard</h1>
          <h2>Hello {session.user.name}</h2>
          <Link href="/admin/create"
          className="bg-indigo-600 px-5 py-1 rounded-sm text-white">Create Blog</Link>
        </div>

        <div className="flex flex-col gap-5 justify-center mt-6">
          {
            blogs.map((blog)=>(

              <div key={blog._id}
              className="flex items-center justify-between border border-gray-300 p-3">
                <div>
                  <h1 className="font-bold">{blog.title}</h1>
                  <h2 className="text-sm">{blog.category}</h2>
                </div>
                <div className="flex gap-3">
                  <EditBlogDialogue blog={blog}/>
                 
                  <DeleteButton id={blog._id.toString()}/>
                </div>

              </div>

            ))
          }
        </div>

      </div>
    </div>
    </>
  )
}

