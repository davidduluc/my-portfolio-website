import { ReactNode } from "react";

type ISectionProps = {
  title?: ReactNode;
  children: ReactNode;
};
const Section = (props: ISectionProps) => (
  <div className="mx-auto max-w-screen-lg px-3 py-1">
    {props.title && (
      <div className="mb-6 text-2xl font-bold">{props.title}</div>
    )}

    {props.children}
  </div>
);

export { Section };
