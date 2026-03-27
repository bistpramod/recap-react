// Import the Chai type from the types file (which is one folder up, in the src folder)
// This type defines what a Chai object looks like (id, name, price)
import type { Chai } from "../types";

// Import the Card component from the same folder (components)
// We'll use this to display each chai item
import { Card } from "./Card";

interface ChaiListProps {
  items: Chai[];
}

export function List({ items }: ChaiListProps) {
  return (
    <div>
      {items.map((chai) => (
        <Card key={chai.id} name={chai.name} price={chai.price} />
      ))}
    </div>
  );
}
