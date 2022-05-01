import React from 'react';
import { FiCast , FiLayers , FiUsers ,FiChevronUp, FiCheck } from "react-icons/fi";

export default function About() {

	var namesItemOne = [
		'The Philosophy Of business analytics',
		'Fast-Track Your business',
		'Lies And Damn Lies About business',
		'The Ultimate Deal On business',
	];

	var namesItemTwo = [
		'Proof That business Really Works',
		'Here Is What You Should Do For Your business',
		'The Hidden Mystery Behind business',
	];

  return (
    <div className="rn-about-area ptb--120 container__about" id="sobre">
      <div className="container">

        <div className="row row--35 align-items-center">

          <div className="col-lg-6 order-2 order-lg-1">
						<div className="about-inner inner">

							<div className="section-title">
								<h2 className="title">Sobre a VHT</h2>
									
									<p className="description">
										O grupo VHT, fundado em Março de 2007, se consolidou no desenvolvimento de soluções personais e 
										corporativas dentro dos mais variados nichos dos segmentos arquitetônicos, administrativos e 
										na gestão de politicas publicas.
									</p>
									
									<p className="description">
										Nossa atuação se faz presente em todas as etapas da conquista imobiliária de nossos clientes e 
										parceiros, iniciando na concessão primária, desenvolvimento de projetos estruturação tecnológica de 
										automação e até mesmo na gestão de pessoas, com disponibilização de facilites habitacionais, 
										corporativos e governamentais
									</p>

							</div>

							{/* <div className="mt--30">
								<h4>Lista de serviços.</h4>
								<ul className="list-style--1">
										{namesItemOne.map((name, index) => {
												return <li key={ index }><FiCheck /> {name}</li>;
										})}
								</ul>
							</div>

							<div className="mt--30">
								<h4>Lorem ipsum dolor sit.</h4>
								<ul className="list-style--1">
									{namesItemTwo.map((name, index) => {
										return <li key={ index }><FiCheck /> {name}</li>;
									})}
								</ul>
							</div> */}

						</div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
						<div className="thumbnail position-relative">
							<img className="w-100" src="/assets/images/vht1.png" alt="VHT"/>
							{/* <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
							<button className="video-popup position-top-center theme-color" onClick={this.openModal}><span className="play-icon"></span></button> */}
						</div>
          </div>

        </div>
        
      </div>
    </div>
  );
}