import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

dom.watch();

library.add(faHtml5, faCss3Alt, faJs, faReact, faDatabase, faGitAlt, faNode);

export const Skills = () => {
  return (
    <>
      <section className="personal-skills">
        <h2>PROFESSIONAL SKILLS</h2>
        <ul>
          <li>
            Great problem-solving skills, strategic thinking and technical
            skills.
          </li>
          <li>
            Effective oral communication skills, organizational skills and
            attention to detail.
          </li>
          <li>
            Excellent interpersonal, communication and cross-group collaboration
            skills.
          </li>
          <li>
            Proficient understanding of web markup, including knowledge of
            modern <i className="fab fa-html5"></i> HTML/{" "}
            <i className="fab fa-css3-alt"></i>CSS.
          </li>
          <li>
            Responsive design skills, knowledge of how to mix of flexible grids
            and layouts, images and how to use of{" "}
            <i className="fab fa-css3-alt"></i> CSS media queries.
          </li>
          <li>
            Fair understanding of <i className="fab fa-js"></i> JavaScript
            programming and DOM manipulation.{" "}
          </li>
          <li>Coding in ES6 standards for readability, maintainability.</li>
          <li>
            <i className="fab fa-git-alt"></i> Git. Experience keep the track of
            modifications with a comment, merging and branching strategies,
            managing merge conflicts.
          </li>
          <li>
            Good understanding of <i className="fab fa-react"></i> React.js and
            its core principles. Experience with React Hook Form, React Hooks.
          </li>
          <li>
            Adequate knowledge how servers work as well as APIs, MySQL, the <i className="fas fa-database"></i> database.
          </li>
          <li>
            Understanding how core <i className="fab fa-node"></i> Node.js
            works. Experience deploying my <i className="fab fa-node"></i>{" "}
            application to a cloud platform Heroku.
          </li>
        </ul>
      </section>
      <section className="motivation">
        <h2>CERTIFICATES</h2>
        <div className="learning">
          <ul className="column">
            <li>Responsive Web Design Certification by freeCodeCamp</li>
            <li>
              JavaScript Algorithms and Data Structures Certification by
              freeCodeCamp
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
