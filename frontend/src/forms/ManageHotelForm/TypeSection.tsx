import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
  const { register, watch, formState: { errors}, } = useFormContext<HotelFormData>();
  const typeWatch = watch("type");

  return (
    <div>
      <h2 className="text-2xl font-medium mb-5">Type of hotel</h2>
      <div className="grid grid-cols-5 gap-2">
          {hotelTypes.map((type) => (
            <label className={
              typeWatch === type 
              ? "cursor-pointer bg-blue-400 text-sm rounded-full items-center justify-center px-4 py-2 font-normal" 
              : "cursor-pointer bg-gray-400 text-sm rounded-full items-center px-4 py-2 font-normal"
            }>
              <input type="radio" value={type} {...register("type", {
                required: "This field is required",
               })}
               className="hidden"
              />
              <span className="ml-2">{type}</span>
            </label>
          ))}
      </div>
      {errors.type && (
          <span className="text-red-500 text-sm font-medium">{errors.type.message}</span>
      )}
    </div>
  )
};

export default TypeSection;