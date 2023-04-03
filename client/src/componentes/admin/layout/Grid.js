export default function Grid({ children, className, ...props }) {
    return (
        <div className={`grid ${className}`} {...props}>
        {children}
        </div>
    );
    }