import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestSection = () => {
  const { register , formState: { errors }} = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl font-medium mb-5">Guests</h2>
      <div className="grid grid-cols-2 p-6 gap-5 bg-gray-400 rounded-md">
        <label className="text-gray-700 text-sm font-medium">
            Adults
            <input 
              type="number" 
              min={1} 
              className="border rounded w-full py-2 px-3 font-normal" 
              {...register("adultCount", {
                required: "This field is required",
              })}
            />
             {errors.adultCount?.message && (
                  <span className="text-red-500 text-sm font-medium">
                    {errors.adultCount?.message}
                  </span>
              )}
        </label>
        <label className="text-gray-700 text-sm font-medium">
            Children
            <input 
              type="number" 
              min={0} 
              className="border rounded w-full py-2 px-3 font-normal" 
              {...register("childCount", {
                required: "This field is required",
              })}
            />
             {errors.childCount?.message && (
                  <span className="text-red-500 text-sm font-medium">
                    {errors.childCount?.message}
                  </span>
              )}
        </label>
      </div>
    </div>
  )
};

export default GuestSection;