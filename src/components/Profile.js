const Profile = (props) =>
{
    console.log(props);
    
    // This will not work, props are read-only
    //props.fname = "Modified Name";

    return (
        <h1>
            Name: {props.fname} {props.lname}
            {props.children}
        </h1>
    )
}

export default Profile;