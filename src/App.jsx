import { useReducer } from "react";
import AddQuote from "@/components/AddQuote";
import ListQuotes from "@/components/ListQuotes";

function App() {
  const quotesReducer = (state, action) => {
    switch (action.type) {
      case "add":
        // Create a new quote
        const quote = {
          title: action.payload,
          id: crypto.randomUUID(),
          likes: 0,
        };

        // Add to new state
        return [quote, ...state];
      case "delete":
      case "like":
      case "dislike":
      case "sort":
    }
  };

  const [quotes, dispatch] = useReducer(quotesReducer, [
    {
      id: 1,
      likes: 5,
      title: "Life is good!",
    },
    {
      id: 2,
      likes: 3,
      title: "Next.js is awesome!",
    },
  ]);

  const handleAddQuote = (title) => {
    dispatch({ type: "add", payload: title });
  };

  const handleDeleteQuote = (id) => {
    setQuotes((prevQuote) => prevQuote.filter((quote) => quote.id !== id));
  };

  const handleLikeQuote = (id) => {
    setQuotes((prevState) => {
      return prevState.map((quote) =>
        quote.id === id ? { ...quote, likes: quote.likes + 1 } : quote
      );
    });
  };

  const handleDislikeQuote = (id) => {
    setQuotes((prevState) => {
      return prevState.map((quote) =>
        quote.id === id ? { ...quote, likes: quote.likes - 1 } : quote
      );
    });
  };

  const handleSortQuotes = () => {
    setQuotes((prevState) => [...prevState].sort((a, b) => b.likes - a.likes));
  };

  return (
    <div className="max-w-96 mx-auto p-2">
      <h1 className="text-3xl text-center font-bold my-5">Quotes</h1>
      <AddQuote onSubmit={handleAddQuote} onSort={handleSortQuotes} />
      <ListQuotes
        quotes={quotes}
        onDelete={handleDeleteQuote}
        onLike={handleLikeQuote}
        onDislike={handleDislikeQuote}
      />
    </div>
  );
}

export default App;
