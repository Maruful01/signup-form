import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { UserContext } from '../../App';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

const UserDetails = ({ modalIsOpen, closeModal }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log (loggedInUser.name)
    Modal.setAppElement('#root');
    return (
        <div>
          <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
        >

          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
         <div>
            
         </div>
        </Modal>
        </div>
    );
};

export default UserDetails;