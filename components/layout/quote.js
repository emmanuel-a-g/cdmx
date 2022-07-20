import TextSlider from "../utils/textSlider";
function Quote() {
  let data = [
    "Productos",
    "Servicio",
    "Honestidad",
    "Calidad",
    "Respeto",
  ];

  return <TextSlider data={data} />;
}
export default Quote;
