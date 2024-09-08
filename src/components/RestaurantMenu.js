import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
 // Correctly destructure resId from useParams
  
  const { resId } = useParams();
 
   const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[2].card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <p className="text-lg mb-4">
        {cuisines ? cuisines.join(", ") : "Cuisines not available"} -{" "}
        {costForTwoMessage || "Cost information not available"}
      </p>
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <ul className="space-y-2">
        {itemCards.length > 0 ? (
          itemCards.map((res, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-200 ease-in-out"
            >
              {res.card.info.name}
            </li>
          ))
        ) : (
          <li className="text-gray-500 italic">No menu items available</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
