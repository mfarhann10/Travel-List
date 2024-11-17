function Form() {
  return (
    <div className="bg-orange-400 py-6 px-8 flex justify-center items-center gap-4 rounded-lg shadow-lg mx-4">
      <h3 className="text-xl md:text-2xl text-white font-semibold">
        What do you need for your trip?
      </h3>
      <input
        type="text"
        placeholder="Enter items..."
        className="flex-1 px-4 py-2 text-gray-800 rounded-full border border-orange-300 shadow-inner focus:ring-2 focus:ring-orange-500"
      />
      <button className="px-6 py-2 bg-green-500 text-white font-bold text-sm uppercase rounded-full shadow-lg hover:bg-green-600 transition-all">
        Add
      </button>
    </div>
  );
}

export default Form;
