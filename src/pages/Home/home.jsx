import React, { Component , Fragment } from "react";


import { StartSlider } from "../../component/startSlider/StartSlider";
import Header from "../../component/header/Header"


class Home extends Component {

  constructor( props ) {
    super( props );
  }

  render() {

    return(
      <Fragment>
				{/* Start Header Area  */}
				<Header/>
				{/* End Header Area  */}

				{/* Start Slider Area   */}
				<StartSlider/>
				{/* End Slider Area   */}

      </Fragment>
    );
  }
}

export default Home;