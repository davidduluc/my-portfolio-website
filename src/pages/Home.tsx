import { Base } from "../layouts/Base";
import { Hero } from "../partials/Hero";

export function Home() {
  return (
    <Base>
      <Hero />
      {/* <ProjectList /> */}
      {/* <div>
        <h1>Home Page</h1>
        <ul>
          <li>Base layout</li>
          <li>
            <ul style={{ textIndent: "50px" }}>
              <li>Hero</li>
              <li>ProjectList</li>
              <li>RecentPosts</li>
              <li>CTA</li>
            </ul>
          </li>
        </ul>
      </div> */}
    </Base>
  );
}
