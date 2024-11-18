/* eslint-disable react/prop-types */
function Stats({ items }) {
  const footer =
    "bg-green-500 text-white text-center py-6 rounded-lg shadow-lg mx-4";

  if (!items.length)
    return (
      <p className={footer}>
        <em className="text-lg font-semibold text-white">
          Start adding some items to your packing list 🚀
        </em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numTotalPercent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className={footer}>
      <em className="text-lg font-semibold text-white">
        {numTotalPercent == 100
          ? "You've got everything! Ready to Go ✈️"
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked} (${numTotalPercent})%`}
      </em>
    </footer>
  );
}

export default Stats;
