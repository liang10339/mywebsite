import React from 'react';
import logo from './logo_nanya_pic.svg';
import photo from './photo.JPG';

const About = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-5 mb-4 mt-5">
                    <img src={photo} height="300" width="300" alt="" className="img-fluid rounded mx-auto d-block" />
                </div>

                <div className="col-12 col-md-7">
                    <h2 className="mt-5 mb-4">About Me</h2>
                    <p> Hi, I'm Yu Liang. I was born in 1994. Experienced in Perl, Building several simple websites with HTML, CSS, and JavaScript for my department,and I build it in LAMP environment. Seeking to become the next front end developer. </p>
                    <p> Email : liang10339@gmail.com <br></br>
                     LinkedIn : <a href="https://www.linkedin.com/in/yuliang-lnh21645/"> YuLiang</a>
                     </p>
                </div>
            </div>
        </div>
    );
};

const Resume = () => {
    return (

        <div className="container ml-5">
            <div className="row mt-5">
                <h2 className="mb-3 ml-2">Skills</h2>
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

            <div className="row mt-5">
                <h2 className="mb-3 ml-2">Experience</h2>
                <div className="w-100"></div>
                <div className="col-12 col-md-7 ">
                    <h5 className="mt-2 mb-1">Wafer Test Engineer</h5>
                    <h6 className="mt-1 mb-4 text-secondary">Nanya Technology</h6>
                    <li> Using Perl
                        {/* <ul>
                            <li>Check if there is any trouble in wafer test process ,like whether program </li>
                            <li>Purus sodales ultricies</li>
                        </ul> */}
                    </li>

                    <li> Building Website in HTML,CSS,JavaScript
                        {/* <ul>
                            <li></li>
                            <li></li>
                        </ul> */}
                    </li>

                    <li> Fixing Hardware
                        {/* <ul>
                            <li></li>
                            <li></li>
                        </ul> */}
                    </li>

                    <li> Troubleshooting
                        {/* <ul>
                            <li></li>
                            <li></li>
                        </ul> */}
                    </li>
                </div>
                <div className="col-12 col-md-5">
                    <p className="text-primary mt-2 mb-1"> January 2018 - August 2019</p>
                    <img src={logo} className="mt-3 mb-4" alt="..." height="120px" width="120px" />
                </div>
            </div>

            <div className="row mt-5 mb-4">
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
    return <h1 className="py-3">Portfolio</h1>;
};


export { About, Resume, Portfolio };