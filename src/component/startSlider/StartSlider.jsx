import React from "react";

export const StartSlider = () => {

  const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'VHT Serviços e Sistemas',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Entre em contato',
        buttonLink: '/contact'
    }
  ]

  return(
    <>
      <div className="slider-activation slider-creative-agency" id="home">
        <div className="bg_image" data-black-overlay="3" style={ {"backgroundImage": `url( '/assets/images/leao-juda.jpg' )` } }>
          { SlideList.map((value , index) => (
              <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <div className={`inner ${value.textPosition}`}>
                                  {value.category ? <span>{value.category}</span> : ''}
                                  {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                  {value.description ? <p className="description">{value.description}</p> : ''}
                                  {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </>
  );
}