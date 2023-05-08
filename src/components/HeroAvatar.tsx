import type { ReactNode } from "react";

type IHeroAvatarProps = {
  title: ReactNode;
  description: ReactNode;
  avatar: ReactNode;
};

const HeroAvatar = (props: IHeroAvatarProps) => (
  <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold">{props.title}</h1>

      <h1 className="mt-6 text-2xl md:text-3xl font-bold">About Me</h1>

      <p className="md:text-xl">{props.description}</p>
    </div>

    <div className="shrink-0">{props.avatar}</div>
  </div>
);

export { HeroAvatar };
