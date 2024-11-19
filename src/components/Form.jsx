import { useState } from "react";
/* eslint-disable react/prop-types */
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form
      className="bg-orange-400 py-6 px-8 flex flex-wrap justify-center items-center gap-6 rounded-lg shadow-lg mx-4"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl md:text-2xl text-white font-semibold text-center w-full md:w-auto">
        What do you need for your trip?
      </h3>

      <div className="flex items-center gap-4 w-full md:w-auto">
        <select
          className="px-4 py-2 bg-orange-100 text-gray-800 rounded-full border border-orange-300 shadow-inner focus:ring-2 focus:ring-orange-500"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num} id={quantity}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Enter items..."
          id={description}
          className="flex-1 px-4 py-2 bg-orange-100 text-gray-800 rounded-full border border-orange-300 shadow-inner focus:ring-2 focus:ring-orange-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className="px-6 py-2 bg-green-500 text-white font-bold text-sm uppercase rounded-full shadow-lg hover:bg-green-600 transition-all">
        Add
      </button>
    </form>
  );
}

export default Form;
