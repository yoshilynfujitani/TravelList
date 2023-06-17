export default function Stats({ itemLenght }) {
  if (!itemLenght.length)
    return (
      <p className="stats">Start adding some items to your packing list </p>
    );
  const numItems = itemLenght.length;
  const numpacked = itemLenght.filter((item) => item.packed).length;
  const percentage = Math.round((numpacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go!"
          : ` 💼 You have ${numItems} items on your list, and you already packed
          ${numpacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
