import React from "react";
import image1 from "./assets/images/logo.png";
import "/home/uki-jaffna/tale/src/components/assets/css/animate.css";
import "/home/uki-jaffna/tale/src/components/assets/css/flex-slider.css";
import "/home/uki-jaffna/tale/src/components/assets/css/fontawesome.css";
import "/home/uki-jaffna/tale/src/components/assets/css/owl.css";
import "/home/uki-jaffna/tale/src/components/assets/css/templatemo-tale-seo-agency.css";



function Header(){
    return(
    <>
     {/* <!-- ***** Pre-Header Area Start ***** --> */}
  <div class="pre-header" id="top">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-9">
          <div class="left-info">
            <ul>
              <li><a href="#"><i class="fa fa-phone"></i>+000 1234 5678</a></li>
              <li><a href="#"><i class="fa fa-envelope"></i>infocompany@email.com</a></li>
              <li><a href="#"><i class="fa fa-map-marker"></i>St. London 54th Bull</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-sm-3">
          <div class="social-icons">
            <ul>
              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- ***** Pre-Header Area End ***** --> */}

  {/* <!-- ***** Header Area Start ***** --> */}
  <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a href="index.html" class="logo">
                        <img src={image1} alt="yfyfy" style={{maxWidth: '112px'}}/>
                    </a>
                    {/* <!-- ***** Logo End ***** --> */}
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul class="nav">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="index.html">Services</a></li>
                      <li><a href="index.html">Projects</a></li>
                      <li class="has-sub">
                          <a href="javascript:void(0)">Pages</a>
                          <ul class="sub-menu">
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="faqs.html">FAQs</a></li>
                          </ul>
                      </li>
                      <li><a href="index.html">Infos</a></li>
                      <li><a href="index.html">Contact</a></li>
                  </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
            </div>
        </div>
    </div>
  </header>
  {/* <!-- ***** Header Area End ***** --> */}

    </>
    );
  }
  export default Header;