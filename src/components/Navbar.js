const Navbar = (props)=>{
    let dp="",name=""
    if(props.data){
        name=props.data.name
        dp=props.data.dp
    }
    return(
        <>
        <div className="navbar">
        <h2 style={{margin: "0rem 0rem 0rem 1.8rem"}}>Edvora</h2>
                <div className="user_details">
                    <h3>{name}</h3>
                    <img src={dp} alt="User Photo" className="user_profile_photo" />
                </div>

        </div>
        </>
    )
}
export default Navbar