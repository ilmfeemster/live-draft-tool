import { connectToDatabase } from '../util/mongodb';

export default function Players({ players }) {
  return (
    <div>
      <h1>Top 20 Players of This Season</h1>
      <p>
        <small>(According to BeerSheets)</small>
      </p>
      <ul>
        {players.map(player => (
          <li>
            <h2>{player.Name}</h2>
            <h3>{player.Average}</h3>
            <p>{player.Pos}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const players = await db.collection('players').find({}).limit(20).toArray();

  return {
    props: {
      players: JSON.parse(JSON.stringify(players)),
    },
  };
}
