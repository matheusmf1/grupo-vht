import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import CopyRight from './CopyRight';

const SocialShare = [
	{ Social: <FaFacebookF />, link: 'https://www.facebook.com/grupovht' },
	// { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
	{ Social: <FaInstagram />, link: 'https://www.instagram.com/grupo_vht' },
]

const Footer = () => {
	return (
		// <div className="footer-style-2 ptb--25 bg_image bg_image--1" data-black-overlay="6">
		// <div className="footer-style-2 ptb--25" data-black-overlay="9">
		<div className="footer-style-2 ptb--25">
			<div className="wrapper plr--50 plr_sm--20">
				<div className="row align-items-center justify-content-between">

					<div className="col-lg-4 col-md-6 col-sm-6 col-12">			
						<div className="logo text-center text-sm-left mb_sm--20">
							<img className='footer_image' src="/assets/images/logo-vht-horizontal-branco.png" alt="Logo VHT"/>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6 col-12 text-center">	
						<ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
							{SocialShare.map((val, i) => (
								<li key={i}><a href={`${val.link}`} target="_blank" rel="noreferrer">{val.Social}</a></li>
							))}
						</ul>
					</div>

					<CopyRight/>
					
				</div>
			</div>
		</div>
	)
}
export default Footer;