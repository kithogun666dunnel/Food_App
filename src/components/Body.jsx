import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
// const [listOfRestaurant, setListOfRestaurant] = useState();

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(resList);


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           
             const filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

