const FuncEvent = () => {

    const handleClick = () => {
        alert("Button Clicked!");
        console.log("Button Clicked!");
    }

    //Functional Component, Do not use partentheses for the onClick event
    return (
        <div>
            Functional Component
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default FuncEvent;