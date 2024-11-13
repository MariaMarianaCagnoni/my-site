import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="font-bold my-12 max-sm:text-center">Projects</h1>
      <section className="space-y-16">
        <article>
          <div className="mt-10 flex justify-between flex-col gap-4 sm:items-center sm:flex-row">
            <h2 className="m-0 normal-case">A College administration API</h2>
            <div className="flex items-center gap-4">
              <div className="ring-1 ring-zinc-950 dark:ring-zinc-300 px-2 py-1">Java</div>
              <div className="ring-1 ring-zinc-950 dark:ring-zinc-300 px-2 py-1">Springboot</div>
              <div className="ring-1 ring-zinc-950 dark:ring-zinc-300 px-2 py-1">Postgres</div>
            </div>
          </div>
          <a
            //href="https://css2wind.com"
            target="_blank"
            className="group block overflow-hidden my-6 relative ring-1 ring-zinc-950"
          >
            <span className="z-10 absolute flex items-center transition-all gap-2 top-2 right-2 opacity-0 group-hover:opacity-100 text-zinc-100">
              Click to visit website <ArrowUpRight className="size-5" />
            </span>
            <Image
              className="size-full group-hover:scale-105 transition-all"
              src="/projects/MER.png"
              width={9999}
              height={250}
              alt="Mer of College API"
            />
          </a>
          <p>
            An api that simulates a college management system. Made in monolith architecture, MVC layers and using SOLID best practices:{" "}
          </p>
          <ul>


          </ul>
          <div className="items-center flex gap-4">
            <a
              className="items-center flex gap-2"
              href="https://github.com/MariaMarianaCagnoni/college_cps"
              target="_blank"
            >
              Visit the github repository
              <ArrowUpRight className="size-5" />
            </a>

          </div>
        </article>

      </section>
    </>
  );
}
