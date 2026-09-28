'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

const CreateBlogPage = () => {
    const [formData,setFormData] = useState({
        title:"",
        slug:"",
        category:"",
        image:"",
        excerpt:"",
        content:"",
        // author:"Admin"
    })

    const [isLoading,setIsLoading] = useState(false)

    const router = useRouter()

   function handleChange(e){
   setFormData({
    ...formData,
    [e.target.name]:e.target.value
   })
   }

//  async function handleFormSubmit(e){
//         e.preventDefault();
//         try {
//             setIsLoading(true);
//             const response = await fetch("/api/blogs",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(formData)
//         })
//         toast.success("Post Created Successfully")
//          router.push("/admin")
            
//         } catch (error) {
//             console.log(error)
//         }

//         finally{
//             setIsLoading(false)
//         }
//     }
async function handleFormSubmit(e) {
  e.preventDefault();

  try {
    setIsLoading(true);

    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message || "Failed to create blog");
      return;
    }

    toast.success("Post created successfully");
    router.push("/admin");
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  } finally {
    setIsLoading(false);
  }
}

  return (
    <>
    <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-3">Create Blog</h1>
        <form onSubmit={handleFormSubmit}>
            <input className="w-full border rounded-sm p-3 mb-2"
            type="text"
            placeholder="Title"
            id="title"
            name="title"
            required
            min={10}
            max={250}
            value={formData.title}
            onChange={handleChange}
             />
             
             <input className="w-full border rounded-sm p-3 mb-2"
             type="text"
             placeholder="Slug.."
             name="slug"
             required
             value={formData.slug}
            onChange={handleChange}/>

            <input className="w-full border rounded-sm p-3 mb-2"
             type="text"
             placeholder="Category.."
             name="category"
             required
             value={formData.category}
            onChange={handleChange}/>

              <input className="w-full border rounded-sm p-3 mb-2"
             type="text"
             placeholder="Image-Url.."
             name="image"
             required
             value={formData.image}
            onChange={handleChange}/>

             <input className="w-full border rounded-sm p-3 mb-2"
             type="text"
             placeholder="Short Description"
             name="excerpt"
             required
             value={formData.excerpt}
            onChange={handleChange}/>

            <textarea className="w-full border rounded-sm p-3 mb-2"
            name="content"
            placeholder="Detailed Description"
            required
            rows={10}
            value={formData.content}
            onChange={handleChange}/>

            <button className="bg-indigo-600 text-white px-2 py-1 rounded-sm text-lg">{
                isLoading?"Publishing":"Publishh"}</button>
        </form>
    </div>
    </>
  )
}

export default CreateBlogPage

