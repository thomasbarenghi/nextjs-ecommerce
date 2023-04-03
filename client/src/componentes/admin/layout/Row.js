export default function Row({ children, className, style }) {
  return (
    <div className={`flex flex-row ${className}`} 
    style={style}
    >
      {children}
    </div>
  );
}