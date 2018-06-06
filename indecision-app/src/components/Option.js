import React from 'react';

const Option = (props) => (
    <div>
    {props.description}
    <button 
        className="button button--link"
        onClick={(e) => {
            props.handleDeleteOption(props.description)
        }}
    >
        Remove
    </button>
</div>
)

export default Option;