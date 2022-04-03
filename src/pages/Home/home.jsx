import React, { Component , Fragment } from "react";
import { StartSlider } from "../../component/startSlider/StartSlider";
import ServiceList from "../../component/services/ServiceList";
import Header from "../../component/header/Header";
import Service from "../../component/services/Service";


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
				
      </Fragment>
    );
  }
}

export default Home;