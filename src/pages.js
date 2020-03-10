import React from 'react';
import './pages.css';
import logo from './logo_nanya_pic.svg';

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
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
           
            <section className="resume-section  p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                    <h2 className="mb-5">Experience</h2>
                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Wafer Test Engineer</h3>
                            <div className="subheading mb-3">Nanya Technology</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit cupiditate laudantium possimus quam, ab alias ut deleniti pariatur minima eius voluptate, maiores nemo, inventore accusamus ea aliquam voluptatum fugiat! Fugit error id consectetur dolores tempore rerum, adipisci, beatae repellat minus assumenda harum eos vero? Velit ad neque sit accusantium?</p>
                        </div>
                        <div className="resume-date text-md-right">
                            
                            <span className="text-primary">January 2018 - August 2019</span>
                            <div className="w-100"></div>
                            <img src={logo} alt="" className="img-fluid mt-4 img-circle" />
                        </div>
                    </div>
                </div>

                

            </section>

            <section className="resume-section  p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                    <h2 className="mb-5">Experience</h2>
                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Wafer Test Engineer</h3>
                            <div className="subheading mb-3">Nanya Technology</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit cupiditate laudantium possimus quam, ab alias ut deleniti pariatur minima eius voluptate, maiores nemo, inventore accusamus ea aliquam voluptatum fugiat! Fugit error id consectetur dolores tempore rerum, adipisci, beatae repellat minus assumenda harum eos vero? Velit ad neque sit accusantium?</p>
                        </div>
                        <div className="resume-date text-md-right">

                            <span className="text-primary">January 2013 - August 2019</span>
                            <div className="w-100"></div>
                            <img src={logo} alt="" className="mt-3" />
                        </div>
                    </div>
                </div>



            </section>

            

           
        </div>

                  

      

    );
};

const Portfolio = () => {
    return <h1 className="py-3">Portfolio</h1>;
};


export { About, Resume, Portfolio };