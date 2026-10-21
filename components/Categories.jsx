// import { getCategories } from "@/lib/data"
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export async function Categories() {
//     const categories = await getCategories();
//     return (
//          <section className="w-full py-10 bg-white/80 dark:bg-black/90">
//        <div className="max-w-6xl mx-auto px-6">
//          <h3 className="uppercase text-indigo-600 mb-2 text-sm">Topics</h3>
//         <div className="flex items-center justify-between mb-6">
//         <h2 className='text-3xl md:text-4xl text-primary font-bold font-heading'>
//           Explore By Category
//         </h2>
//         <Link href="/categories"
//          className="flex items-center gap-2 text-primary/80 hover:text-primary">All Catgories<ArrowRight height={15} className=""/></Link>
//         </div>
      
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//          {
//             categories.map((category)=>(
//                 <Link href={`/categories/${encodeURIComponent(category)}`} key={category} 
//                 className="bg-indigo-50 text-primary cursor-pointer text-center font-bold p-3 rounded-full hover:bg-indigo-200 border border-indigo-400 hover:-translate-y-2.5 transition-all duration-300">
//                     {category}
//                 </Link>
//             ))
//          }
//         </div>
//       </div>
//     </section>
//     )
// }



import { getCategories } from "@/lib/data"
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export async function Categories() {
    const categories = await getCategories();
    return (
         <section className="w-full py-10 bg-white/80 dark:bg-black/90">
       <div className="max-w-6xl mx-auto px-6">
         <h3 className="uppercase text-indigo-600 mb-2 text-sm">Topics</h3>
        <div className="flex items-center justify-between mb-6">
        <h2 className='text-3xl md:text-4xl text-primary font-bold font-heading'>
          Explore By Category
        </h2>
        <Link href="/categories"
         className="flex items-center gap-2 text-primary/80 hover:text-primary">All Catgories<ArrowRight height={15} className=""/></Link>
        </div>
      
        {/* <div className="flex flex-wrap gap-3">
  {categories.map((category) => (
    <Link
      href={`/categories/${encodeURIComponent(category)}`}
      key={category}
      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-semibold border border-gray-200 dark:border-gray-700 shadow-sm hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-indigo-500/10 transition-all duration-200"
    >
      <span className="w-2 h-2 rounded-full bg-indigo-500" />
      {category}
    </Link>
  ))}
</div> */}
<div className="flex flex-wrap gap-2">
  {
    categories.map((category)=>(
      <Link href={`/categories/${encodeURIComponent(category)}`} key={category}
      className="inline-flex gap-2 rounded-full px-5 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-semibold border border:gray-200 dark:border-gray-700 shadow-md hover:shadow-indigo-600 hover:border-indigo-400  hover:text-indigo-600 items-center border-indigo-100 transition-all duration-300"> 
        <span className="h-2 w-2 bg-indigo-600 rounded-full"></span>
        {category}
      </Link>
    ))
  }

</div>
      </div>
    </section>
    )
}






