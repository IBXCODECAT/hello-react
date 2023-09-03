const Profile = (props) =>
{
    console.log(props);
    
    // Destructure props
    const { fname, lname } = props;

    // This will not work, props are read-only
    //props.fname = "Modified Name";

    return (
        <h1>
            Name: {fname} {lname}
            {props.children}
        </h1>
    )
}

export default Profile;