export default function TextArea(props) {
    return (
        <div className="input flex flex-col gap-2">
            <label htmlFor={props.name} className="font-britanicaBold text-sm" >{props.label}</label>
            <textarea
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                className="rounded-xl border-violet-200 bg-violet-100 px-4 py-1 text-violet-800 placeholder:text-violet-800"
                style={{ borderWidth: "1px" }}
            />
        </div>
    );
}