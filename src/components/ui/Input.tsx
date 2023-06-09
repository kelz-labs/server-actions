"use client";

import { TextInput } from "flowbite-react";

export function Input({ name }: { name: string }) {
  return <TextInput name={name} required />;
}
