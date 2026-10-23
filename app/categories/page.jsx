import { getCategories } from "@/lib/data"
import { ArrowLeft, ArrowRight, BookOpen, FolderOpen, Sparkle } from "lucide-react"
import Link from "next/link";

const categoriesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blogify Categories",
  description:
    "Browse Blogify categories and discover articles grouped by topic.",
  url: `${process.env.SITE_URL || "http://localhost:3000"}/categories`,
};

const CategoriesPage = async() => {
  const categories = await getCategories();
  return (
    <section className="w-full py-10 lg:py-15">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(categoriesSchema).replace(/</g, "\\u003c"),
  }}
/>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-600 rounded-full px-3 text-sm py-1 text-indigo-700 dark:bg-indigo-950/50"><Sparkle height={15}/> Curated Topics</div>
          <h1 className="text-primary text-4xl font-bold font-heading">Explore Articles by <span className="text-indigo-600">Category</span></h1>
          <p className="font-sans text-lg text-gray-600 dark:text-gray-400">Find in-depth articles, tutorials and insights tailored to your interests.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
          {
            categories?.map((category)=>(
               <Link
              key={category}
              href={`/categories/${encodeURIComponent(category)}`}
              className="group relative p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-400/80 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <FolderOpen className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-500 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" /> Topic
                  </span>
                </div>
    
                <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {category}
                </h2>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  Read all latest stories, tutorials, and guides filed under {category}.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                <span>View Articles</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default CategoriesPage





// import Link from "next/link";
// import { getCategories } from "@/lib/data";
// import { FolderOpen, ArrowRight, Sparkles, BookOpen } from "lucide-react";

// export const metadata = {
//   title: "Categories - BLOGIFY",
//   description: "Browse articles by topics and categories.",
// };

// export default async function CategoriesPage() {
//   const categories = await getCategories();

//   return (l
//     <main className="min-h-screen py-12 lg:py-20 bg-background">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Header Banner */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-medium text-indigo-700 bg-indigo-50 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50 rounded-full">
//             <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
//             <span>Curated Topics</span>
//           </div>

//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-heading tracking-tight">
//             Explore Articles by <span className="text-indigo-600 dark:text-indigo-400">Category</span>
//           </h1>

//           <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
//             Find in-depth articles, tutorials, and insights tailored to your specific interests.
//           </p>
//         </div>

//         {/* Categories Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {categories.map((category) => (
//             <Link
//               key={category}
//               href={`/categories/${encodeURIComponent(category)}`}
//               className="group relative p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
//             >
//               <div>
//                 {/* Icon & Badge */}
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
//                     <FolderOpen className="w-6 h-6" />
//                   </div>
//                   <span className="text-xs font-medium text-gray-400 dark:text-gray-500 flex items-center gap-1">
//                     <BookOpen className="w-3.5 h-3.5" /> Topic
//                   </span>
//                 </div>

//                 {/* Category Name */}
//                 <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
//                   {category}
//                 </h2>

//                 <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
//                   Read all latest stories, tutorials, and guides filed under {category}.
//                 </p>
//               </div>

//               {/* Action Link Footer */}
//               <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between text-sm font-semibold text-indigo-600 dark:text-indigo-400">
//                 <span>View Articles</span>
//                 <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </div>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </main>
//   );
// }