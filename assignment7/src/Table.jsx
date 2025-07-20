const Table = ({ teams }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>No</th>
          <th>Team</th>
          <th>Matches</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Tied</th>
          <th>NRR</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, i) => (
          <tr key={i}>
            <td>{team.No}</td>
            <td>{team.Team}</td>
            <td>{team.Matches}</td>
            <td>{team.Won}</td>
            <td>{team.Lost}</td>
            <td>{team.Tied}</td>
            <td>{team.NRR}</td>
            <td>{team.Points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;