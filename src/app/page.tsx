import {
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const XLogo = () => {
  return (
    <svg viewBox="0 0 24 24" width="24">
      <g>
        <path
          className="fill-zinc-950 dark:fill-zinc-200"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        ></path>
      </g>
    </svg>
  );
};

const BskyLogo = () => {
  return (
    <svg fill="none" viewBox="0 0 64 57" width="24">
      <path
        className="fill-zinc-950 dark:fill-zinc-200"
        d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805ZM50.127 3.805C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z"
      ></path>
    </svg>
  );
};

interface Link {
  description: string;
  url: string;
  Icon?: ReactNode;
}

const externalLinks: Link[] = [
  {
    description: "LinkedIn",
    url: "https://www.linkedin.com/in/maria-mariana-cagnoni-ferreira-8a589417a/",
    Icon: <SiLinkedin />,
  },
  {
    description: "GitHub",
    url: "https://github.com/MariaMarianaCagnoni",
    Icon: <SiGithub />,
  },

  {
    description: "Bluesky",
    url: "https://bsky.app/profile/lostcausee.bsky.social",
    Icon: <BskyLogo />,
  },

];

const ExternalLink = (link: Link) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="flex items-center justify-between ring-1 ring-zinc-950 dark:ring-zinc-200 p-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
    >
      <span className="flex items-center gap-4">
        {link.Icon} {link.description}
      </span>
      <ArrowUpRight className="size-5" />
    </a>
  );
};

const internalLinks = [
  {
    description: "Explore my projects",
    url: "/projects",
  },
  {
    description: "Get to know me",
    url: "/about",
  },
];

const InternalLink = (link: Link) => {
  return (
    <Link className="group flex items-center gap-2" href={link.url}>
      {link.description}
      <ArrowRight className="size-5 group-hover:translate-x-1 transition-all" />
    </Link>
  );
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      {externalLinks.map((link: Link) => (
        <ExternalLink
          key={link.description}
          description={link.description}
          url={link.url}
          Icon={link.Icon}
        />
      ))}
      <div className="flex justify-center sm:justify-between flex-col sm:flex-row max-sm:gap-8">
        <div className="flex flex-col gap-4">
          {internalLinks.map((link: Link) => (
            <InternalLink
              key={link.description}
              description={link.description}
              url={link.url}
            />
          ))}
        </div>
        <div className="flex gap-2 flex-col">
          <a
            href="/cv2024.pdf"
            download="cv2024.pdf"
            className="bg-zinc-900 dark:bg-zinc-200 p-4 text-zinc-100 dark:text-zinc-900 flex flex-col sm:flex-row items-center gap-3 hover:bg-zinc-700 dark:hover:bg-zinc-400 transition-all"
          >
            <span className="text-nowrap">Download CV</span>
            <Download className="size-5 max-sm:hidden" />
          </a>
        </div>
      </div>
    </div>
  );
}
