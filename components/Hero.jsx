
import Image from "next/image";
import Link from "next/link";



const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* Content */}
      <div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Share Ideas.
          <span className="text-indigo-600">
            {" "}Inspire People.
          </span>
        </h1>

        <p className="mt-6 text-lg text-zinc-500 max-w-xl">
          Blogify is a modern platform where writers share their knowledge,
          developers publish tutorials, and readers discover valuable ideas.
        </p>


        <div className="mt-8 flex gap-4">

          <Link
            href="/blogs"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 transition"
          >
            Explore Blogs
          </Link>


          <Link
            href="/admin"
            className="rounded-lg border border-zinc-300 px-6 py-3 font-medium hover:bg-zinc-100 transition"
          >
            Start Writing
          </Link>

        </div>

      </div>


      {/* Image */}
      <div className="relative">

        <Image
          src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600"
          alt="Developer"
          width={600}
          height={600}
          loading="eager"
          className="rounded-2xl shadow-lg object-cover"
        />

      </div>


    </section>
  );
};

export default Hero;

