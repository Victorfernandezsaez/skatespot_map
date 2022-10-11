

function RandomSpots() {
    {
  let randomSpots = [{
    latlng: [51.06385440680908, 13.747256519230437],
    street:"Albert Platz, 01099 Dresden",
    name: "Albi"
  },
  {
      latlng: [51.06710519422941, 13.736075954254634],
      street:"Eisenbahnstraße 4-2, 01097 Dresden",
      name: "DIY"
    }];
  for (let i = 1; i <= total; i++) {
     randomSpots.push(i);
  }
  return (
    <>
        <span placeholder="text"></span>
        <button> get you spot(s)</button>
    </>
  );
}
}
export default RandomSpots