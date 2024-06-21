import React, { Component } from "react";

export default class MyFooter extends Component {
  render() {
    return (
      <footer
        className=" text-center text-lg-start"
        style={{ backgroundColor: "#ffffffee" }}
      >
        <div className=" p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5
                className="text-uppercase text-center"
                style={{ color: "#062C60" }}
              >
                {" "}
                Social Community
              </h5>

              <p
                className="text-center"
                style={{ color: "#062C60", fontSize: "17px" }}
              >
                We depend on the others to return the children to their parents
                by photographing any homeless child on the street or any child
                whom he suspects has been kidnapped and uploading the pictures
                on the website, application or on our social community groups.
              </p>
            </div>

            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5
                className="text-uppercase text-center"
                style={{ color: "#062C60" }}
              >
                Prevention is better than cure
              </h5>

              <p
                className="text-center"
                style={{ color: "#062C60", fontSize: "17px" }}
              >
                Now you can create a QR code for your son and put it on
                anything, whether it is a chain or a T-shirt, or tattoo it on
                his body as a form of prevention, so that if he gets lost,
                whoever finds him will scan the QR and give him information
                about the child and means of communication with his parents.
              </p>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "#ffffffe5", color: "#062C60" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-body text-decoration-none" href="/">
            <span style={{ color: "#062C60", fontWeight: "bolder" }}>
              Finder
            </span>
          </a>
        </div>
      </footer>
    );
  }
}
