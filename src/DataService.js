// Funktion zum fetchen von Json Daten
const DataService = async () => {
  const zuruck = await fetch("http://localhost:3000/data.json")
        .then(res => res.json())
        .then((result) => {
          const data = {
            text: result.text,
            number: result.number,
            date: result.date,
          };
          return data;
        });
        return zuruck;
}
export default DataService