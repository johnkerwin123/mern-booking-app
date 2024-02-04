import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );
    
  if (!hotelData) {
    return <span>No Hotels found</span>;
  }

  return (
    <div className="space-y-5 p-12">
      <span className="flex justify-between">
        <h1 className="text-3xl font-medium">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="flex bg-gray-800 text-white text-lg font-medium px-3 py-1 rounded-sm hover:text-orange-400"
        >
          Add Hotel
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {hotelData.map((hotel) => (
          <div
            data-testid="hotel-card"
            className="flex flex-col justify-between border bg-gray-500 border-gray-300 rounded-lg p-8 gap-5"
          >
            <h2 className="text-xl font-medium border-b-2 border-gray-300 pb-2">{hotel.name}</h2>
            <div className="whitespace-pre-line">{hotel.description}</div>
            <div className="flex flex-row gap-3">
              <div className="flex-row border border-gray-300 rounded-sm p-3 bg-gray-800 text-orange-400 flex items-center">
                <BsMap className="mr-1" />
                {hotel.city}, {hotel.country}
              </div>
              <div className="border border-gray-300 rounded-sm p-3 bg-gray-800 text-orange-400 flex items-center">
                <BsBuilding className="mr-1" />
                {hotel.type}
              </div>
              <div className="border border-gray-300 rounded-sm p-3 bg-gray-800 text-orange-400 flex items-center">
                <BiMoney className="mr-1" />£{hotel.pricePerNight} per night
              </div>
              <div className="border border-gray-300 rounded-sm p-3 bg-gray-800 text-orange-400 flex items-center">
                <BiHotel className="mr-1" />
                {hotel.adultCount} adults, {hotel.childCount} children
              </div>
              <div className="border border-gray-300 rounded-sm p-3 bg-gray-800 text-orange-400 flex items-center">
                <BiStar className="mr-1" />
                {hotel.starRating} Star Rating
              </div>
            </div>
            <span className="flex justify-end">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="flex bg-gray-800 text-white text-md font-medium px-3 py-1 rounded-sm hover:text-orange-400"
              >
                View Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;