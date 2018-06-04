import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app')

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>OK</button>
    </Modal>
);

export default OptionModal;