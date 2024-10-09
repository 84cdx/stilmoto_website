import React from "react";
import { Categories } from "@/public/data/mockData";
import { IoIosArrowForward } from "react-icons/io";

const CategoryList = () => {
  if (!Categories || Categories.length === 0) {
    return <div>Keine Kategorien verfügbar.</div>;
  }

  return (
    <div className="md:w-full border rounded-2xl">
      <div>
        <div className="bg-custom-red text-white text-sm font-bold rounded-t-2xl px-2.5 py-2.5">Categories</div>
        <ul>
          {Categories.map((category, index) => (
            <li key={index} className="flex cursor-pointer space-x-2 items-center justify-between hover:bg-gray-100 px-2.5 py-2.5">
              {category}
              <IoIosArrowForward />
            </li>
          ))}
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default CategoryList;
