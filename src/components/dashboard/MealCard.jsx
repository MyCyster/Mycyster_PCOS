import { GoCheckCircle } from "react-icons/go";
import PropTypes from "prop-types";

export const MealCard = ({
  image,
  mealName,
  mealType,
  calories,
  protein,
  fats,
  carbohydrates,
}) => {
  return (
    <div>
      <h2 className="font-medium mb-2">{mealType}</h2>
      <div className="border border-gray-300 rounded-xl space-y-3 pb-4">
        <div className="h-52 w-80 overflow-hidden">
          {image && image.src && (
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover"
            />
          )}
        </div>

        <div className="px-2">
          <div className="flex gap-x-4 font-normal text-xs my-4">
            <div className="flex bg-[#FEEBC4] items-center gap-x-2 px-2 py-1 rounded-xl">
              <GoCheckCircle fill="#CD8A04" />
              <span className=" text-[#CD8A04] text-sm"> {calories}</span>
            </div>
          </div>

          <p className="text-[#000000] font-inter text-lg font-medium my-2">
            {mealName}
          </p>

          <div className="gap-y-3 font-manrope font-normal text-base text-[#000000]">
            <p>{protein}</p>
            <p>{fats}</p>
            <p>{carbohydrates}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

MealCard.propTypes = {
  image: PropTypes.object,
  mealName: PropTypes.string,
  mealType: PropTypes.string,
  calories: PropTypes.string,
  protein: PropTypes.string,
  fats: PropTypes.string,
  carbohydrates: PropTypes.string,
};
