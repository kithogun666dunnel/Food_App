import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
// const [listOfRestaurant, setListOfRestaurant] = useState();

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  useEffect( () => {
    fetchData()
  }, []);



  const fetchData = async() => {

   const data = await fetch(
     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
   ); 

   const  json = await data.json();

   console.log(json);
  };




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


// how do we bypass it ?
// we can use a proxy server to bypass the cors policy
// extension
