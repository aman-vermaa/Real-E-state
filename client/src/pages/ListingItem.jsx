import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg w-full sm:w-[330px] border border-gray-200">
      <Link to={`/listing/${listing._id}`} className="block">
        {/* Image Section */}
        <div className="relative group">
          <img
            src={listing.imageUrls[0]}
            alt="listing cover"
            className="h-[200px] sm:h-[220px] w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
          />
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Title */}
          <p className="text-lg font-semibold text-gray-800 truncate hover:text-green-600 transition-colors duration-300">
            {listing.name}
          </p>

          {/* Address */}
          <div className="flex items-center gap-1 mt-2">
            <MdLocationOn className="h-5 w-5 text-green-500" />
            <p className="text-sm text-gray-600 truncate w-full">
              {listing.address}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {listing.description}
          </p>

          {/* Price */}
          <p className="text-green-600 font-semibold text-lg mt-2">
            ₹
            {listing.offer
              ? listing.discountedPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " /month"}
          </p>

          {/* Additional Details */}
          <div className="flex justify-between items-center text-gray-700 text-sm mt-4">
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{listing.bedrooms}</span>
              <span className="text-xs text-gray-500">
                {listing.bedrooms > 1 ? "Beds" : "Bed"}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{listing.bathrooms}</span>
              <span className="text-xs text-gray-500">
                {listing.bathrooms > 1 ? "Bathrooms" : "Bathroom"}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
