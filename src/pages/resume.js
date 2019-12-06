import React from "react"
import Layout from '../components/layout'

const ResumePage = () => (
  <Layout>
    <h1>Jenny Shaw</h1>
    <ul>
      <a href='mailto: jenshaw521@gmail.com'>Email</a>
      <a href='tel: 1-206-474-6674'>Phone</a>
      <a href='https://github.com/jenshaw86'>GitHub</a>
      <a href='https://dev.to/jenshaw'>Blog</a>
      <a href='https://www.linkedin.com/in/jenny-h-shaw/'>LinkedIn</a>
    </ul>
    <p>I’m a Full Stack React and Rails Software Engineer with a background in education, management, and art. As a former professional overseas, I’m an effective communicator and a lover of language-learning. I’m also highly resourceful and driven to help others succeed. I’m passionate about social matters, and I value building quality technological solutions with lasting, meaningful impacts on our global community.</p>
    <hr />
    <h3>Technical Projects</h3>
    <p><span>StayConnected</span> | August 2019 - present | <a href='https://github.com/jenshaw86/stay-connected'>GitHub</a></p>
    <p>Stay organized and actively connected with your network using this relationship and meetup management system</p>
    <ul>
      <li>Developed a Rails REST API back end with PostgreSQL and a React front end styled with React Bootstrap and 
      custom CSS for dynamically rendering components and an organized, interactive UI</li>
      <li>Incorporated Twilio’s Programmable SMS API for delivering text-message notifications to user’s connections</li>
      <li>Integrated React Router for client-side routing and intuitive navigation</li>
    </ul>
    <p><span>Is It Worth It?</span> | July 2019 | <a href='https://github.com/jenshaw86/IsItWorthIt'>GitHub</a> | <a href='https://chetchopra.github.io/IsItWorthIt/'>Live Site</a></p>
    <p>This simple single-page web app provides playful comparisons and insight on the value of your wishlist items</p>
    <ul>
      <li>Built a Rails REST API back end using SQLite3 database for data persistence during development</li>
      <li>Wrote front end using Javascript ES6 as an exercise in DOM manipulation and AJAX functionality</li>
      <li>Styled using custom CSS and Bootstrap4</li>
    </ul>
    <p><span>Book Grabber</span> | June 2019 | <a href='https://github.com/jenshaw86/book-grabber'>GitHub</a></p>
    <p>A book exchange platform that gives users access to a global community library where they can browse and trade books</p>
    <ul>
      <p>Created both ERB (Embedded Ruby) front end and Rails back end that demonstrates full CRUD functionality</p>
      <p>Structured using MVC (Model-View-Controller) architecture and RESTful routes</p>
      <p>Integrated cookies, sessions, and BCrypt for user authentication and to protect sensitive data</p>
    </ul>
    <hr />
    <h3>Technical Skills</h3>
    <p>JavaScript, React, jQuery, Express.js, Ruby, Rails, RESTful APIs, PostgreSQL, SQLite, SQL, JWT, Git, HTML, CSS, SASS, Bootstrap, Semantic UI, Test-Driven Development, Responsive Web Design, Applied Accessibility</p>
    <hr />
    <h3>Employment History</h3>
    <p>Schoolhouse Language Center</p>
    <p>Branch Manager</p>
    <ul>
      <li>Acted as sole liaison between international teaching staff and Taiwanese administrative staff, facilitating clear and effective communication and cultural understanding </li>
      <li>Recruited new staff members, coordinated onboarding process, and conducted regular teacher training workshops and assessments to maintain high quality and pace of instruction</li>
      <li>Led monthly staff meetings to develop curriculum and effective strategies for serving the growing student base</li>
      <li>Mentored junior instructors, helping them build confidence and methods for successful classroom management</li>
    </ul>
    <p>English Teacher</p>
    <ul>

      <li>Prepared daily lesson plans for up to 7 individual classes a week and planned activities for school-wide events</li>
      <li>Cumulatively taught over 500 young students and maintained the highest retention rate of middle and high school students among four branches</li>
      <li>Pioneered the branch’s first Cambridge English Exam preparation workshops, recruited the largest number of test participants and produced the highest-scoring average of all participating branches</li>
    </ul>
    <hr/>
    <h3>Educatiom</h3>
    <p>Flatiron School</p>
    <p>Seattle, WA</p>
    <p>Full Stack Web Development Immersive, JavaScript, React, and Ruby on Rails</p>		
    <p>2019</p>
    <p>Smith College</p>
    <p>Northampton, MA</p>
    <p>Bachelor of Arts, Art History</p>
    <p>2008</p>

  </Layout>
)

export default ResumePage
