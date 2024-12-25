import SingleQuote from "./SingleQuote";

function ListQuotes() {
  return (
    <div className="flex flex-col gap-2">
      <SingleQuote />
      <SingleQuote />
      <SingleQuote />
      <SingleQuote />
    </div>
  );
}

export default ListQuotes;
