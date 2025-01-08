import React from 'react'


const Home = () => {
    return (
        <div> 
  <header className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column">
      {/* Masthead Avatar Image*/}
      <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." />
      {/* Masthead Heading*/}
      <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
      {/* Icon Divider*/}
      <div className="divider-custom divider-light">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
        <div className="divider-custom-line" />
      </div>
      {/* Masthead Subheading*/}
      <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </header>
  {/* Portfolio Section*/}
  <section className="page-section portfolio" id="portfolio">
    <div className="container">
      {/* Portfolio Section Heading*/}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
      {/* Icon Divider*/}
      <div className="divider-custom">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
        <div className="divider-custom-line" />
      </div>
      {/* Portfolio Grid Items*/}
      <div className="row justify-content-center">
        {/* Portfolio Item 1*/}
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="assets/img/portfolio/cabin.png" alt="..." />
          </div>
        </div>
        {/* Portfolio Item 2*/}
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="assets/img/portfolio/cake.png" alt="..." />
          </div>
        </div>
        {/* Portfolio Item 3*/}
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="assets/img/portfolio/circus.png" alt="..." />
          </div>
        </div>
        {/* Portfolio Item 4*/}
        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="assets/img/portfolio/game.png" alt="..." />
          </div>
        </div>
        {/* Portfolio Item 5*/}
        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="assets/img/portfolio/safe.png" alt="..." />
          </div>
        </div>
        {/* Portfolio Item 6*/}
        <div className="col-md-6 col-lg-4">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="assets/img/portfolio/submarine.png" alt="..." />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About Section*/}
  <section className="page-section bg-primary text-white mb-0" id="about">
    <div className="container">
      {/* About Section Heading*/}
      <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
      {/* Icon Divider*/}
      <div className="divider-custom divider-light">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
        <div className="divider-custom-line" />
      </div>
      {/* About Section Content*/}
      <div className="row">
        <div className="col-lg-4 ms-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
        <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
      </div>
      {/* About Section Button*/}
      <div className="text-center mt-4">
        <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
          <i className="fas fa-download me-2" />
          Free Download!
        </a>
      </div>
    </div>
  </section>
  {/* Contact section */}
 <section className="page-section" id="contact">
  <div className="container">
    {/* Contact Section Heading*/}
    <div className="text-center">
      <h2 className="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
    </div>
    {/* Icon Divider*/}
    <div className="divider-custom">
      <div className="divider-custom-line" />
      <div className="divider-custom-icon"><i className="fas fa-star" /></div>
      <div className="divider-custom-line" />
    </div>
    {/* Contact Section Content*/}
    <div className="row justify-content-center">
      <div className="col-lg-4">
        <div className="d-flex flex-column align-items-center">
          <div className="icon-contact mb-3"><i className="fas fa-mobile-alt" /></div>
          <div className="text-muted">Phone</div>
          <div className="lead font-weight-bold">(305) 924-4513</div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="d-flex flex-column align-items-center">
          <div className="icon-contact mb-3"><i className="far fa-envelope" /></div>
          <div className="text-muted">Email</div><a className="lead font-weight-bold" href="mailto:jprocha@bu.edu">jprocha@bu.edu</a>
        </div>
      </div>
    </div>
  </div>
</section>

     

  {/* Portfolio Modals*/}
  {/* Portfolio Modal 1*/}
  <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} aria-labelledby="portfolioModal1" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 2*/}
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} aria-labelledby="portfolioModal2" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Tasty Cake</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cake.png" alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 3*/}
  <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} aria-labelledby="portfolioModal3" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Circus Tent</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/circus.png" alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 4*/}
  <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} aria-labelledby="portfolioModal4" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 5*/}
  <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} aria-labelledby="portfolioModal5" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 6*/}
  <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} aria-labelledby="portfolioModal6" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Home