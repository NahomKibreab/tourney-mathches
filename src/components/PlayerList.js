import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";
import Player from "./Player";

function PlayerList(props) {
  const { matchData, playerData } = props;
  const preparedPlayerData = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(preparedPlayerData, matchData);
  const parsedPlayers = parsedPlayerData.map((player) => (
    <Player key={player.gamerTag} {...player} />
  ));

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {parsedPlayers}
    </section>
  );
}
export default PlayerList;
