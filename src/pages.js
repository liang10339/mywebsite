import React from 'react';
import './pages.css';
import logo from './logo_nanya_pic.svg';

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6  mt-4">
                    <img src="https://picsum.photos/id/684/500/500" alt="" className="img-fluid" />

                </div>

                <div className="col-12 col-md-6">
                    <h2 className="mb-4">About Me</h2>
                    <p> Hi, I'm Yu Liang. Experienced in command line interface with Perl, Building several simple websites with HTML, CSS, and JavaScript for our own department. Seeking to become the next front end developer. </p>
                </div>
            </div>



        </div>
    );
};

const Resume = () => {
    return (

        <div className="container">
            <div className="row">
                <h2 className="mb-3 ml-3">Skills</h2>
                <div className="w-100"></div>
                <div className="col-6 col-md-4">
                    <p> Perl </p>
                    <p> HTML,CSS,JavaScript </p>
                    <p> C# </p>
                    <p> PHP </p>
                    <p> MySQL,SQL </p>
                </div>
                <div className="col-6 col-md-4">
                    <p> Advanced </p>
                    <p> Intermediate </p>
                    <p> Beginner </p>
                    <p> Beginner </p>
                    <p> Beginner </p>
                </div>
            </div>

            <div className="row">
                <h2 className="mb-3 ml-3">Experience</h2>
                <div className="w-100"></div>
                <div className="col-12 col-md-8">
                    <h4 className="mt-2 mb-1">Wafer Test Engineer</h4>
                    <h5 className="mt-2 mb-1">Nanya Technology</h5>
                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, dolore sapiente quas nam quo a voluptatibus consequatur mollitia unde quod alias magni sequi debitis fugiat. Rem eaque suscipit minima quod cum culpa voluptatem molestias provident omnis! Vel est ea, fugiat minus amet reiciendis sit facere id laborum voluptas exercitationem eligendi?</p>
                </div>
                <div className="col-12 col-md-4">
                    <p className="text-primary mt-2 mb-1"> January 2018 - August 2019</p>
                    <img src={logo} className="mt-2 mb-1" alt="..." height="120px" width="120px" />
                </div>
            </div>

            <div className="row mb-4">
                <h2 className="mb-3 ml-3">Education</h2>
                <div className="w-100"></div>
                <div className="col-12 col-md-8">
                    <h5 className="mt-2 mb-1">National Chiayi University</h5>
                    <p className="mt-2 mb-1">Bachelor of Management Information System</p>
                </div>
                <div className="col-12 col-md-4">
                    <p className="text-primary mt-2 mb-1">September  2013 - June 2017</p>
                </div>
                <div className="col-12 col-md-8">
                    <h5 className="mt-2 mb-1">Taipei Municipal Zhong-zheng Senior High School</h5>
                </div>
                <div className="col-12 col-md-4">
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