
import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class TeamMember extends React.Component{
    render(){
        return(
            <div styles={{height:100,maxHeight:500}}>
            <Carousel  >
                <div styles={{maxHeight:100}}>
                    <img src="assets/startup.jpeg" alt="startup"  styles={{maxHeight:100,height: 100,width:50}} />
                    <p className="legend">Legend 1</p>
                </div>
                <div styles={{maxHeight:100}}>
                    <img src="./assets/startup.jpeg" alt="e"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div styles={{maxHeight:100}}>
                    <img src="./assets/startup.jpeg" alt="description"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        )
    }
}
export default TeamMember;