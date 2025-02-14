import React from 'react'

const footer = () => {
    return (
        <div> 
            {/* Footer*/}
            <footer className="footer text-center">
            <div className="container">
                <div className="row">
                {/* Footer Location*/}
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Location</h4>
                    <p className="lead mb-0">
                    Commonwealth Ave, 
                    <br />
                    Boston MA 02215, 
                    <br />
                    United States             
                    </p>
                </div>
                {/* Footer Social Icons*/}
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Around the Web</h4>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/joao-pedro-facanha"><i className="fab fa-fw fa-linkedin-in" /></a>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/JoaoMartinsRocha"><i className="fab fa-fw fa-github" /></a>
                </div>
                {/* Footer About Text*/}
                <div className="col-lg-4">
                    <h4 className="text-uppercase mb-4">Bootstrap theme used: Freelance</h4>
                    <p className="lead mb-0">
                    Freelance is a free to use, MIT licensed Bootstrap theme created by
                    <a href="http://startbootstrap.com">Start Bootstrap</a>
                    .
                    </p>
                </div>
                </div>
            </div>
            </footer>


        </div>
    )
}

export default footer