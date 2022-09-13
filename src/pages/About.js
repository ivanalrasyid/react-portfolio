import React from 'react';
import logo_about from '../asset/img/logo-ALTA-v2@2x.png';
import logo_fb from '../asset/img/fb.png'
import logo_twitter from ' ../asset/img/twitter.png'
import logo_ig from '../asset/img/ig.png'
import logo_linkeldn from '../asset/img/linkend.png'
import logo_me from '../asset/img/ivan.jpeg'
import logo_bawah from '../asset/img/ivan.jpeg'
import "../asset/css/bootstrap.min.css";
import "../asset/css/form.css";
import "../asset/css/main.css";



function About () {
    return (
        <div id="about">
          <header>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="alterra">
                    <a href="index.html"><img className="logo_about" src={logo_about} alt="logo_about"/></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  {/* <div class="container"> */}
                  <div className="row align-items-center navig">
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="index.html">HOME</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="about.html" className="aktif">ABOUT</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#expereince">EXPERIENCE</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">CONTACT</a></div> 
                  </div>
                  {/* </div> */}
                </div>    
              </div>
            </div> 
          </header>
          <div className="container-fluid about-me">
            <h1 className="container pl-2 pt-5 pb-5">
              ABOUT ME.
            </h1>
          </div>  
          <div className="container">
            <div className="row pt-5 pb-5 ">
              <div className="col-lg-7 col-md-12 col-sm-12 col-12 pl-5">
                <div className="about-anne">
                  <p>
                    Hello! Im Anne Sullivan, a full-stack engineer based in Malang, IDN who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends. <br /><br />
                    Shortly after graduating from Alterra Academy, I joined the engineering team at Alterra where I work on a wide variety of interesting and meaningful projects on a daily basis. <br /><br />
                    Hers few technologies Ive been working with recently :
                  </p>
                </div>
                <div>
                  <table className="tabel-anne">
                    <tbody><tr>
                        <td>HTML &amp; CSS</td>
                        <td>Serverless</td>
                        <td>Scrum</td>
                      </tr>
                      <tr>
                        <td>Programming</td>
                        <td>Restful API</td>
                        <td>Test-Driven Dev</td>
                      </tr>
                      <tr>
                        <td>Database</td>
                        <td>Javascript</td>
                        <td>Software Testing</td>
                      </tr>
                      <tr>
                        <td>Git &amp; Github</td>
                        <td>Sigle Page App</td>
                        <td>UX/UI Designer</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 col-12 pr-5">
                <div className="foto-id text-lg-right text-md-center text-sm-center">
                  <img src={logo_me} className="logo_me" alt="logo_me" />
                </div>                
              </div>
            </div>
          </div>
          <footer>
            <div className="container">
              <div className="row pt-5 pb-5">
                <div className="pl-5 col-lg-5 col-md-4 col-sm-12 col-12 text-lg-left text-md-left text-sm-center">
                  <a href="index.html"><img className="logo_bawah" src={logo_bawah} alt="logo bawah" /></a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-lr-left text-md-center text-sm-center">
                  <h6>Social Media:</h6>
                  {/* <div class="col-3 text-center"> */}
                  <a href="https://www.facebook.com/AlterraAcademy"><img className="logo_fb" src={logo_fb} alt="logo_fb" /></a>
                  {/* </div> */}
                  {/* <div class="col-3 text-center"> */}
                  <img className="logo_twitter" src={logo_twitter} alt="logo_twitter"/>
                  {/* </div> */}
                  {/* <div class="col-3 text-center"> */}
                  <a href="https://www.instagram.com/alterra.academy/"><img className="logo-sosmed" src={logo_ig} alt="logo_ig"/></a>
                  {/* </div> */}
                  {/* <div class="col-3 text-center"> */}
                  <a href="https://id.linkedin.com/"><img className="logo_linkeldn" src={logo_linkeldn} alt="logo_linkeldn"/></a>
                  {/* </div> */}
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12 col-12 pt-3">
                  <h6 className="text-lg-right text-md-center text-sm-center kopi">Copyleft © 2019 - Unjelas Team</h6>
                </div>
              </div>
            </div>
          </footer>
        </div>
    )
}

export default About;