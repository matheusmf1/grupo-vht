import React, { Component } from "react";
import ContactForm from "./ContactForm";
import './contact.css';

class Contact extends Component{
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	render(){
		return(
			<React.Fragment>          
				<div className="container__contact contact-form--1" id="contato">
					<div className="container">
						
						<h2 className="title container__contact--title">Entre em Contato</h2>

						<div className="row row--35 align-items-start">
							<div className="col-lg-6 order-2 order-lg-1">
								<div className="mb--30">
									<p className="description">
										Este é um canal exclusivo de atendimento para nossos Clientes.
										Envie suas dúvidas, sugestões ou reclamações.
									</p>
								</div>

								<div className="form-wrapper">
									<ContactForm/>
								</div>

							</div>

							<div className="col-lg-6 order-1 order-lg-2">
								<img src="/assets/images/contato2.jpeg" alt="vht-contato"/>
							</div>

						</div>
					</div>

				</div>
			</React.Fragment>
		);
	}
}
export default Contact