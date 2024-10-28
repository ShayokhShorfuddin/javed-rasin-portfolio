import { Button } from "@/components/ui/button";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Strikethrough,
  Underline,
} from "lucide-react";

export default function Tools() {
  return (
    <div className="bg-gray-100">
      <Button className="hover:bg-gray-200" variant="ghost" size="icon">
        <Bold />
      </Button>

      <Button className="hover:bg-gray-200" variant="ghost" size="icon">
        <Italic />
      </Button>

      <Button className="hover:bg-gray-200" variant="ghost" size="icon">
        <Underline />
      </Button>

      <Button className="hover:bg-gray-200" variant="ghost" size="icon">
        <Strikethrough />
      </Button>

      <Button className="hover:bg-gray-200" variant="ghost" size="icon">
        <AlignLeft />
      </Button>

      <Button className="hover:bg-gray-200" variant="ghost" size="icon">
        <AlignCenter />
      </Button>

      <Button className="hover:bg-gray-200" variant="ghost" size="icon">
        <AlignRight />
      </Button>

      <Button className="hover:bg-gray-200" variant="ghost" size="icon">
        <AlignJustify />
      </Button>
    </div>
  );
}
