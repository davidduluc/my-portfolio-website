import { Section } from "../components/Section";

const Footer = () => (
  <Section>
    <div className="border-t border-gray-600 pt-5 text-center">
      <div className="text-sm text-gray-200">
        © Copyright {new Date().getFullYear()} by David Duluc. Built with ♥ in
        Miami. Inspired by
        <a
          className="text-cyan-400 hover:underline"
          href="https://creativedesignsguru.com/demo/astro-boilerplate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Astro Boilerplate
        </a>
        .
      </div>
    </div>
  </Section>
);

export { Footer };
