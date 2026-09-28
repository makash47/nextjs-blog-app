import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blogs";
import { auth } from "@/lib/auth";


export async function GET(){
    try {
        await connectDB();
        const blogs = await Blog.find()
        return Response.json(blogs,{
            response:200
        })
        
    } catch (error) {
        return Response.json(
            {
                message:error.message
            },
            {
                status:500
            }
        );
        
    }
}



export async function POST(request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }
    await connectDB();
    const data = await request.json();

    const blogData = {
      ...data,
       authorId: session.user.id,
    };

    const blog = await Blog.create(blogData);

    return Response.json(
      {
        message: "Blog created successfully",
        blog,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create blog error:", error);
    return Response.json(
      { message: error.message },
      { status: 500 }
    );
  }
}