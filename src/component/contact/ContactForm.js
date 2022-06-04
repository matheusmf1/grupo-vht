import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import mail from '@sendgrid/mail';

const Result = () => {
	return (
		<p className="success-message">Sua mensagem foi enviada com sucesso. Logo mais, entraremos em contato. Grupo VHT agradece.</p>
	);
}

function ContactForm({props}) {
	
	const [ result,showresult ] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
			
		emailjs.sendForm(
			process.env.REACT_APP_EMAILJS_SERVICE_ID,
			'template_test',
			e.target,
			process.env.REACT_APP_EMAILJS_API_KEY,
		)
		.then( (result) => {
			console.log(result.text)
		},
			(error) => {
				console.error(error.text);
			}
		);

		e.target.reset();
		showresult(true);
	};

	const sendEmailGrid = ( e ) => {

		e.preventDefault();

		const formData = {};

		Array.from( e.target.elements ).forEach( field => {

			if ( !field.name ) return;
			formData[ field.name ] = field.value;
		});

		mail.setApiKey( process.env.REACT_APP_SENDGRID_KEY );

		const emailMsg = `
			Olá VHT,
			
			Você possui uma solicitação de contato vinda do site.

			Segue a mensagem:

			Nome: ${formData.name}

			Email: ${formData.email}

			Telefone: ${formData.phone}

			${formData.message}
		`;

		const emailData = {
			to: formData.email,
			from: 'contato@grupovht.com', // Use the email address or domain you verified above
			subject: `[Contato - Site] - ${formData.subject}`,
			// text: emailMsg,
			html: emailMsg,
		};


		mail
		.send( emailData )
		.then( () => {}, error => {
			console.error(error);

			if (error.response) {
				console.error(error.response.body)
			}
  	});

	}

	setTimeout(() => {
			showresult(false);
	}, 5000);

  return (
		// <form onSubmit={sendEmail}>
		<form onSubmit={sendEmailGrid}>
			<div className="rn-form-group">
				<input
					type="text"
					name="name"
					placeholder="Seu Nome"
					required
				/>
			</div>

			<div className="rn-form-group">
				<input
					type="email"
					name="email"
					placeholder="Seu Email"
					required
				/>
			</div>

			<div className="rn-form-group">
				<input
					type="text"
					name="phone"
					placeholder="Número de Telefone"
					required
				/>
			</div>

			<div className="rn-form-group">
				<input
					type="text"
					name="subject"
					placeholder="Assunto do contato"
					required
				/>
			</div>

			<div className="rn-form-group">
				<textarea
					name="message"
					placeholder="Sua Mensagem"
					required
					>
				</textarea>
			</div>

			<div className="rn-form-group">
					{/* <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Enviar</button> */}
					<button className="rn-button-style--2 container__contact--sendBtn" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Enviar</button>
			</div>

			<div className="rn-form-group">
				{result ? <Result /> : null}
			</div>
    </form>
  )
}

export default ContactForm;