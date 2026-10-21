import { getLatestBlogs } from '@/lib/data'
import React from 'react'
import BlogCard from './BlogCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function LatestBlogs(){
    const blogs = await getLatestBlogs()
  return (
    <main className='w-full py-10'>
        <div className='max-w-6xl mx-auto px-6'>
        <h3 className="uppercase text-indigo-600 mb-2 text-sm">Fresh of the press</h3>
        <div className="flex items-center justify-between mb-6">
        <h2 className='text-3xl md:text-4xl text-primary font-bold font-heading'>
          Latest Blogs
        </h2>
        <Link href="/blogs"
         className="flex items-center gap-2 text-primary/80 hover:text-primary">View All <ArrowRight height={15} className=""/></Link>
        </div>
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

