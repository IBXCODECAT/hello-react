import { Component } from 'react';

// Create a component named Message
class Message extends Component
{
    // Render the component
    render()
    {
        // Return JSX
        return <h2>Props: {this.props.messagecontent}</h2>;
    }
}

// Export the component so that it can be used in other components
export default Message;