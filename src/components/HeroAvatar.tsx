import type { ReactNode } from "react";

type IHeroAvatarProps = {
  title: ReactNode;
  description: ReactNode;
  avatar: ReactNode;
};

const HeroAvatar = (props: IHeroAvatarProps) => (
  <div className="flex flex-col items-center md:flex-row  md:gap-x-4">
    <div className="shrink-0">{props.avatar}</div>
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mt-3 text-center md:text-left">
        {props.title}
      </h1>
      <div className="flex justify-center mt-2 md:justify-start">
        <img
          className="h-6 w-6 hover:translate-y-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        />
        <img
          className="h-6 w-6 hover:translate-y-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        />

        <img
          className="h-6 w-6 hover:translate-y-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
        />

        <img
          className="h-6 w-6 hover:translate-y-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg"
        />

        <img
          className="h-6 w-6 hover:translate-y-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />
        <img
          className="h-6 w-6 hover:translate-y-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
        />

        {/* <img
          className="h-6 w-6 hover:translate-y-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        />

        <img
          className="h-6 w-6 hover:translate-y-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        /> */}
      </div>

      <h1 className="mt-6 text-2xl md:text-3xl font-bold text-center md:text-left">
        About Me
      </h1>

      <p className="md:text-xl text-center md:text-left">{props.description}</p>
      {/* <FontAwesomeIcon
        className="h-6 w-6 hover:translate-y-1"
        icon={faTwitter}
      /> */}
    </div>
  </div>
);

export { HeroAvatar };
