import { useState } from "react";
import Item from "./Items";
/* eslint-disable react/prop-types */
function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="bg-brown-700 text-yellow-100 py-8 px-6 rounded-lg shadow-lg mx-4 flex flex-col justify-between">
      {/* List Items */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
        {sortedItems.map((item, index) => (
          <Item
            key={item.id}
            index={index}
            itemObj={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      {/* Dropdown placed at the center of the bottom */}
      <div className="mt-8 flex justify-center ">
        <select
          className="px-4 py-2 bg-yellow-200 text-amber-800 rounded-lg shadow-md font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-yellow-200 transition-all uppercase text-xs"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
      </div>
    </div>
  );
}

export default PackingList;
