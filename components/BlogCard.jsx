import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "./ui/badge"

const BlogCard = ({ blog }) => {
    return (

        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
            <Image
                // src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400"
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
            />
            <CardHeader>
                <Badge className="bg-indigo-100 text-indigo-700">{blog.category}</Badge>
                <CardTitle className="text-xl hover:text-indigo-600 transition line-clamp-1 font-bold">{blog.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm line-clamp-3">
              <p>{blog.content}</p>

            </CardContent>
            <CardFooter>
                <Link className="font-medium hover:underline hover:text-indigo-600"
                 href={`/blogs/${blog.slug}`}>Read More →</Link>
            </CardFooter>
        </Card>

    )
}

export default BlogCard