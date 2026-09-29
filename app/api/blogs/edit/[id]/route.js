
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blogs";

export async function PUT(request, { params }) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const { id } = await params;
    const data = await request.json();

    const existingBlog = await Blog.findById(id);

    if (!existingBlog) {
      return Response.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    const canEdit =
      session.user.role === "admin" ||
      existingBlog.authorId === session.user.id;

    if (!canEdit) {
      return Response.json(
        { message: "Forbidden" },
        { status: 403 }
      );
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        title: data.title,
        slug: data.slug,
        category: data.category,
        image: data.image,
        excerpt: data.excerpt,
        content: data.content,
        featured: data.featured,
      },
      { new: true, runValidators: true }
    );

    return Response.json(
      { message: "Blog updated successfully", blog: updatedBlog },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 500 }
    );
  }
}