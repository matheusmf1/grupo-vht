import React, {useState} from 'react';

const Result = () => {
	return (
		<p className="success-message">Sua mensagem foi enviada com sucesso. Logo mais, entraremos em contato. Grupo VHT agradece.</p>
	);
}

const Error = () => {
	return (
		<p className="error-message">Houve um erro, por favor tente novamente.</p>
	);
}

function ContactForm({props}) {
	
	const [ result, showresult ] = useState(false);
	const [ error, showerror ] = useState(false);

	const sendEmailGrid = async ( e ) => {

		e.preventDefault();

		const formData = {};

		Array.from( e.target.elements ).forEach( field => {

			if ( !field.name ) return;
			formData[ field.name ] = field.value;
		});
		
		await fetch( 'https://4fz0iyonpe.execute-api.us-east-1.amazonaws.com/dev/email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify( formData )
		})
		.then( res => res.json() )
		.then( data => {

			e.target.reset();
			showresult(true);
			showerror(false);
		})
		.catch( error => {
			console.error( error );
			showerror(true);
		} );

	}

		setTimeout(() => {
			showresult(false);
			// showerror(false);
		}, 5000);

  return (
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
				{error ? <Error /> : null}
			</div>
    </form>
  )
}

export default ContactForm;