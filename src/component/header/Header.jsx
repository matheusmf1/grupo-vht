import React from "react";
import Scrollspy from 'react-scrollspy';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";

const Header = () => {

	const menuTrigger = () => {
		document.querySelector('.header-wrapper').classList.toggle('menu-open')
	}

	const closeMenuTrigger = () => {
		document.querySelector('.header-wrapper').classList.remove('menu-open')
	}


	return(
		<>
			<header className="header-area formobile-menu header--fixed default-color">
					<div className="header-wrapper" id="header-wrapper">
							<div className="header-left">
									<div className="logo">
											<a href="/">
													{/* <img className="logo-1" src="/assets/images/logo/logo-light.png" alt="Logo Images"/> */}
													<img className="logo-1 logo-retangular" src="/assets/images/logo/logo-vht10.png" alt="Logo Images"/>
													{/* <img className="logo-1 logo-rounded" src="/assets/images/logo/logo-vht-rounded2.png" alt="Logo Images"/> */}
											</a>
									</div>
							</div>
							<div className="header-right">
									<nav className="mainmenunav d-lg-block">
											<Scrollspy className="mainmenu" items={['home','service','getstart','about','team','testimonial','portfolio']} currentClassName="is-current" offset={-200}>
													<li><a href="#home">Inicio</a></li>
													<li><a href="#service">Serviços</a></li>
													<li><a href="#about">Sobre</a></li>
													<li><a href="#contact">Contato</a></li>
											</Scrollspy>
									</nav>
								 
									{/* Start Humberger Menu  */}
									<div className="humberger-menu d-block d-lg-none pl--20">
											<span onClick={menuTrigger} className="menutrigger text-white"><FiMenu /></span>
									</div>
									{/* End Humberger Menu  */}
									<div className="close-menu d-block d-lg-none">
											<span onClick={closeMenuTrigger} className="closeTrigger"><FiX /></span>
									</div>
							</div>
					</div>
			</header>
		</>
	);

}

export default Header;