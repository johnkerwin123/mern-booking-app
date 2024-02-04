import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-config"; 
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {
  const { register, formState: { errors }} = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl font-medium mb-5">Facilities</h2>
      <div className="grid grid-cols-3 gap-3">
        {hotelFacilities.map((facility)=>(
          <label className="text-sm flex gap-2 text-gray-700">
            <input type="checkbox" value={facility} {...register("facilities", {
              validate: (facilities) => {
                if (facilities && facilities.length > 0) {
                  return true;
                } else {
                  return "Atleast one facility is required";
                }
              },
            })}
            />
            {facility}
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-red-500 text-sm font-medium">{errors.facilities.message}</span>
      )}
    </div>
  )
};

export default FacilitiesSection;