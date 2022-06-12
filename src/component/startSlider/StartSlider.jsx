import { React, useEffect } from "react";

export const StartSlider = () => {

  const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'VHT Serviços e Sistemas',
        buttonText: 'Entre em contato',
        buttonLink: '#contato'
    }
  ]

  useEffect( () => {

    let textWrapper = document.querySelector('.title');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    window.anime.timeline({loop: false})
    .add(
      {
        targets: '.title .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 900,
        delay: (el, i) => 100*i
      })
      
  }, []);
  
  return(
    <>
      <div className="slider-activation slider-creative-agency" id="inicio">
        <div className="bg_image" data-black-overlay="2" style={ {"backgroundImage": `url( '/assets/images/leao-juda.jpg' )` } }>
          { SlideList.map((value , index) => (
              <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <div className={`test inner ${value.textPosition}`}>
                                  {value.category ? <span>{value.category}</span> : ''}
                                  {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                  {/* {value.title ? <h1 className="ml2">{value.title}</h1> : ''} */}
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