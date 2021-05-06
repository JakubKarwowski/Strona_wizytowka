import '../body_styles/MyStory.scss'
import {NavLink} from 'react-router-dom'

function MyStory (){
    return (
        <div className='wrapper'>
            <h1>My Story</h1>
            <h2>2019</h2>
            <p>In 2019 I graduated from the Lodz University of Technology with the master degree of Automatic Control and Robotics. At my studies the subjects I most loved were ones connected with programming the industrial robots and also high-level programming. Just after studies although I did not have enough knowledge to start the work as a developer, I knew that my future lies in the IT industry. </p>
            <h2>2019-2021</h2>
            <p>I have taken  the opportunity to join the IT Operations team in one of the big corporations and did the internship there. Right now I work as an IT Onsite Support Engineer providing support for the company hiring over 1500 people. Working there I am responsible for the hardware stock, on and off-boarding process of the employees as well as for resolving multiple hardware and software issues of the user. I am also cooperating with the external service provided by the hardware supplier and with the IT Managers working for the company that is my employer’s contractor.</p>
            <h2>2020-2021</h2>
            <p>In a meantime, I have attended the 6-level course preparing me to become the front-end developer. I have chosen the web development because as an aesthete I very like seeing the result of my work and this field allows me to do so. During the courses I have mentioned, I have taken part in 982 lectures spending there around 240 hours plus the time devoted to solving the problems and doing a lot of exercises on my own. </p>
            <p className='center'>During this courses I have learned to : </p>
            <ul>
                <li>Create attractive, good looking websites with the advanced CSS techniques,</li>
                <li>Use JavaScript to create effects and animations on the website,</li>
                <li>Use the ES5 and ES6 versions of JavaScript and the idea of object-oriented programming,</li>
                <li>Create the GitHub repository and use it In the project,</li>
                <li>Use the React library and create Single Page Applications using Create React App,</li>
                <li>Create the basic backend using Node JS and Express framework,</li>
                <li>Use the non-relational databases of MongoDB,</li>
                <li>Use the Sass pre-processor,</li>
                <li>Know and use BEM methodology,</li>
                <li>Using Node and NPM in projects,</li>
                <li>Set up and configure the Webpack,</li>
                <li>Use the Bootstrap in the projects,</li>
                <li>Create the optimized, efficient and responsive websites.</li>
            </ul>
            <p className='center'>If You would like to know more about the courses I have taken, please visit below links:</p>
            <ul>
                <li><a href="https://www.udemy.com/course/kurs-web-developer-od-podstaw-w-15-dni/" target="_blank">Web developer od podstaw w 15 dni</a></li>
                <li><a href="https://www.udemy.com/course/front-end-zaawansowany/" target="_blank">Front-end zaawansowany w 15 dni</a></li>
                <li><a href="https://www.udemy.com/course/kurs-programowanie-w-javascript/" target="_blank">Programowanie w JavaScript</a></li>
                <li><a href="https://www.udemy.com/course/kurs-react-od-podstaw/" target="_blank">React od podstaw</a></li>
                <li><a href="https://www.udemy.com/course/kurs-git-i-github-od-podstaw/" target="_blank">Wprowadzenie do Git i GitHub</a></li>
                <li><a href="https://www.udemy.com/course/kurs-nodejs-express-mongodb/" target="_blank">Node.js, Express i MongoDB</a></li>
                <li><a href="https://www.udemy.com/course/zaawansowane-projekty-w-css-i-javascript/" target="_blank">Zaawansowane projekty w CSS i JavaScript</a></li>
            </ul>
            <p>I know that this is only the beginning of my path but I am addicted to learning new skills every day and I am really excited looking forward to create many beautiful and meaningful projects :) </p>
            <section className='links'>
                <div className='button'><NavLink to='/Strona_wizytowka/hobbies'>My hobbies</NavLink></div>
                <div className='button'><NavLink to='/Strona_wizytowka/contact'>Contact me</NavLink></div>
            </section>
        </div>
    )
}

export default MyStory;