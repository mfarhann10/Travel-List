import Item from "./Items";
/* eslint-disable react/prop-types */
function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="bg-brown-700 text-yellow-100 py-8 px-6 rounded-lg shadow-lg mx-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
        {items.map((item, index) => (
          <Item
            key={item.id}
            index={index}
            itemObj={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
