
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo , setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
   } , []);

 const fetchMenu = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=425&catalog_qa=undefined&submitAction=ENTER"
  );
  const json = await data.json();

  console.log(json);  
  setResInfo(json.data); 
 };
 if (!resInfo ) 
    <Shimmer />
  
 const { name, cuisines, costForTwoMessage } =
   resInfo?.cards[2]?.card?.card?.info;

 const{itemCards} = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item.card.info.name} -{" "}
            {item.card.info.price / 100 || item.card.info.dafaultprice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;