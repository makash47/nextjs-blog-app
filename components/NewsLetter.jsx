import { Button } from "./ui/button"
import { Input } from "./ui/input"


const NewsLetter = () => {
  return (
    <section className="w-full py-10">
     
        <div className="max-w-6xl mx-auto px-6 rounded-4xl text-center bg-black relative overflow-hidden">
           <div className="absolute w-[300px] h-[200px] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/50 z-0 blur-[120px] overflow-hidden"></div>
          <div className="py-28 space-y-6">
            <h3 className="text-white font-bold text-5xl dar:text-primary font-heading">Get the best of Blogify, once a week.</h3>
            <h4 className="font-sans text-sm font-semibold text-white">Join 18,000 readers receiving our hand-picked essays every Sunday morning.</h4>

            <div className="flex items-center justify-center gap-3">
              <Input type="text"
              placeholder='You@gmail.com'
              className='w-60 p-2 focus:border-indigo-600'/>
              <Button className="bg-indigo-600">Subscribe</Button>
            </div>
            </div>
        </div>

    </section>
  )
}

export default NewsLetter

// import { Button } from "./ui/button";
// import { Input } from "./ui/input";

// const NewsLetter = () => {
//   return (
//     <section className="w-full py-10 relative">
//       <div className="max-w-6xl mx-auto px-6 rounded-3xl text-center bg-gray-900 relative overflow-hidden">
//         {/* Background Glow */}
//         <div className="absolute w-[300px] h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/40 -z-0 blur-[120px] pointer-events-none" />

//         {/* Content Container */}
//         <div className="relative z-10 py-16 md:py-24 px-4 space-y-6">
//           <h3 className="text-white font-bold text-3xl md:text-5xl font-heading max-w-2xl mx-auto leading-tight">
//             Get the best of Blogify, once a week.
//           </h3>
//           <p className="font-sans text-sm md:text-base text-gray-300 font-medium max-w-xl mx-auto">
//             Join 18,000 readers receiving our hand-picked essays every Sunday morning.
//           </p>

//           {/* Form Controls */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
//             <Input
//               type="email"
//               placeholder="you@example.com"
//               className="w-full sm:w-72 bg-gray-800/80 text-white border-gray-700 placeholder:text-gray-400 focus-visible:ring-indigo-500"
//             />
//             <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 cursor-pointer">
//               Subscribe
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsLetter;