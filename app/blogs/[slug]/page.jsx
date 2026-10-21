import { Badge } from "@/components/ui/badge";
import { getBlogBySlug } from "@/lib/data";
import Image from "next/image";
import ReactMarkDown from "react-markdown"

export async function generateMetadata({params}){
    const {slug} = await params;
    const blog = await getBlogBySlug(slug);

    if(!blog){
        return{
            title:"Blog Not Found",
            description:"The Requested Article Could not be Found",
            robots:{
                index:false,
                follow:false
            },
        };  
    }
      const title = blog.title||"Blogify";
      const description = blog.excerpt||blog.description.slice(0,150)||"Blogify, explore blogs";
      const canonicalUrl = `/blogs/${slug}`

      return{
        title,
        description,
        alternates:{
            canonical:canonicalUrl
        },
        openGraph:{
            type:'article',
            title,
            description,
            url:canonicalUrl,
            images:blog.image?[{
                url:blog.image,
                alt:blog.title,
            }]:[]
        },
        twitter:{
            card:"summary_large_image",
            title,
            description,
            url:canonicalUrl,
            images:blog.image?[blog.image]:[]
        }
      }
 

}

export default async function BlogPage({ params }) {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug)

    if (!blog) return <h1>Not found log</h1>
    const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog POST',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image,
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt,
    author: {
      '@type': 'Person',
      name: blog.author || 'Blogify Team',
    },
  };

    return (
        <>
            <article className="w-full">
                <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
             />
                <div className="max-w-4xl mx-auto px-6 py-10 bg-gray-200 dark:bg-gray-800">
                    <Badge className="text-indigo-700 bg-indigo-100">
                        {blog.category}
                    </Badge>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl leading-relaxed font-bold font-heading">{blog.title}</h1>

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
                        className="w-full object-cover rounded-md h-96" />

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