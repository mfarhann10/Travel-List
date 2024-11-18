/* eslint-disable react/prop-types */
function Item({ itemObj, onDeleteItem, onToggleItem }) {
  return (
    <li className="flex items-center justify-between gap-3 bg-brown-800 p-4 rounded-lg shadow-lg">
      <input
        type="checkbox"
        className="h-5 w-5 accent-orange-400"
        value={itemObj.packed}
        onClick={() => onToggleItem(itemObj.id)}
      />
      <span
        className="flex-1 text-amber-700"
        style={itemObj.packed ? { textDecoration: "line-through" } : {}}
      >
        {itemObj.quantity} {itemObj.description}
      </span>
      <button
        className="text-lg text-red-400 hover:text-red-600 transition-all"
        onClick={() => onDeleteItem(itemObj.id)}
      >
        ✕
      </button>
    </li>
  );
}

export default Item;
