import { ArrowRight, Sparkle } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="w-full relative py-12 lg:py-18 overflow-hidden">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/30 blur-[120px] rounded-full pointer-events-none -z-10 dark:bg-indigo-600/15" />

      
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex px-3 py-1.5 items-center gap-2 border border-indigo-600 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800/50 mb-6">
          <Sparkle height={15} />
          Discover Ideas, Stories & Insights
        </div>


        <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight text-primary max-w-4xl mx-auto font-heading font-extrabold tracking-tight">
          Welcome to <span className="text-indigo-600">BLOGIFY</span> - Where Words Inspire.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans">
          Explore curated articles on web development, design, tech trends, and AI. Stay informed and level up your knowledge daily.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/blogs"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-indigo-600 text-primary font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-lg shadow-indigo-500/25 dark:shadow-none text-center"
          >
            Explore Articles
          </Link>

          <Link
            href="/admin"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center"
          >
            Start Writing
          </Link>
        </div>
      </div>

    </section>
  )
}

export default Hero