
// import Hero from "../components/Hero";
// import { getFeaturedBlogs } from "@/lib/data";
// import FeaturedBlogs from "@/components/FeaturedBlogs";
// import { LatestBlogs } from "@/components/LatestBlogs";
// import WhyBlogify from "@/components/WhyBlogify";
// import { Categories } from "@/components/Categories";


// export default async function Home() {
//   const blogs = await getFeaturedBlogs();
//   // console.log(blogs)
//   return (
//    <>
//    <Hero/>
//    <FeaturedBlogs blogs={blogs}/>
//    <Categories/>
//    <LatestBlogs/>
//    <WhyBlogify/>
//    </>
//   );
// }


import Hero from "@/components/Hero";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import { getFeaturedBlogs } from "@/lib/data";
import { Categories } from "@/components/Categories";
import { LatestBlogs } from "@/components/LatestBlogs";
import WhyBlogify from "@/components/WhyBlogify";
import NewsLetter from "@/components/NewsLetter";

export default async function Home() {
  const blogs = await getFeaturedBlogs();
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedBlogs blogs={blogs}/>
      <Categories/>
      <LatestBlogs/>
      <WhyBlogify/>
      <NewsLetter/>

    </main>
  );
}