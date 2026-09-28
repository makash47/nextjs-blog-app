import { getCategories } from "@/lib/data"
import Link from "next/link";

async function Categories() {
    const categories = await getCategories();
    return (
         <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 mt-6">
          Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {
            categories.map((category)=>(
                <Link href={`/categories/${encodeURIComponent(category)}`} key={category} 
                className="bg-indigo-50 text-indigo-700 cursor-pointer text-center font-bold p-3 rounded-md hover:bg-indigo-200 border border-indigo-400 hover:-translate-y-2.5 transition-all duration-300">
                    {category}
                </Link>
            ))
         }
        </div>
      </div>
    </section>
    )
}
export default Categories



