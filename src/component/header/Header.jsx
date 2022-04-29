import { React, useEffect } from "react";
import Scrollspy from 'react-scrollspy';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";

const Header = () => {

	const menuTrigger = () => {
		document.querySelector('.header-wrapper').classList.toggle('menu-open');
	}

	const closeMenuTrigger = () => {
		document.querySelector('.header-wrapper').classList.remove('menu-open');
	}

	useEffect( () => {
		
		window.addEventListener('scroll', function() {
			let value = window.scrollY;
			if (value > 50) {
				document.querySelector('.header--fixed').classList.add('sticky')
			}
			else {
				document.querySelector('.header--fixed').classList.remove('sticky')
			}
		});
	
		let elements = document.querySelectorAll('.has-droupdown > a');
		for( var i in elements ) {
			if(elements.hasOwnProperty(i)) {
				elements[i].onclick = function() {
					this.parentElement.querySelector('.submenu').classList.toggle("active");
					this.classList.toggle("open");
				}
			}
		}

	},[] );


	return(
		<>
			<header className="header-area formobile-menu header--fixed default-color">
					<div className="header-wrapper" id="header-wrapper">
							<div className="header-left">
									<div className="logo">
											<a href="/">
													<img className="logo-1 logo-retangular" src="/assets/images/logo-vht-horizontal-branco.png" alt="Logo Images"/>
													<img className="logo-2" src="/assets/images/logo-vht-horizontal-preto.png" alt="Logo Images"/>
											</a>
									</div>
							</div>

							<div className="header-right">
								<nav className="mainmenunav d-lg-block">
									<Scrollspy className="mainmenu" items={['inicio','servicos','sobre','contato']} currentClassName="is-current" offset={-200}>
											<li><a href="#inicio">Inicio</a></li>
											<li><a href="#servicos">Serviços</a></li>
											<li><a href="#sobre">Sobre</a></li>
											<li><a href="#contato">Contato</a></li>
									</Scrollspy>
								</nav>
								 
								{/* Start Humberger Menu  */}
								<div className="humberger-menu d-block d-lg-none pl--20">
									<span onClick={menuTrigger} className="menutrigger text-white"><FiMenu/></span>
								</div>

								{/* End Humberger Menu  */}
								<div className="close-menu d-block d-lg-none">
									<span onClick={closeMenuTrigger} className="closeTrigger"><FiX/></span>
								</div>
							</div>

					</div>
			</header>
		</>
	);
}

export default Header;