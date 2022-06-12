import React, { Component , Fragment } from "react";
import { StartSlider } from "../../component/startSlider/StartSlider";
import Header from "../../component/header/Header";
import Service from "../../component/services/Service";
import Contact from "../../component/contact/Contact";
import About from "../../component/about/About";
import Footer from "../../component/footer/Footer";
import SEO from "../../component/seo/SEO";

class Home extends Component {
	
	constructor( props ) {
    super( props );
  }


  render() {
		
		return(
      <Fragment>

        <SEO/>

				<Header/>

				<StartSlider/>

				<Service/>

        <About/>

        <Contact/>

        <Footer/>
				
      </Fragment>
    );
  }
}

export default Home;