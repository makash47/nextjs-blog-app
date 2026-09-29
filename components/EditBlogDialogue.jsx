'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "./ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const EditBlogDialogue = ({blog}) => {

    const [formData,setFormData] = useState({
        title:blog.title||"",
        slug:blog.slug||"",
        category:blog.category||"",
        image: blog.image || "",
        excerpt: blog.excerpt || "",
        content: blog.content || "",
        featured: blog.featured || false,
    })

    const router = useRouter()

   const handleChange = (e) =>{
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    })
   }

   async function handleFormSubmit(e){
    e.preventDefault();
    try {
       const response = await fetch(`/api/blogs/edit/${blog._id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData)
       })
        const data = await response.json()
        if(!response.ok){
            toast.error(data.message||"Failed to update")
            return
        }
        toast.success("Blog Updated Succesfully")
        router.refresh()
    } catch (error) {

        toast.error(error.message||"failed to update")
    }
   }
  return (
   <Dialog>
  <DialogTrigger className="bg-indigo-600 p-2 text-white rounded-sm text-center">Edit</DialogTrigger>
  <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
    <DialogHeader className="text-center">
      <DialogTitle className="text-2xl font-bold">Edit Blog</DialogTitle>
      <DialogDescription>
        Update the information for this Blog
      </DialogDescription>
    </DialogHeader>
    <form onSubmit={handleFormSubmit} className="space-y-5">
        <div className="space-y-2">
            <Label htmlFor=""
            className="font-bold">Title</Label>
            <Input type="text"
            className="w-full p-3"
            name="title"
            value={formData.title}
            onChange={handleChange}
            />
        </div>

         <div className="space-y-2">
            <Label htmlFor=""
            className="font-bold">Slug</Label>
            <Input type="text"
            className="w-full p-3 border-indigo-600"
            name="slug"
            value={formData.slug}
            onChange={handleChange}/>
        </div>

         <div className="space-y-2">
            <Label htmlFor=""
            className="font-bold">Category</Label>
            <Input type="text"
            className="w-full p-3 border-indigo-600"
            name="category"
            value={formData.category}
            onChange={handleChange}/>
        </div>

         <div className="space-y-2">
            <Label htmlFor=""
            className="font-bold">Image</Label>
            <Input type="text"
            className="w-full p-3 border-indigo-600"
            name="image"
            value={formData.image}
            onChange={handleChange}/>
        </div>

         <div className="space-y-2">
            <Label htmlFor=""
            className="font-bold">Excerpt</Label>
            <Input type="text"
            className="w-full p-3 border border-indigo-600"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}/>
        </div>
        <div className="space-y-2">
            <Label htmlFor=""
            className="font-bold">Content</Label>
            <Textarea value={formData.content} name="content" onChange={handleChange}/>
        </div>
        <Button type="submit" className="w-full">Update</Button>
    </form>
  </DialogContent>
</Dialog>
  )
}

export default EditBlogDialogue

