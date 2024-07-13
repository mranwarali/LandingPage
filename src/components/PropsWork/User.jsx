import UserCard from "./UserCard";

const User = () => {
  const userNames = [
    "Govind",
    "Srikant",
    "Om Vinay",
    "Manish",
    "Deepak",
    "Anwar",
    "Vinod",
    "Sunil",
    "Vinay",
  ];

  return (
    <>
      <div className="container">
        <div className="row g-5">
          {/* To pass a single Data  */}
          {/* <div className="col-md-4">
                        <UserCard uname = {userNames[0]} />
                    </div> */}
          {userNames.map((val, index) => {
            return (
              <div className="col-md-4" key={index}>
                <UserCard uname={val} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default User;
