import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import './my-cv.css';

function App() {
  return (
    <div className="main-container">
      <header className="header-container">
        <img src="https://secure.gravatar.com/avatar/3da283f44646867ed9c7e7e022340300?size=150" align="left" alt="foto" />
        <div className="main-info">
          <h1>Victoria Kush</h1>
          <ul>
            <li><a href="tel:71465372"><i className='fa fa-phone'></i>71 46 53 72</a></li>
            <li>
              <a href="mailto:victoria.v.kush@gmail.com?" subject="subject text"><i className='fa fa-envelope'></i> victoria.v.kush@gmail.com</a>
            </li>
            <li><a href="https://www.linkedin.com/in/victoria-kush-4a0455155"><i className='fa fa-linkedin'></i> https://www.linkedin.com/in/victoria-kush-4a0455155/</a>
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
        <h3>Statistic Assistant in Åben Pårørenderådgivning SIND i København.</h3>
        <p><i>From Februar 2018</i></p>
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
          <li><i className="fa fa-html5"></i>HTML</li>
          <li><i className='fa fa-css3-alt'></i>CSS </li>
          <li><i className='fa fa-js'></i>JavaScript</li>
        </ul>
      </section>
      <section className="education">
        <h2>EDUCATION</h2>
        <ul>
          <ul>
            <li>Ph.d. in  Psychology V. N. Karazin Kharkiv National University.</li>
            <li className="years">2008 – 2012</li>
          </ul>
          <ul>
            <li>Master's Degree in Psychology V. N. Karazin Kharkiv National University.</li>
            <li className="years">2007 – 2008</li>
          </ul>
          <ul>
            <li>Bachelor's Degree in Psychology V. N. Karazin Kharkiv National University.</li>
            <li className="years">2003-2008</li>
          </ul>
        </ul>
      </section>
    </div>
  );
}

export default App;
