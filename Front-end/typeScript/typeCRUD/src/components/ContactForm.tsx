import { FC, useState } from 'react'
import { Button, Form } from 'react-bootstrap'


// reducer
import { Action } from './reducer/contactReducer';
import { Contact } from './reducer/contactReducer';


interface ContactFormProps {
    dispatch: React.Dispatch<Action>;
    dataToEdit: Contact | undefined;
    toggleModal: () => void
}

const ContactForm: FC<ContactFormProps> = ({ dispatch, dataToEdit, toggleModal }) => {


    const [contact, setContact] = useState({
        firstName: dataToEdit?.firstName ? dataToEdit.firstName : "",
        lastName: dataToEdit?.lastName ? dataToEdit.lastName : "",
        phone: dataToEdit?.phone ? dataToEdit.phone : ""
    })


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setContact((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })

    }


    const [errorMsg, setErrorMsg] = useState("")


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { firstName, lastName, phone } = contact;

        if (firstName.trim() === '' || lastName.trim() === "" || phone.trim() === "") {
            setErrorMsg("All the fields are require.")
            return
        }
        else if (!phone.trim().match(/^\d{10}$/g)) {
            setErrorMsg("Please enter a valid 10 digit phone number")
            return
        }

        if (!dataToEdit) {
            dispatch({
                type: "ADD_CONTACT",
                payload: {
                    id: Date.now(),
                    ...contact
                }
            })
            setContact({
                firstName: "",
                lastName: "",
                phone: ""
            })

        } else {
            dispatch({
                type: "UPDATE_CONTACT",
                payload: {
                    id: dataToEdit.id,
                    updates: {
                        id: Date.now(),
                        ...contact
                    }
                }
            })

            toggleModal();
        }
    }

    return (
        <Form className='contact-form' onSubmit={handleSubmit} >
            {errorMsg && <p className='alert alert-danger'>{errorMsg}</p>}
            <Form.Group controlId="firstName"  >
                <Form.Label> FirstName  </Form.Label>
                <Form.Control className="firstName" name="firstName" value={contact.firstName} type="text" onChange={handleOnChange}>
                </Form.Control >

            </Form.Group>
            <Form.Group controlId="lastName">
                <Form.Label> LastName  </Form.Label>
                <Form.Control className="lastName" name="lastName" value={contact.lastName} type="text" onChange={handleOnChange}>
                </Form.Control >

            </Form.Group>
            <Form.Group controlId="phone">
                <Form.Label> Phone  </Form.Label>
                <Form.Control className="phone" name="phone" value={contact.phone} type="text" onChange={handleOnChange}>
                </Form.Control >

            </Form.Group>
            <Form.Group controlId='submit' className='mt-4'>
                <Button variant='primary' type='submit' className='submit'>
                    {dataToEdit ? "Update Contact" : "Add Contact"}
                </Button>
            </Form.Group>
        </Form>
    )
}

export default ContactForm