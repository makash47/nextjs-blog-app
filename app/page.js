
import Hero from "../components/Hero";
import { getFeaturedBlogs } from "@/lib/data";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import Categories from "@/components/Categories";
import { LatestBlogs } from "@/components/LatestBlogs";
import WhyBlogify from "@/components/WhyBlogify";

export default async function Home() {
  const blogs = await getFeaturedBlogs();
  // console.log(blogs)
  return (
   <>
   <Hero/>
   <FeaturedBlogs blogs={blogs}/>
   <Categories/>
   <LatestBlogs/>
   <WhyBlogify/>
   </>
  );
}
