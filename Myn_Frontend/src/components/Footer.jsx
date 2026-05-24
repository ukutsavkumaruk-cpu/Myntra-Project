const Footer = () =>{
    return <>
    <footer>
        <div className="footer_container">
            <div className="footer_column">
                <h3>ONLINE SHOPPING</h3>

                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Gift Card</a>
                <a href="#">Myntra Insider</a>
                <div className="download">
                    <a href="#">
                        <img className="download-images" type="image/svg+xml"  src="/images/available-on-the-app-store.svg" alt=""></img>
                    </a>
                    <a href="#">
                        <img className="download-images" type="image/svg+xml"  src="/images/get-it-on-google-play.svg" alt=""></img>
                    </a>
                </div>
            </div>

            <div className="footer_column">
                <h3>USEFUL LINKS</h3>

                <a href="#">Blog
</a>
                <a href="#">Careers</a>
                <a href="#">Site Map
</a>
                <a href="#">Corporate Information
</a>
                <a href="#">Whitehat</a>
                <a href="#">Cleartrip
</a>
                <a href="#">Myntra Global</a>
                <a href="#">CUSTOMER POLICIES</a>
            </div>

            <div className="footer_column">
                <h3>Contact Us</h3>

                <a href="#">FAQ</a>
                <a href="#">T&C</a>
                <a href="#">Terms Of Use</a>
                <a href="#">Track Orders</a>
                <a href="#">Shipping</a>
                <a href="#">Cancellation</a>
                <a href="#">Privacy policy</a>
                 <a href="#">Grievance Redressal</a>
                <a href="#">FSSAI Food Safety Connect app</a>
            </div>
        </div>
        <hr/>

        <div className="copyright">
            © 2023 www.myntra.com. All rights reserved.
        </div>
    </footer>
    </>
}
export default Footer;