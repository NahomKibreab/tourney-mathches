import Player from "./Player";
function PlayerList() {
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {/* Players will be shown here */}
      <Player />
    </section>
  );
}

export default PlayerList;
