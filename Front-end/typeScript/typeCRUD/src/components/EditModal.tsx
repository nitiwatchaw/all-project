import { FC } from 'react'
import { Modal } from 'react-bootstrap'
import { Action, Contact } from './reducer/contactReducer'
import ContactForm from './ContactForm'

interface EditeModalProps {
    showModal: boolean;
    dataToEdit: Contact | undefined; //2 type
    toggleModal: () => void
    dispatch: React.Dispatch<Action>
}

const EditModal: FC<EditeModalProps> = ({ toggleModal, dataToEdit, showModal, dispatch }) => {
    return (
        <Modal show={showModal} onHide={toggleModal} >

            <Modal.Header closeButton>
                <Modal.Title>Update Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ContactForm dispatch={dispatch} dataToEdit={dataToEdit} toggleModal={toggleModal} />
            </Modal.Body>
        </Modal>
    )
}

export default EditModal