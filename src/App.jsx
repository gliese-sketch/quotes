import AddQuote from "@/components/AddQuote";
import ListQuotes from "@/components/ListQuotes";

function App() {
  return (
    <div className="max-w-96 mx-auto p-2">
      <h1 className="text-3xl text-center font-bold my-5">Quotes</h1>
      <AddQuote />
      <ListQuotes />
    </div>
  );
}

export default App;
