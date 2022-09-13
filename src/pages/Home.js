import React from 'react';
import logo from '../asset/img/logo-ALTA@2x.png';
import hero from '../asset/img/ivan.jpeg';
import "../asset/css/bootstrap.min.css";
import "../asset/css/form.css";
import "../asset/css/main.css";

function Home () {
      return (
        <div>
          <header>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="alterra">
                    <a href="index.html"><img className="logo" src={logo} alt="logo"/></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  {/* <div class="container"> */}
                  <div className="row align-items-center navig">
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="#home" className="aktif">HOME</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="#about">ABOUT</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#experience">EXPERIENCE</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">CONTACT</a></div> 
                  </div>
                  {/* </div> */}
                </div>    
              </div>
            </div> 
          </header>
          <div className="container-hero d-flex justify-content-center">
            <div className="row align-items-center isi-home mb-5">
              <div className="col-lg-4 col-md-12 col-sm-12  col-12 mb-5">
                <img className="hero d-flex" src={hero} alt="hero"/>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="main-p">
                  <p className="sapaan">Hi, my name is </p>
                  <p className="nama">Ivan Alrasyid</p>
                  <p className="hobi">I build things for the web</p>
                  <p className="tombol"><a href="about.html">Get In Touch</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};



  export default Home;