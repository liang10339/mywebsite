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
        
        // <div className="container">
        //     <div className="row">
               

        //         <section className="resume-section  p-lg-5 d-flex justify-content-center" id="experience">
        //             <div className="w-100">
        //                 <h2 className="mb-5">Experience</h2>
        //                 <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        //                     <div className="resume-content">
        //                         <h3 className="mb-0">Wafer Test Engineer</h3>
        //                         <div className="subheading mb-3">Nanya Technology</div>
        //                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit cupiditate laudantium possimus quam, ab alias ut deleniti pariatur minima eius voluptate, maiores nemo, inventore accusamus ea aliquam voluptatum fugiat! Fugit error id consectetur dolores tempore rerum, adipisci, beatae repellat minus assumenda harum eos vero? Velit ad neque sit accusantium?</p>
        //                     </div>
        //                     <div className="resume-date text-md-right">

        //                         <span className="text-primary">January 2013 - August 2019</span>
        //                         <div className="w-100"></div>
        //                         <img src={logo} alt="" className="mt-3" />
        //                     </div>
        //                 </div>
        //             </div>



        //         </section>

        //     </div>


        // </div>

    
         <div className="container">
             <div className="row">
                <div className="media border border-black">
                    <div className="media-body border border-aqua">
                        <h2 className="mb-5 border border-danger">Experience</h2>
                        <h4 className="mt-2 mb-1 border border-danger">Engineer</h4>
                        <h5 className="mt-0 mb-1 border border-danger">Media object</h5>
                        <p className="border border-danger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima fugit molestiae optio nemo sapiente.</p>
                    </div>
                    <img src={logo} className="ml-3 mt-7 border border-danger" alt="..." />
                </div>
                
                    
                

             </div>
         </div>  
        
      

      




    );
};

const Portfolio = () => {
    return <h1 className="py-3">Portfolio</h1>;
};


export { About, Resume, Portfolio };