
import React, { Component } from 'react';
import Card from './Card';

class ParentComponent extends Component {
  render() {
    return (
      <div className="card-container">
        <Card
          title="Mehta Flora Vol 71 Fancy  "
          img="card1-img.jpg"
          rate="$3.8"
          items="BUY +"
          sizes=" S M L  "

        />
        <Card
          title="Mumtaz Arts Muraad"
          img="card2-img.jpg"
          rate="$4.8"
          items="BUY +"
          sizes=" S M L "
        />
        <Card
          title="Al Naaz Muzlin"
          img="card3-img.jpg"
          rate="$3.9"
          items="BUY +"
          sizes=" S M L "

        />
        <Card
          title="Bipson Nimrit 1990 "
          img="card4-img.jpg"
          rate="$3.5"
          items="BUY +"
          sizes=" S M L "

        />

      </div>


    );

  }
}

export default ParentComponent;
