import Image from "next/image"
import { Badge } from "./ui/badge"
import Link from "next/link"


const FeaturedBlogsCard = ({ blog }) => {
    return (
        <>
            <Link href={`/blogs/${blog.slug}`} className="relative rounded-2xl cursor-pointer overflow-hidden group">
                <div className="w-full h-60 relative">
                    <Image src={blog.image}
                        fill
                        priority
                        alt={blog.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-105" />

                    <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-indigo-100 text-indigo-700">{blog.category}</Badge>

                    </div>


                    <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h2 className="line-clamp-2 font-bold font-heading text-2xl">{blog.title}</h2>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default FeaturedBlogsCard
