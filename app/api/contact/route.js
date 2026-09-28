import connectDB from "@/lib/mongodb";

import Contact from "@/models/Contact";

export async function POST(request){
    try {
        await connectDB();
        const data = await request.json()
        const contact = await Contact.create(data)

        return Response.json(
            {message:"Message Sent Succcesfully",contact},
            {status:201}

        )
        
    } catch (error) {
        return Response.json({
            message:error.message
        },
    {status:500})
    }
}