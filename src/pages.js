import React from 'react';
import logo from './logo_nanya_pic.svg';
import photo from './photo.JPG';
import todo from './todolist.jpg';
import ball from './ball.jpg';
import extension from './extension.png';

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 mb-4 mt-5">
                    <img src={photo} height="300" width="300" alt="" className="img-fluid rounded mx-auto d-block" />
                </div>

                <div className="col-12 col-md-7">
                    <h2 className="mt-5 mb-4">About Me</h2>
                    <p> Hi, I'm Yu Liang. I was born in 1994. Experienced in Perl, Building several simple websites with HTML, CSS, and JavaScript for my department,and I build it in LAMP environment. Seeking to become the next front end developer. </p>
                    <p> Email : liang10339@gmail.com <br />
                     LinkedIn : <a href="https://www.linkedin.com/in/yuliang-lnh21645/"> YuLiang</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

const Resume = () => {
    return (

        <div className="container">
            <div className="row mt-4">
                <h2 className="col-12 col-md-5 mb-3">Skills</h2>
                <div className="w-100"></div>
                <div className="col-6 col-md-4">
                    <p className="mb-1"> Perl </p>
                    <p className="mb-1"> HTML,CSS,JavaScript </p>
                    <p className="mb-1"> C# </p>
                    <p className="mb-1"> PHP </p>
                    <p className="mb-1"> MySQL,SQL </p>
                </div>
                <div className="col-6 col-md-4">
                    <p className="mb-1"> Advanced </p>
                    <p className="mb-1"> Intermediate </p>
                    <p className="mb-1"> Beginner </p>
                    <p className="mb-1"> Beginner </p>
                    <p className="mb-1"> Beginner </p>
                </div>
            </div>

            <div className="row mt-3">
                <h2 className="mb-3 ml-2">Experience</h2>
                <div className="w-100"></div>
                <div className="col-12 col-md-7 ">
                    <h5 className="mt-2 mb-1">Wafer Test Engineer</h5>
                    <h6 className="mt-1 mb-4 text-secondary">Nanya Technology</h6>
                    <h6> <li>Writing Perl in SUSE </li></h6>
                    <ul >
                        <li>setting up cron job to check if there is any trouble in wafer test process </li>
                        <li>using some command to monitor processes, outputs, capacity and system resource usage </li>
                        <li>using regex to find specific word and write in output file </li>
                    </ul>


                    <h6> <li> Building Website in HTML,CSS,JavaScript </li> </h6>
                    <ul>
                        <li>Buind in LAMP environment</li>
                        <li>add import and export csv file function by JavaScript library </li>
                    </ul>


                    <h6> <li>Fixing Hardware </li></h6>
                    <ul>
                        <li>use fsck to repair file system errors</li>
                        <li>check MotherBoard,RAM,VGA,HDD,PSU...etc</li>
                    </ul>


                    <h6><li> Troubleshooting </li></h6>
                    <ul>
                        <li>Find out errors in wafer test program ,monitor program,or hardware problems</li>
                    </ul>

                </div>
                <div className="col-12 col-md-5">
                    <p className="text-primary mt-2 mb-1"> January 2018 - August 2019</p>
                    <img src={logo} className="mt-3 mb-4" alt="..." height="120px" width="120px" />
                </div>
            </div>

            <div className="row mt-3 mb-4">
                <h2 className="mb-3 ml-2">Education</h2>
                <div className="w-100"></div>
                <div className="col-12 col-md-7">
                    <h5 className="mt-2 mb-1">National Chiayi University</h5>
                    <p className="mt-2 mb-1">Bachelor of Management Information System</p>
                </div>
                <div className="col-12 col-md-5">
                    <p className="text-primary mt-2 mb-1">September  2013 - June 2017</p>
                </div>
                <div className="col-12 col-md-7">
                    <h5 className="mt-2 mb-1">Taipei Municipal Zhong-zheng Senior High School</h5>
                </div>
                <div className="col-12 col-md-5">
                    <p className="text-primary mt-2 mb-1">September  2010 - June 2013</p>
                </div>
            </div>
        </div>
    );
};

const Portfolio = () => {
    return (

        <div className="container">
            <div className="row mt-4 ">
                <h2 className="col-12 col-md-5 mb-3">Portfolio</h2>
                <div className="w-100"></div>
                <div className=" col-12 col-md-4 ">
                    <img className="img" src={todo} alt="Card" width="300" height="200" />
                    <div className="card-body ">
                        <h4 className="card-title">Todo List</h4>
                        <p className="card-text">Using Vanilla JS to create a todo list</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/liang10339/pen/ExjqjVY" class="stretched-link"></a>
                    </div>
                </div>
                <div className=" col-12 col-md-4 ">
                    <img className="img" src={ball} alt="Card" width="300" height="200" />
                    <div className="card-body ">
                        <h4 className="card-title">Bounce Ball</h4>
                        <p className="card-text">Using Canvas to create a bounce ball</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/liang10339/pen/zYvrLgX" class="stretched-link"></a>
                    </div>
                </div>
                <div className=" col-12 col-md-4 ">
                    <img className="img" src={extension} alt="Card" width="300" height="200"/>
                    <div className="card-body ">
                        <h4 className="card-title">Chrome extension</h4>
                        <p className="card-text">Using nodeType and nodeValue to replace words</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/liang10339/wordToTaiwanese" class="stretched-link"></a>
                    </div>
                </div>
            </div>
        </div>

    );
};


export { About, Resume, Portfolio };