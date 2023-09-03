const Profile = (props) =>
{
    console.log(props);
    return (
        <h1>
            Name: {props.fname} {props.lname}
            {props.children}
        </h1>
    )
}

export default Profile;