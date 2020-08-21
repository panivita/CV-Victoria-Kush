import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

dom.watch();

library.add(faHtml5, faCss3Alt, faJs, faReact, faDatabase);

export const Skills = () => {
  return (
    <>
      <section className="personal-skills">
        <h2>PERSONAL SKILLS</h2>
        <ul>
          <li>Creative thinker</li>
          <li>Imaginative</li>
          <li>Approachability and helpfulness</li>
          <li>Initiative</li>
          <li>Attention to detail</li>
          <li>Problem solving</li>
          <li>Team player</li>
          <li>Empathy</li>
          <li>Time management</li>
        </ul>
      </section>
      <section className="skills">
        <h2>SKILLS</h2>
        <ul>
          <li>
            <i class="fab fa-html5"></i>HTML
          </li>
          <li>
            <i class="fab fa-css3-alt"></i>CSS
          </li>
          <li>
            <i class="fab fa-js"></i>JavaScript
          </li>
          <li>
            <i class="fab fa-react"></i>React
          </li>
          <li>
            <i class="fas fa-database"></i>Database
          </li>
        </ul>
      </section>
    </>
  );
};
