import React , {useState} from 'react';
// import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}
function ContactForm({props}) {
    const [ result,showresult ] = useState(false);

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs
    //     .sendForm(
    //         'service_p4x3hv8', 
    //         'template_jgfr42f', 
    //         e.target, 
    //         'user_jrfTH2e0Ely35ZCVFdT9S'
    //     )
    //     .then((result) => {
    //         console.log(result.text);
    //         }, 
    //         (error) => {
    //             console.log(error.text);
    //         }
    //     );
    //     e.target.reset();
    //     showresult(true);
    // };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        // <form action="" onSubmit={sendEmail}>
        <form action="">
            <div className="rn-form-group">
                <input 
                type="text"
                name="fullname"
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
