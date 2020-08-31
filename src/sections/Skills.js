import React from "react";
import { mySqlIcon } from "../mysql.png";
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
            Excellent interpersonal, communication and cross group collaboration
            skills.
          </li>
          <li>
            Proficient understanding of web markup, including knowledge of
            modern <i className="fab fa-html5"></i> HTML/{" "}
            <i className="fab fa-css3-alt"></i>CSS. The ability to work on{" "}
            <i className="fab fa-css3-alt"></i> CSS selectors, the semantic{" "}
            <i className="fab fa-html5"></i> HTML tags, the understandability of
            border-box, flexbox.
          </li>
          <li>
            Responsive design skills, knowledge of how to mix of flexible grids
            and layouts, images and how to use of CSS media queries.
          </li>
          <li>
            Fair understanding of <i className="fab fa-js"></i> JavaScript
            programming and DOM manipulation. Knowledge of hands-on experience
            in <i className="fab fa-js"></i> Fundamentals ES6. Knowledge{" "}
            <i className="fab fa-js"></i> how create interactive web pages
            (moving elements, search bars, videos or interactive maps on a
            webpage).{" "}
          </li>
          <li>
            Version control software <i className="fab fa-git-alt"></i> Git.
            Experience keep the track of modifications with a comment, merging
            and branching strategies, managing merge conflicts.
          </li>
          <li>
            Good nderstanding of <i className="fab fa-react"></i> React.js and
            its core principles. Experience with React Hook Form, React Hooks.
          </li>
          <li>
            Adequate knowledge how servers work as well as APIs, MySQL, how to
            store dynamic data in a persistence layer like a{" "}
            <i className="fas fa-database"></i> database. Experience in creating
            database schemas that represent and support work processes.
            Knowledge how to use Knex to perform data migrations of{" "}
            <i className="fas fa-database"></i> database schema and seed{" "}
            <i className="fas fa-database"></i> databases with data.
          </li>
          <li>
            Understanding how core <i className="fab fa-node"></i> Node.js
            works. Good knowledge of <i className="fab fa-node"></i> framework
            Express. Experience deploing my <i className="fab fa-node"></i>{" "}
            application to a cloud platform Heroku.
          </li>
        </ul>
      </section>
    </>
  );
};
