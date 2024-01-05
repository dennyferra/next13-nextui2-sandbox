"use client";

import { Button, Input } from "@nextui-org/react";
import { ColorPicker } from "./ColorPicker";

export function Form() {
  return (
    <div className="flex flex-col gap-4">
      <Input
        isRequired
        type="email"
        label="Email"
        defaultValue="hello@word.com"
        className="max-w-full"
      />

      <Input type="text" label="O Hai Mark" className="max-w-full" />

      <ColorPicker />

      <Button color="primary">Submit</Button>
    </div>
  );
}
