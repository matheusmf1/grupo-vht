import React, { Component , Fragment } from "react";
import { StartSlider } from "../../component/startSlider/StartSlider";
import Header from "../../component/header/Header";
import Service from "../../component/services/Service";
import Contact from "../../component/contact/Contact";
import About from "../../component/about/About";

class Home extends Component {
	
	constructor( props ) {
    super( props );
  }


  render() {
		
		return(
      <Fragment>

				<Header/>

				<StartSlider/>

				<Service/>

        <About/>

        <Contact/>
				
      </Fragment>
    );
  }
}

export default Home;