import { Link } from "react-router-dom";
import "./searchitem.css";

function SearchItem({ item }) {
  return (
    <div className="searchItem">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUm3tJgQ0VMZtla84TQOO_eXGxYxXguO2OA5Tb56L7WQ&s"
        alt=""
        className="siImg"
      />

      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studion Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today
        </span>
      </div>
      <div className="siDetails">
        {/* {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )} */}
        <div className="siDetailsTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
