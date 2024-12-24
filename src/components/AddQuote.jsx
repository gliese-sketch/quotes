import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function AddQuote() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input type="text" placeholder="Add a Quote" className="mb-2" />

      <div className="flex gap-2">
        <Button onClick={() => console.log("Add button")}>Add</Button>
        <Button onClick={() => console.log("Sort button")}>Sort</Button>
      </div>
    </form>
  );
}

export default AddQuote;
