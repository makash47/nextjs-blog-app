import { BookOpen, Lightbulb, PenLine } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: BookOpen,
    title: "Learn",
    description:
      "Explore practical tutorials, guides, and articles that help you build your skills.",
  },
  {
    icon: Lightbulb,
    title: "Explore",
    description:
      "Discover modern technologies, useful ideas, and topics worth learning.",
  },
  {
    icon: PenLine,
    title: "Share",
    description:
      "Share knowledge, experiences, and ideas with the Blogify community.",
  },
];

export default function WhyBlogify() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Blogify?
          </h2>

          <p className="mt-3 text-muted-foreground">
            A place to learn, explore, and share knowledge through
            meaningful articles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border bg-background p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blogs"
            className="inline-flex rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Explore Blogs
          </Link>
        </div>

      </div>
    </section>
  );
}