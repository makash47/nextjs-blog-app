import { getLatestBlogs } from '@/lib/data'
import React from 'react'
import BlogCard from './BlogCard'

export async function LatestBlogs(){
    const blogs = await getLatestBlogs()
  return (
    <main className='w-full py-10'>
        <div className='max-w-6xl mx-auto px-6'>
            <h1 className='py-4 text-3xl font-bold'>
                Latest Blogs
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    blogs.map((blog)=>(
                        <BlogCard key={blog._id} blog={blog}/>
                    ))
                }
            </div>
        </div>
    </main>
  )
}

