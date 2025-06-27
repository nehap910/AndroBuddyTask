import React from 'react'
import "./footer.css";
function Footer() {
  return (
    <div>
      <footer class="footer">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="">ACME STORE</div>
            </div>

            <div class="text-md-end">
                <ul class="footer-links">
                     <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Shipping & Return Policy</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer
