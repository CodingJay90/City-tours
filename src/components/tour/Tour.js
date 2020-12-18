import React, {useState} from "react";
import "./Tour.css";

const Tour = ({ tour: { city, id, name, img }, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt="img" width="250" />
        <span className="close-btn" onClick={() => removeTour(id)}>
          <i className="fas fa-window-close" />
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span onClick={() => setShowInfo(!showInfo)}>
            {/* <i className="fas fa-caret-square-down" /> */}
            <i className="fas fa-window-close" />
          </span>
        </h5>
        {showInfo && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
            laborum distinctio neque.
          </p>
        )}
      </div>
    </article>
  );
};

export default Tour;
