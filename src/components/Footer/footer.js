import React, {Fragment} from "react";
import "./footer.css";

const Footer = () => {
    return(
        <Fragment>
            <footer class="footer_area section_padding_130_0">
                <div class="container">
                    <div class="row">
                    <div class="col-12 col-sm-6 col-lg-4">
                        <div class="single-footer-widget section_padding_0_130">
                        <div class="footer-logo mb-3"></div>
                        <p>Contact List is completely creative, lightweight, clean app landing page.</p>
                        <div class="copywrite-text mb-5">
                            <p class="mb-0">Made with <i class="lni-heart mr-1"></i>by<a class="ml-1">Step</a></p>
                        </div>
                        <div class="footer_social_area"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i class="fa fa-pinterest"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype"><i class="fa fa-skype"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg">
                        <div class="single-footer-widget section_padding_0_130">
                        <h5 class="widget-title">About</h5>
                        <div class="footer_menu">
                            <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Community</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg">
                        <div class="single-footer-widget section_padding_0_130">
                        <h5 class="widget-title">Support</h5>
                        <div class="footer_menu">
                            <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg">
                        <div class="single-footer-widget section_padding_0_130">
                        <h5 class="widget-title">Contact</h5>
                        <div class="footer_menu">
                            <ul>
                            <li><a href="#">Email Us</a></li>
                            <li><a href="#">Address</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;