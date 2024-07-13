const UserRow = (props) => {
  return (
    <>
      <tr>
        <td> {props.data.id} </td>
        <td>{props.data.first_name}</td>
        <td> {props.data.last_name} </td>
        <td> {props.data.email} </td>
        <td> <img src={props.data.avatar} alt="" /> </td>
      </tr>
    </>
  );
};

export default UserRow;
