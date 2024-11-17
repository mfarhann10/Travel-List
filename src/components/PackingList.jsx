function PackingList() {
  return (
    <div className="bg-brown-700 text-yellow-100 py-8 px-6 rounded-lg shadow-lg mx-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
        {/* Example list item */}
        <li className="flex items-center justify-between gap-3 bg-brown-800 p-4 rounded-lg shadow-lg">
          <input type="checkbox" className="h-5 w-5 accent-orange-400" />
          <span className="flex-1 text-amber-700">Item Name</span>
          <button className="text-lg text-red-400 hover:text-red-600 transition-all">
            ✕
          </button>
        </li>
        {/* Add more list items dynamically */}
      </ul>
    </div>
  );
}

export default PackingList;
