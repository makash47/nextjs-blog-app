import Hero from "@/components/Hero";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import { getFeaturedBlogs } from "@/lib/data";
import { Categories } from "@/components/Categories";
import { LatestBlogs } from "@/components/LatestBlogs";
import WhyBlogify from "@/components/WhyBlogify";
import NewsLetter from "@/components/NewsLetter";


const websiteSchema = {
  "@context":"https://schema.org",
  "type":"WebSite",
  name:"Blogify",
  url:process.env.SITE_URL||"http://localhost:3000"
}

export default async function Home() {
  const blogs = await getFeaturedBlogs();
  return (
    <main className="min-h-screen">
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:JSON.stringify(websiteSchema).replace(/</g, "\\u003c")
      }}
      />

    
      <Hero />
      <FeaturedBlogs blogs={blogs}/>
      <Categories/>
      <LatestBlogs/>
      <WhyBlogify/>
      <NewsLetter/>

    </main>
  );
}