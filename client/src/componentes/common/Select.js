export default function Select({ options, onChange, value, name }) {
  return (
    <label
      htmlFor={name}
      className="flex w-full flex-col gap-2 font-britanicaBold text-sm"
    >
      {name}
      <select
        className="h-full rounded-xl border-violet-200 bg-violet-100 px-4 py-1 text-violet-800 placeholder:text-violet-800 "
        style={{ borderWidth: "1px" }}
        onChange={onChange}
        value={value}
        name={name}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
