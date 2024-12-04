import useFetch from "../../hooks/useFetch";
import "./featuredproperties.css";

function FeaturedProperties() {
  const { data, loading, error } = useFetch("https://luxury-inn.vercel.app/api/hotels?featured=true&limit=4");
  console.log(data);

  return (
    <div className="fp">
      {loading ? (
        "loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                // src="https://media.istockphoto.com/id/184154680/photo/holiday-apartments-with-pools-at-dusk.webp?s=170667a&w=0&k=20&c=yl5cVNQgg22uezGQ_rLBqS-8RlGXKq30qVvHORYU4Ms="
                className="fpImage"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {/* {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )} */}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FeaturedProperties;
