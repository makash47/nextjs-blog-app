import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blogs";


export async function GET(request,{params}){
    // console.log(params)
    // console.log(params.slug)
    try {
        await connectDB();
        const {slug} = await params;
        const blog = await Blog.findOne({
            slug
        })

        return Response.json(blog)

        
    } catch (error) {
        return Response.json({
            message:error.message
        },
    {
        status:500
    })
        
    }
}