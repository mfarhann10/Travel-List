/* eslint-disable react/prop-types */
function Item({ itemObj }) {
  return (
    <li className="flex items-center justify-between gap-3 bg-brown-800 p-4 rounded-lg shadow-lg">
      <input type="checkbox" className="h-5 w-5 accent-orange-400" />
      <span
        className="flex-1 text-amber-700"
        style={itemObj.packed ? { textDecoration: "line-through" } : {}}
      >
        {itemObj.quantity} {itemObj.description}
      </span>
      <button className="text-lg text-red-400 hover:text-red-600 transition-all">
        ✕
      </button>
    </li>
  );
}

export default Item;
