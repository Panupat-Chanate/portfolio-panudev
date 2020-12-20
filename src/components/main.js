import React, { Component } from 'react';
import Profile from '../image/profile-nobg.png';
import Git from '../image/git.jpg';
import Dew from '../image/dew.jpg';
import Circle from '../image/circle.png';
import Run from '../image/run.jpg';
import Robot from '../image/robot.jpg';
import Web from '../image/web.jpg';
import Server from '../image/server.svg';
import Reactsvg from '../image/react.svg';
import About from '../image/about.svg';
export default class Main extends Component{
    constructor(){
        super();
        this.state = {
            email: 'Email : panupat.chanate@gmail.com',
            phone: 'Tel : 098-793-3914',
            status: true
        }
    }

    handleContact=(e)=>{
        this.setState({
            status: false
        })
    }
    render () {
      return (
        <div className="App">
            <main className="l-main">
            {/* <!--===== HOME =====--> */}
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">Hi,<br/>I'am <span className="home__title-color">Panupat Chanate</span><br/> Web Developer</h1>

                    <span type="button" className="button" onClick={this.handleContact}>Contact</span>
                </div>

                {/* <p classNameName="about__text">{this.state.email}</p> */}
                <p classNameName="about__text" hidden={this.state.status}>{this.state.email}<br/>{this.state.phone}</p>

                <div className="home__social">
                    <a href="https://github.com/Panupat-Chanate" className="home__social-icon"><i className='bx bxl-github' ></i></a>
                </div>

                <div className="home__img">    
                    <img src={Profile} alt=""/>
                </div>
            </section>

            {/* <!--===== ABOUT =====--> */}
            <section className="about section " id="about">
                <h2 className="section-title">About</h2>

                <div className="about__container bd-grid">
                    <img src={About} alt="" classNameName="about__img"/>
                    
                    <div>
                        <h2>Personal Details</h2>
                        <p className="about__text">Date of Birth : 15 September 1997 Age : 23.</p>
                        <p className="about__text">Address : 49 Village No.3, Pakduk Sub-district, Lomsak District, Phetchabun, 67110.</p>        
                        <br></br>
                        <h2>Education</h2>
                        <p className="about__text">Bachelor Degree of Computer Engineering</p>
                        <p className="about__text">Pibulsongkram Rajabhat UniversityGPA : 3.45</p>
                        <br></br>
                        <h2>Cooperative Education</h2>
                        <p className="about__text">O S D Co., LTD.(Optimum Solution Defined)</p>
                        <br></br>
                        <h2>Training</h2>
                        <p className="about__text">-2019 Startup Thailand</p>
                        <p className="about__text">-2018-2019 Huawei ICT Competition Thailand</p>
                        <br></br>
                        <h2>References</h2>
                        <p>Sunun Tati (Ph.D.)
                        Computer Engineering Lecturer
                        Pibulsongkram Rajabhat University
                        Tel. 089-642-4262</p>
                    </div>                                   
                </div>
            </section>

            {/* <!--===== web-application =====--> */}
            <section className="skills section" id="skill1">
                <h2 className="section-title">Skills</h2>

                <div className="skills__container bd-grid">          
                    <div>
                        <h2 className="skills__subtitle">Web Application</h2>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-html5 skills__icon'></i>
                                <span className="skills__name">HTML5</span>
                            </div>
                            <div className="skills__bar skills__80">

                            </div>
                            <div>
                                <span className="skills__percentage">80%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-react skills__icon'></i>
                                <span className="skills__name">React</span>
                            </div>
                            <div className="skills__bar skills__80">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">80%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-nodejs skills__icon' ></i>
                                <span className="skills__name">NodeJS</span>
                            </div>
                            <div className="skills__bar skills__80">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">80%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className="fab fa-php skills__icon"></i>
                                <span className="skills__name"> PHP</span>
                            </div>
                            <div className="skills__bar skills__70">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">70%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-microsoft skills__icon'></i>
                                <span className="skills__name">ASP.NET</span>
                            </div>
                            <div className="skills__bar skills__70">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">70%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>              
                        <img src={Reactsvg} alt="" className="skills__img"/>
                    </div>
                </div>
            </section>

            {/* Programming language */}
            <section className="skills section" id="skill2">
                <div className="skills__container bd-grid">          
                    <div>
                    <h2 className="skills__subtitle">Database Management</h2>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bx-server skills__icon' ></i>
                            <span className="skills__name">MongoDB</span>
                        </div>
                        <div className="skills__bar skills__80">
                            
                        </div>
                        <div>
                            <span className="skills__percentage">80%</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bx-server skills__icon' ></i>
                            <span className="skills__name">My SQL</span>
                        </div>
                        <div className="skills__bar skills__80">
                            
                        </div>
                        <div>
                            <span className="skills__percentage">80%</span>
                        </div>
                    </div>
                    <h2 className="skills__subtitle">Programming Language</h2>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='fab fa-python skills__icon'></i>
                                <span className="skills__name">Python</span>
                            </div>
                            <div className="skills__bar skills__70">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">70%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-c-plus-plus skills__icon'></i>
                                <span className="skills__name">C++</span>
                            </div>
                            <div className="skills__bar skills__70">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">70%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                            <i className='bx bxl-c-plus-plus skills__icon'></i>
                                <span className="skills__name">C#</span>
                            </div>
                            <div className="skills__bar skills__80">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">80%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-javascript skills__icon'></i>
                                <span className="skills__name">Javascipt</span>
                            </div>
                            <div className="skills__bar skills__80">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">80%</span>
                            </div>
                        </div>
                    </div>
                    <div>              
                        <img src={Server} alt="" className="skills__img"/>
                    </div>
                </div>
            </section>

            <section className="work section" id="work">
                <h2 className="section-title">Work</h2>
                <div className="work__container bd-grid">
                    <div className="work__img">
                        <img src={Robot} alt=""/>
                    </div>
                    <div className="work__img">
                        <img src={Git} alt=""/>
                    </div>
                    <div className="work__img">
                        <img src={Dew} alt=""/>
                    </div>
                    <div className="work__img">
                        <img src={Run} alt=""/>
                    </div>
                    <div className="work__img">
                        <img src={Web} alt=""/>
                    </div>
                    <div className="work__img">
                        <img src={Circle} alt=""/>
                    </div>
                </div>
            </section>

            {/* <!--===== CONTACT =====--> */}
            {/* <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <div className="contact__container bd-grid">
                    <form action="" className="contact__form">
                        <input type="text" placeholder="Name" className="contact__input"/>
                        <input type="mail" placeholder="Email" className="contact__input"/>
                        <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>
                        <input type="button" value="Send" className="contact__button button"/>
                    </form>
                </div>
            </section> */}
        </main>
        </div>
      );
    }
      
  }