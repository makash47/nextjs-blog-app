import mongoose from "mongoose";
const blogSchema = new mongoose.Schema(
    {
    title:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    content:{
        type:String,
        required:true,
        trim:true

    },
    excerpt:{
        type:String,
        required:true,
        maxlength:250,
        trim:true,
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    featured: {
      type: Boolean,
      default: false,
    },
    author:{
        type:String,
        default:"Admin"
    },
    authorId: {
   type: String,
   required: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
},
{timestamps:true}
)


const Blog = mongoose.models.Blog || mongoose.model("Blog",blogSchema);
export default Blog;