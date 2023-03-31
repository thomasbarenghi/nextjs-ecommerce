export default function HeroBasic({ title, subtitle, textColor, bgColor }) {
  console.log(title, bgColor);
  return (
    <section className={`w-full ${bgColor}`}>
      <div
        className="seccion container flex flex-col items-center justify-center text-center align-middle lg:w-2/4"
        style={{ minHeight: "30vh" }}
      >
        <h1 className={`text-center font-britanicaBold ${textColor}`}>
          {title}
        </h1>
        <p className={`text-center ${textColor}`}>{subtitle}</p>
      </div>
    </section>
  );
}
