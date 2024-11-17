import initialItems from "../data/initialItems";
import Item from "./Items";

function PackingList() {
  return (
    <div className="bg-brown-700 text-yellow-100 py-8 px-6 rounded-lg shadow-lg mx-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
        {initialItems.map((item) => (
          <Item key={item.id} itemObj={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
