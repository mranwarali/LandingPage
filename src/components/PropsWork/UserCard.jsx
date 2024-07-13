const UserCard = (props)=>{
    return (
        <>
            <div className="card text-center bg-dark text-light">
                <div className="card-body border border-light">
                    <h4> {props.uname} </h4>
                </div>
            </div>
        </>
    )
}

export default  UserCard