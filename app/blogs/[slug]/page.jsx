import { Badge } from "@/components/ui/badge";
import { getBlogBySlug } from "@/lib/data";
import Image from "next/image";

import ReactMarkDown from "react-markdown"

export default async function BlogPage({ params }) {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug)

    if (!blog) return <h1>No tfound log</h1>

    return (
        <>
            <article className="w-full">
                <div className="max-w-4xl mx-auto px-6 py-10">
                    <Badge className="text-indigo-700 bg-indigo-100">
                        {blog.category}
                    </Badge>
                    <h1 className="text-4xl md:text-5xl leading-relaxed font-bold">{blog.title}</h1>

                    <div className="flex gap-3 text-sm mb-2.5 text-muted-foreground">
                        <span>{blog.author}</span>
                        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>

                    <Image
                        // src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600"
                        src={blog.image}
                        alt={blog.title}
                        width={900}
                        height={500}
                        className="w-full object-cover rounded-md h-100" />

                    <div className="my-3">
                        <ReactMarkDown>
                            {blog.content}
                        </ReactMarkDown>
                    </div>

                </div>
            </article>
        </>
    )



}