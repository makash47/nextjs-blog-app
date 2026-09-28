// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function DeleteButton({ id }) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   async function handleDelete() {
//     const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
//     if (!confirmDelete) return;

//     try {
//       setLoading(true);

//       const res = await fetch(`/api/blogs/delete/${id}`, {
//         method: "DELETE",
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.message || "Delete failed");
//         return;
//       }

//       router.refresh();
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <button
//       onClick={handleDelete}
//       disabled={loading}
//       className="rounded-md bg-red-600 px-3 py-2 text-sm text-white disabled:opacity-50"
//     >
//       {loading ? "Deleting..." : "Delete"}
//     </button>
//   );
// }

'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"



export default function DeleteButton({id}){
    const [loading,setLoading] = useState(false)
    const router=useRouter()

    async function handleDelete(id){
        const confirmDelete = window.confirm("Are you sure you want to delete this blog");
            if(!confirmDelete) return;

        try {
            setLoading(true)
            const res = await fetch(`/api/blogs/delete/${id}`,{
                method:"DELETE",
            })
            const data = await res.json();

            if(!res.ok){
                alert(data.message||"Delete Failed");
                return
            }
            // router.refresh()

            
        } catch (error) {
            alert(error.message)
            
        }

        finally{
            setLoading(false)
        }
    }

    return(
        <button onClick={()=>handleDelete(id)}
         className="bg-red-600 p-2 rounded-sm text-white text-sm">{
            loading?"Deleting":"Delete"
         }</button>

    )
}