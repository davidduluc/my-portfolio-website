import { GradientText, Section, HeroAvatar } from "../components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>David Duluc</GradientText> 👋
          <p className="text-sm md:text-base text-slate-400">
            Software Engineer
          </p>
        </>
      }
      description={
        <>
          I enjoy working on both front-end projects and full-stack
          applications, and have developed proficiency in a variety of
          technologies. My favorite tech stack includes React, TypeScript, Vite,
          TailwindCSS, Node.js and PostgreSQL. These tools enable me to build
          highly functional and user-friendly applications with ease.
        </>
      }
      avatar={
        <img
          className="object-contain h-58 w-64 rounded-2xl"
          src="/assets/images/me.jpeg"
          alt="Avatar image"
          loading="lazy"
        />
      }
    />
  </Section>
);

export { Hero };
