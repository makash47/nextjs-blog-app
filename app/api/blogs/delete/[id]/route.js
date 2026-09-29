import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blogs";

export async function DELETE(request,{params}){
    try {
        await connectDB();
        const {id} = await params;
        const deletedBlog = await Blog.findByIdAndDelete(id)

        if(!deletedBlog){
            return Response.json(
                {message:"Blog Not Found"},
                {status:404}
            );
        }

      return Response.json(
        {message:"Blog Deleted Successfully"},
        {status:200}
      );
        
    } catch (error) {
        Response.json(
            {message:error.message},
            {status:500}
        )
        
    }
}