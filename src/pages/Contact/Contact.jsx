import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <section class="contactSection">
        <div class="container">
          <h2>Call To Action</h2>
          {/* <a href="#" class="cToABtn">
            Call To Action
          </a> */}
          <a class="cToABtn" href="tel:+8801782488123">Call To Action</a>
        </div>
      </section>
      <section>
        <div class="container">
          <h2 class="contactTitle">Contact</h2>
          <div class="boxWrapper">
            <div class="singleBox">
              <div class="lcBox">
                <div class="singleLc">
                  <h4>
                    <i class="fas fa-map-marker-alt"></i> Location:
                  </h4>
                  <span>
                    Polli Mongol Hat, Sadar Bogura, Bogura, Bangladesh.
                  </span>
                </div>
                <div class="singleLc">
                  <h4>
                    <i class="far fa-envelope-open"></i> Email:
                  </h4>
                  {/* <span>dev.alaminpk@gmail.com
                  </span> */}
                <div>
                  <a href="mailto:">dev.alaminpk@gmail.com</a>
                </div>
                </div>
                <div class="singleLc">
                  <h4>
                    <i class="fas fa-phone-square-alt"></i> Call:
                  </h4>
                  <span>8801782488123</span>
                </div>
              </div>
              <div class="lcBox">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29281.642425198927!2d91.16580086277614!3d23.4530578731408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f249815015d%3A0x549a77e542115f77!2sCumilla!5e0!3m2!1sen!2sbd!4v1642314280909!5m2!1sen!2sbd"
                  width="100%"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
            <div class="singleBox">
              <h5 class="formTitle">Send Message</h5>
              <form action="" method="" class="smsForm">
                <div class="inputBox">
                  <span>Your Name :</span>
                  <input type="text" />
                </div>
                <div class="inputBox">
                  <span>Your Email :</span>
                  <input type="text" />
                </div>
                <div class="inputBox">
                  <span>Your Number :</span>
                  <input type="text" />
                </div>
                <div class="inputBox">
                  <span>Your Message :</span>
                  <textarea name="" id="" cols="30" rows="8"></textarea>
                </div>
                <div class="inputBox">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
