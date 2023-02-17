import React from 'react'
import "./footer.css"
function Footer() {
  return (
  
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            
            <p class="text-justify">A Decentralized Land Registraion and Selling Web Application Platform 
            We provide facilitates secure data sharing, streamlines rental collections and payments to property owners, and also provides premium due diligence across the portfolio. This increases operational efficiency and allows for time- and cost-savings
            We  helps you to protect your land from fraud and to resist third party applications for adverse possession (“squatter's rights”) over your land and property
            </p>
          </div>

          

          <div class="col-xs-6 col-md-3">
            <h6 className='head'> Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
            
              <li><a href="/">Privacy Policy</a></li>
              
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
         <a href="#"> Binary wizards</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
  )
}

export default Footer