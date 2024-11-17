function Stats() {
  return (
    <footer className="bg-green-500 text-white text-center py-6 rounded-lg shadow-lg mx-4">
      <em className="text-lg font-semibold">
        You have <span className="text-yellow-300">X</span> items on your list,
        and you already packed <span className="text-yellow-300">X</span>(
        <span className="text-yellow-300">X%</span>)
      </em>
    </footer>
  );
}

export default Stats;
