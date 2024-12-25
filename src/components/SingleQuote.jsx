import { ThumbsUp, ThumbsDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

function SingleQuote() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">I am a quote</CardTitle>
        <CardDescription>Total Likes: 0</CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2">
        <Button variant="outline">
          <ThumbsUp />
        </Button>
        <Button variant="outline">
          <ThumbsDown />
        </Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default SingleQuote;
