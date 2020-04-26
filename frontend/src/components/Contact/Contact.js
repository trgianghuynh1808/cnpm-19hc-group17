import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact-page-wrao section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <div className="contact-form">
                  <form action="index.html">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="name-input">
                          <input type="text" placeholder="Full Name" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="email-input">
                          <input type="email" placeholder="Email Address" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="website-input">
                          <input type="url" placeholder="Website" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="subject-input">
                          <input type="text" placeholder="Subject" />
                        </div>
                      </div>
                    </div>
                    <div className="message-input">
                      <textarea
                        name="review"
                        cols={30}
                        rows={10}
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="input-submit">
                      <button type="submit">Submit Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*== Contact Page Area End ==*/}
        {/*== Map Area Start ==*/}
        <div className="maparea">
          <iframe
            title="contact"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29213.038296132225!2d90.39150904197642!3d23.760577791538438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c783c3404f0d%3A0x76ae0d2edabc81df!2sHatir+Jheel!5e0!3m2!1sen!2sbd!4v1517941663187"
          />
        </div>
      </div>
    );
  }
}

export default Contact;
