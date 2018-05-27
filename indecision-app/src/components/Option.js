import React from 'react';

const Option = (props) => {
    return (
        <div>
            {props.description}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.description)
                }}
            >
                Remove
            </button>
        </div>
    );
};

export default Option;