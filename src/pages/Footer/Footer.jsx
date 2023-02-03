import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer">
      <div class="container">
        <h4 class="">Sotf Online</h4>
        <form action="" method="" class="subscribeFooter">
          <div class="inputWrapper">
            <input type="email" name="email" required />
            <input type="submit" name="subSubmit" value="Subscribe" />
          </div>
        </form>
        <ul class="footerSocial">
          <li>
            <a href="#">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-phone-square-alt"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-globe-americas"></i>
            </a>
          </li>
        </ul>
        <hr />
        <p class="footerCopyright">
          © 2023<strong> PKR IT LTD.</strong> | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
