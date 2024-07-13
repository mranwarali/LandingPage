import { UserData } from "./userData"
import UserRow from "./UserRow"

const UserTable = ()=>{
    return (
        <>
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> First Name </th>
                        <th> Last Name  </th>
                        <th> Email </th>
                        <th> Profile </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        UserData.map((val)=>{
                            return (
                                <UserRow data = {val} />
                            )
                        })
                    }
                </tbody>            
                </table>
        </div>
        </>
    )
}

export default UserTable