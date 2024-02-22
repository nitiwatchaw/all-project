import { FC } from 'react'
import { Contact, Action } from './reducer/contactReducer'
import ContactItem from './ContactItem';

interface ContactListProps {
    contacts: Contact[];
    handleEdit: (id: number) => void;
    dispatch: React.Dispatch<Action>

}

const ContactList: FC<ContactListProps> = ({ contacts, handleEdit, dispatch }) => {

    return (
        <div className='contacts-list'>
            <h3 className='contact-list-title'>List of Contacts</h3>
            <div className='contact-list-table-container'>
                <table className='contacts-list-table w-100'>
                    <thead className='contact-list-header'>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Phone</th>
                            <th>Edite</th>
                            <th>Delete</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {contacts.map((props) => (
                            <ContactItem key={props.id} {...props} handleEdit={handleEdit} dispatch={dispatch} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContactList