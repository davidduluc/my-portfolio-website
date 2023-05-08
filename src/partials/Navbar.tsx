import { ReactNode } from "react";
import { Section } from "../components/Section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <Logo
        icon={
          <svg
            className="mr-1 h-10 w-10 stroke-cyan-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none"></path>
            <rect x="3" y="12" width="6" height="8" rx="1"></rect>
            <rect x="9" y="8" width="6" height="12" rx="1"></rect>
            <rect x="15" y="4" width="6" height="16" rx="1"></rect>
            <path d="M4 20h14"></path>
          </svg>
        }
        name="David Duluc"
      />

      <NavMenu>
        <a href="https://github.com/davidduluc" target="_blank">
          <FontAwesomeIcon
            className="h-6 w-6 hover:translate-y-1"
            icon={faGithub}
          />
        </a>
        <a href="https://www.linkedin.com/in/davidduluc/" target="_blank">
          <FontAwesomeIcon
            className="h-6 w-6 hover:translate-y-1"
            icon={faLinkedin}
          />
        </a>
        <a href="https://twitter.com/DulucDavid" target="_blank">
          <FontAwesomeIcon
            className="h-6 w-6 hover:translate-y-1"
            icon={faTwitter}
          />
        </a>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

// Logo component
type ILogoProps = {
  icon: ReactNode;
  name: string;
};

const Logo = (props: ILogoProps) => (
  <div className="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
    {props.icon}
    {props.name}
  </div>
);

// Section component

type INavbarProps = {
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex justify-between">{props.children}</div>
);

type INavMenuProps = {
  children: ReactNode;
};

const NavMenu = (props: INavMenuProps) => (
  <nav>
    <ul className="flex gap-x-3 font-medium text-gray-200">{props.children}</ul>
  </nav>
);

type INavMenuItemProps = {
  href: string;
  children: string;
};

const NavMenuItem = (props: INavMenuItemProps) => (
  <li className="hover:text-white">
    <a href={props.href}>{props.children}</a>
  </li>
);

export { NavMenuItem };

export { NavMenu };

export { NavbarTwoColumns };

export { Navbar };
