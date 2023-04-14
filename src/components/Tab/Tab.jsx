const Tab = data => {
  console.log(data);
  return (
    <div>
      <table>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Sum</th>
        </tr>
        {data.map(el => (
          <tr>
            <th>{el.date}</th>
            <th>{el.type}</th>
            <th>{el.category}</th>
            <th>{el.comment}</th>
            <th>{el.sum}</th>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Tab;
