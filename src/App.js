import React from 'react';
import Iframe from 'react-iframe'
import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faDatabase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { dom } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import './my-cv.css';

dom.watch()

library.add(
  faPhoneAlt, faEnvelope, faLinkedin, faHtml5, faCss3Alt, faJs, faReact, faDatabase
);

function App() {
  return (
    <div className="main-container">
      <header className="header-container">
        <div className="profil-foto">
          <img src="https://secure.gravatar.com/avatar/3da283f44646867ed9c7e7e022340300?size=150" alt="foto" />
        </div>
        <div className="main-info">
          <h1>Victoria Kush</h1>
          <ul>
            <li>
              <i className='fas fa-phone-alt'></i><a href="tel:71465372" title="nummer of the phone">71 46 53 72</a>
            </li>
            <li>
              <i className='fas fa-envelope'></i><a href="mailto:victoria.v.kush@gmail.com?" title="e-mail" subject="subject text">victoria.v.kush@gmail.com</a>
            </li>
            <li>
              <i class="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/victoria-kush-4a0455155" title="profil of the linkedin account">https://www.linkedin.com/in/victoria-kush-4a0455155/</a>
            </li>
          </ul>
        </div>
      </header>
      <section className="profile">
        <h2>PROFILE</h2>
        <p>I am an ambitious problem solver with a passion for web-development, and I would like to join a team of like-minded developers. I am thorough and precise in everything I does, and has a keen interest in technology, web-development and user experience. As someone who takes responsibility for their own personal development, I am continually evaluating and upgrading my skills.</p>
      </section>
      <section className="experience">
        <h2>EXPERIENCE</h2>
        <h3>Front-end Web Developer Self-Employed</h3>
        <p><i>From Februar 2019</i></p>
        <ul>
          <li>Learned HTML / CSS / JavaScript / React</li>
          <li>Built a responsive website (link below) with animations and interactivity</li>
          <li>Built  (link below)</li>
          <li>Built a weather app (link below) based on user input</li>
        </ul>
        <h3>Statistic Assistant in Åben Pårørenderådgivning SIND i København.</h3>
        <p><i>Februar 2018 - Februar 2019</i></p>
        <p>I made statistical work and led statistics of both evaluations of interviews and records of inquiries. I have used my computer skills and knowledge of MS Office applications especially MS Excel. Statistical work was done for the 6 month of work of the ÅBEN PÅRØRENDERÅDGIVNING, that show the effectiveness of the work of consultants and allowed to make changes to further improve their work.</p>
        <h3>Lecturer, Institit Psychology V. N. Karazin Kharkiv National University.</h3>
        <p><i>September 2009 – Januar 2015</i></p>
        <p>Course: Projective methods of personality research (4 classes: Autumn and Winter 2009, 2010, 2011, 2012,2014; Class size: 15-20 undergraduate students) Conducted two 50-minute discussions twice per week with a group of 15-20 undergraduates in each section. Developed and led discussions on lecture materials. Attended lectures, held office hours, wrote exam questions, and proctored and graded exams.</p>
        <p>My students have characterized me as a capable:</p>
        <ul>
          <li>to adapt communication style to the needs of different students, depending on their age, culture, ability, and learning style;</li>
          <li>to effectively speak with students, using a calm, clear tone;</li>
          <li>the material in terms that are both accessible and meaningful to the students;</li>
        </ul>
        <p>My director had confidence that I could solve my tasks, often under a tight deadline. She have characterized me as a capable to learn, to process and apply knowledge, to analyze and reason, and to evaluate and decide.</p>
      </section>
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
          <li><i class="fab fa-html5"></i>HTML</li>
          <li><i class="fab fa-css3-alt"></i>CSS</li>
          <li><i class="fab fa-js"></i>JavaScript</li>
          <li><i class="fab fa-react"></i>React</li>
          <li><i class="fas fa-database"></i>Database</li>
        </ul>
      </section>
      <section className="education">
        <h2>EDUCATION</h2>
        <h3>Full Stack Web Development in HackYourFuture - Copenhagen</h3>
        <p><i>2020</i></p>
        <p>The curriculum includes HTML/CSS/Git/CLI/Javascript/NodeJS/ExpressJS/React etc.</p>
        <h3>Ph.d. in  Psychology V. N. Karazin Kharkiv National University.</h3>
        <p><i>2008 – 2012</i></p>
        <h3>Master's Degree in Psychology V. N. Karazin Kharkiv National University.</h3>
        <p><i>2007 – 2008</i></p>
        <h3>Bachelor's Degree in Psychology V. N. Karazin Kharkiv National University.</h3>
        <p><i>2003-2008</i></p>
      </section>
      <section className="motivation">
        <h2>CERTIFICATES</h2>
        <div className="learning">
          <ul className="column">
            <li>Responsive Web Design Certification by freeCodeCamp</li>
            <li>JavaScript Algorithms and Data Structures Certification by freeCodeCamp</li>
          </ul>
        </div>
      </section>
      <footer>
        <section className="copyright">
          © 2020 Victoria Kush
        </section>
      </footer>
    </div>
  );
}

export default App;
