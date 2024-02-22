
import './App.css'
import { useEffect, useReducer, useState } from 'react'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import { Contact } from './components/reducer/contactReducer'
import EditModal from './components/EditModal'
import { contactReducer, State } from './components/reducer/contactReducer'


const initialState: State = {
  contacts: []
}


function App() {

  //reudcer
  const [state, dispatch] = useReducer(contactReducer, initialState)

  //modal
  const [showModal, setShowModal] = useState(false)


  const [dataToEdit, setDataToEdit] = useState<Contact | undefined>(undefined);

  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined)
    }

  }, [showModal])

  const toggleModal = () => {
    setShowModal((show) => !show)
  }

  const handleEdit = (id: number) => {
    setDataToEdit(state.contacts.find((contact) => contact.id === id))
    toggleModal()
  }


  return (
    <div className='Container'>
      <Header />
      <ContactForm dispatch={dispatch} dataToEdit={dataToEdit} toggleModal={toggleModal} />
      <hr />
      {state.contacts.length > 0 && <ContactList contacts={state.contacts} handleEdit={handleEdit} dispatch={dispatch} />}
      <EditModal
        showModal={showModal}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
        dispatch={dispatch}
      />
    </div>
  )
}

export default App
