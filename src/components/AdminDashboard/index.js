import React from "react";

function AdminHeader() {
  return (
    <>
      <>
        <div className="main-body">
          <div className="container">
            <div className="row">
              <div className="main-page">
                <aside className="main-navigation">
                  <div className="main-menu">
                    <div className="menu-container">
                      <div className="block-keep-ratio block-keep-ratio-2-1 block-width-full home">
                        <a
                          href="index.html"
                          className="block-keep-ratio__content  main-menu-link"
                        >
                          <span className="main-menu-link-text">HOME</span>
                        </a>
                      </div>
                    </div>
                    <div className="menu-container">
                      <div className="block-keep-ratio  block-keep-ratio-1-1  block-width-half  pull-left  about-main">
                        <a
                          href="about.html"
                          className="main-menu-link about block-keep-ratio__content flexbox-center"
                        >
                          <i className="fa fa-user fa-4x main-menu-link-icon" />
                          ABOUT
                        </a>
                      </div>
                      <div className="block-keep-ratio  block-keep-ratio-1-1  block-width-half  pull-right  contact-main">
                        <a
                          href="contact.html"
                          className="main-menu-link contact block-keep-ratio__content flexbox-center"
                        >
                          <i className="fa fa-envelope-o fa-4x main-menu-link-icon" />
                          CONTACT
                        </a>
                      </div>
                    </div>
                    <div className="menu-container">
                      <div className="block-keep-ratio block-keep-ratio-1-1 block-keep-ratio-md-2-1 block-width-full gallery">
                        <a
                          href="gallery.html"
                          className="main-menu-link  block-keep-ratio__content"
                        >
                          <span className="main-menu-link-text">GALLERY</span>
                        </a>
                      </div>
                    </div>
                    {/* sidebar carousel */}
                    <div className="menu-container">
                      <div className="mauris">
                        <div
                          id="carousel-menu"
                          className="carousel slide"
                          data-ride="carousel"
                        >
                          {/* Wrapper for slides */}
                          <div className="carousel-inner" role="listbox">
                            <div className="item active">
                              <img src="images/slider-img-1.png" alt="slider" />
                              <div className="carousel-caption menu-caption">
                                mauris vita
                              </div>
                            </div>
                            <div className="item">
                              <img src="images/menu-bg-home.png" alt="slider" />
                              <div className="carousel-caption menu-caption">
                                lorem ipsum
                              </div>
                            </div>
                          </div>
                          {/* Controls */}
                          <a
                            className="left carousel-control"
                            href="#carousel-menu"
                            role="button"
                            data-slide="prev"
                          >
                            <span
                              className="fa fa-caret-left"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Previous</span>
                          </a>
                          <a
                            className="right carousel-control"
                            href="#carousel-menu"
                            role="button"
                            data-slide="next"
                          >
                            <span
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>{" "}
                      {/* .mauris */}
                    </div>
                  </div>{" "}
                  {/* main-menu */}
                </aside>{" "}
                {/* main-navigation */}
                <div className="content-main">
                  <div className="row margin-b-30">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="banner-main-home">
                        <div className="banner-main-home-text">
                          <div className="heading">
                            <h1>ACCORD</h1>
                            <p className="text-uppercase">
                              Proin gravida nibhISI
                            </p>
                          </div>
                          <div className="desc">
                            <p>
                              This is free Bootstrap v3.3.6 website theme
                              brought to you by templatemo. Feel free to use it.
                              Please tell your friends about it. Images are
                              provided by{" "}
                              <a
                                rel="nofollow"
                                href="http://unsplash.com"
                                target="_parent"
                              >
                                Unsplash
                              </a>{" "}
                              (free photo website). Icons are from Smashing
                              Magazine.
                            </p>
                            <button type="button" className="">
                              SAGITIS SELIT
                            </button>
                          </div>
                        </div>
                        <img
                          src="images/home-img-1.png"
                          alt="Image"
                          className="img-responsive"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row margin-b-30">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="box london">
                        <div className="box-icon">
                          <img
                            src="images/home-img-2.jpg"
                            alt="Image"
                            className="img-responsive"
                          />
                        </div>
                        <div className="info float-container">
                          <div className="col-sm-12 london-title">
                            <h3 className="text-uppercase">
                              Proin gravida nibhvel
                            </h3>
                            <h4 className="text-uppercase">
                              mauris vitae erat
                            </h4>
                          </div>
                          <p>
                            Sean sollicitudin, lorem quis bibendum auctor, nisi
                            elit consequat ipsum, nec sagittis sem nibh id elit.
                            Duis sed odio sit amet nibh vulputate cursus a sit
                            amet mauris. Morbi accumsan ipsum velit.{" "}
                          </p>
                          <hr />
                          <div className="col-sm-12 location-main">
                            <div className="pull-left location">
                              <i className="fa fa-map-marker fa-2x" />
                              <span>LONDON</span>
                            </div>
                            <div className="pull-right user-icons">
                              <a href="#">
                                <i className="fa fa-star fa-2x" />
                              </a>
                              <a href="#">
                                <i className="fa fa-user fa-2x" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="box paris">
                        <div className="box-icon">
                          <img
                            src="images/home-img-3.jpg"
                            alt="Image"
                            className="img-responsive"
                          />
                        </div>
                        <div className="info float-container">
                          <div className="col-sm-12 london-title paris-title">
                            <h3 className="text-uppercase">
                              Proin gravida nibhvel
                            </h3>
                            <h4 className="text-uppercase">
                              mauris vitae erat
                            </h4>
                          </div>
                          <p>
                            Sean sollicitudin, lorem quis bibendum auctor, nisi
                            elit consequat ipsum, nec sagittis sem nibh id elit.
                            Duis sed odio sit amet nibh vulputate cursus a sit
                            amet mauris. Morbi accumsan ipsum velit.{" "}
                          </p>
                          <hr />
                          <div className="col-sm-12 location-main">
                            <div className="pull-left location location2">
                              <i className="fa fa-map-marker fa-2x" />
                              <span>PARIS</span>
                            </div>
                            <div className="pull-right user-icons">
                              <a href="#">
                                <i className="fa fa-star fa-2x" />
                              </a>
                              <a href="#">
                                <i className="fa fa-user fa-2x" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* row */}
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="box bottom-main">
                        <div className="info float-container">
                          <div className="col-sm-12 bottom-title">
                            <h3 className="text-uppercase">
                              Proin gravida nibhvel
                            </h3>
                            <h4 className="text-uppercase">
                              mauris vitae erat
                            </h4>
                          </div>
                          <div className="row">
                            <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4 col-lg-4">
                              <div className="bottom-img">
                                <img src="images/home-img-4.jpg" alt="Image" />
                                <p className="first">Sollicitudin nibh</p>
                              </div>
                            </div>
                            <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4 col-lg-4">
                              <div className="bottom-img">
                                <img src="images/home-img-5.jpg" alt="Image" />
                                <p className="second">duis sedio amiet</p>
                              </div>
                            </div>
                            <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4 col-lg-4">
                              <div className="bottom-img">
                                <img src="images/home-img-6.jpg" alt="Image" />
                                <p className="third">Nec sagittis seim</p>
                              </div>
                            </div>
                          </div>
                          <p className="bottom-desc">
                            Duis sed odio sit amet nibh vulputate cursus a sit
                            amet mauris. Morbi accumsan ipsum velit. Nam nec
                            tellus a odio tincidunt auctor a ornare odio. Sed
                            non mauris vitae erat consequat auctor eu in elit.
                            Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. Mauris in
                            erat justo.{" "}
                          </p>
                          <hr />
                          <div className="col-sm-12 location-main">
                            <div className="pull-right bottom-user">
                              <a href="#">
                                <i className="fa fa-caret-right" />
                                <span>READ MORE</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* row */}
                </div>{" "}
                {/* .content-main */}
              </div>{" "}
              {/* .main-page */}
            </div>{" "}
            {/* .row */}
            <footer className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer">
                <p className="copyright">Copyright © 2016 Company Name</p>
              </div>
            </footer>{" "}
            {/* .row */}
          </div>{" "}
          {/* .container */}
        </div>{" "}
        {/* .main-body */}
        {/* JavaScript */}
      </>
    </>
  );
}

export default AdminHeader;
