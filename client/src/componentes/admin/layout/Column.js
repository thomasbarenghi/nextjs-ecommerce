export default function Column (props) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            {props.children}
        </div>
    );
}