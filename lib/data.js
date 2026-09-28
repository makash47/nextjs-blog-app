import Blog from "@/models/Blogs";
import connectDB from "./mongodb";


export async function getFeaturedBlogs(){
    await connectDB();
    const blogs = await Blog.find({featured:true})
    return blogs
}


async function getBlogs(){
    await connectDB();
    const blogs = await Blog.find()
    return blogs
}
export default getBlogs


export async function getBlogBySlug(slug){
    await connectDB();
    const blog = await Blog.findOne({
        slug
    });
    return blog;
}


export async function getCategories(){
    await connectDB();
    const categoryBlogs = await Blog.distinct("category")
    return categoryBlogs
}


export async function getBlogsByCategory(category) {
  await connectDB();
  return await Blog.find({ category });
}


export async function getPaginatedBlogs(page = 1, limit = 9) {
  await connectDB();
  const skip = (page - 1) * limit;
  const blogs = await Blog.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
  const totalBlogs = await Blog.countDocuments();
  const totalPages = Math.ceil(totalBlogs / limit);
  return {
    blogs,
    totalPages,
  };
}


export async function getLatestBlogs(){
  await connectDB();
  const blogs = await Blog.find().sort({createdAt:-1}).limit(3)
  return blogs;

}