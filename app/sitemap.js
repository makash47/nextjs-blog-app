
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blogs";

export default async function sitemap() {
  await connectDB();
  const baseUrl = process.env.SITE_URL||"http://localhost:3000";
  const blogs = await Blog.find().select("slug updatedAt").lean();

  const staticUrls = [
    { 
      url: `${baseUrl}`,
      lastModified:new Date(),
      changeFrequency:"daily",
      priority:1.0,
     },
    { url: `${baseUrl}/blogs`,
      lastModified:new Date(),
      changeFrequency:"daily",
      priority:0.9,
     },
    { 
      url: `${baseUrl}/categories`,
      changeFrequency:"weekly",
      lastModified:new Date(),
      priority:0.7,

     },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const blogUrls = blogs.map((blog) => (
    {
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified:blog.updatedAt?new Date(blog.updatedAt):new Date(),
    changeFrequency:"weekly",
    priority:0.8,
  }));

  return [...staticUrls, ...blogUrls];
}