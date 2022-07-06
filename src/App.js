import './App.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-xxl-4 px-4">
        <a className="navbar-brand" href="/">
          <img src="assets/img/logo.png" alt="logo" height="50px" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-4" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="sign-up.html">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className=" bg-dark pt-xl-16 pt-lg-10 pt-4 ">
        <div className="container px-4 px-lg-0">
          <div className="row align-items-center">
            <div className=" col-xl-5 col-md-12 py-6 py-xl-0">
              <div className="mb-4 text-center text-xl-start px-md-8 px-lg-19 px-xl-0">
                <h1 className="display-2 fw-bold mb-3 text-white ls-sm ">
                  Start a new project with
                  <span className="text-warning"> Astreak UI</span>
                </h1>
                <p className="mb-6 lead text-white-50 pe-lg-6">
                  Beautiful and responsive components to build your application or marketing pages quicker.
                </p>
                <a href="https://www.instagram.com/astreak.oi/" className="btn btn-primary">Get In Touch</a>
              </div>
            </div>
            <div className="col-xl-7 col-md-12  d-flex justify-content-start">
              <img src="assets/img/graphics.svg" alt="" className="img-fluid mw-md-160" />
            </div>
          </div>
        </div>
      </div>


      <div className="py-4 shadow-sm position-relative bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Feature --> */}
              <div className="text-dark fw-semi-bold lh-1 fs-4 mb-3 mb-lg-0"><span
                className="icon-shape icon-xs rounded-circle bg-light-warning text-center me-2"><i
                  className="mdi mdi-check text-dark-warning "></i></span><span className="align-middle">Shareable
                    Digital print</span></div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Feature --> */}
              <div className="text-dark fw-semi-bold lh-1 fs-4 mb-3 mb-lg-0"><span
                className="icon-shape icon-xs rounded-circle bg-light-warning text-center me-2"><i
                  className="mdi mdi-check text-dark-warning "></i></span><span className="align-middle">Flexible
                    Deadlines</span></div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Feature --> */}
              <div className="text-dark fw-semi-bold lh-1 fs-4 mb-3 mb-md-0"><span
                className="icon-shape icon-xs rounded-circle bg-light-warning text-center me-2"><i
                  className="mdi mdi-check text-dark-warning "></i></span><span className="align-middle">100%
                    Online </span></div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Feature --> */}
              <div className="text-dark fw-semi-bold lh-1 fs-4"><span
                className="icon-shape icon-xs rounded-circle bg-light-warning text-center me-2"><i
                  className="mdi mdi-check text-dark-warning "></i></span><span className="align-middle">Approx.24
                    hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="py-8 py-lg-18 my-5">
        <div className="container">
          <div className="row mb-6 align-items-center justify-content-center">
            <div className="col-md-10">
              <div className="row align-items-center ">
                <div className="col-xl-6 col-lg-7 col-md-12 col-12 order-1 text-center text-lg-start ">
                  {/* <!-- caption --> */}
                  <span className="text-primary mb-3 d-block text-uppercase fw-semi-bold ls-xl">YOUR
                    Desiner</span>
                  <h2 className="mb-2 display-4 fw-bold mb-3">Hi, I’m <span className="text-primary">Trace
                    Davies</span>,
                    <br />I will be taking you through Sessions.
                  </h2>
                  <p className="fs-3 pe-6">Create beautiful website with this Astreak UI template. Get started
                    building a
                    site today.</p>

                  <hr className="my-5" />
                  {/* <!-- Counter --> */}
                  <div className="row">
                    <div className="col-sm mb-3 mb-lg-0">
                      <h2 className="h1 fw-bold mb-0 ls-xs">45</h2>
                      <p className="mb-0">Projects</p>
                    </div>
                    <div className="col-lg-5 col-sm mb-3 mb-lg-0">
                      <h2 className="h1 fw-bold mb-0 ls-xs">10+</h2>
                      <p className="mb-0">Employee</p>
                    </div>
                    <div className="col-sm mb-3 mb-lg-0">
                      <h2 className="h1 fw-bold mb-0 ls-xs">2140+</h2>
                      <p className="mb-0">Working Hours</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Img --> */}
                <div className="offset-xl-1 col-xl-5 col-lg-5 col-12 mb-6 mb-lg-0 order-lg-2 text-center ">
                  <img src="assets/img/instructor-img.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-lg-16 py-10 bg-dark pt-4 mx-2">
        <div className="container">
          <div className="py-14 bg-dark">
            <div className="container">
              <div className="row">
                <div className="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">
                  <span className="fs-4 text-warning ls-md text-uppercase
                        fw-semi-bold">get things done</span>
                  {/* <!-- heading  --> */}
                  <h2 className="display-3 mt-4 mb-3 text-white fw-bold">Just try it out! You will
                    fall in love</h2>
                  {/* <!-- para  --> */}
                  <p className="lead text-white-50 px-lg- 8 mb-6">Designed for modern
                    companies looking to launch
                    a simple, premium and modern website and apps.</p>
                  <a href="/" className="btn btn-primary">Try For Free</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="row align-items-center g-0 border-top py-2 m-3">
        <div className="col-lg-4 col-md-5 col-12">
          <span className="text-light ms-2">© 2021 Astreak, Inc. All Rights Reserved</span>
        </div>
        <div className="col-12 col-md-7 col-lg-8 d-md-flex justify-content-end">
          <nav className="nav nav-footer">
            <a className="nav-link ps-0 text-light" href="/">Privacy Policy</a>
            <a className="nav-link px-2 px-md-3 text-light" href="/">Cookie Notice </a>
            <a className="nav-link text-light" href="/">Terms of Use</a>
          </nav>
        </div>
      </div>



    </>
  );
}

export default App;
