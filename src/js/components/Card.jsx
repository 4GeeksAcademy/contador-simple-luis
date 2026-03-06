import React from "react";
import "./Card.css";

function Card () {
  return (
    <div className="cards-content">
      <div className="row">

        <div className="col-3">
          <div className="card">
            <div className="photo">500 x 325</div>

            <div className="photo-feed">
              <h3>Card Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="footer">
                <button>Find Out More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card">
            <div className="photo">500 x 325</div>

            <div className="photo-feed">
              <h3>Card Title</h3>
              <p>
                Another example text for the second card.
              </p>

              <div className="footer">
                <button>Find Out More</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;
