import { useState } from "react";

export default function Checkbox({ name, label, value, onChange }) {

console.log("name", name);

  return (
    <div className="flex flex-row items-center justify-center gap-2 align-middle">
      <input
        type="checkbox"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
