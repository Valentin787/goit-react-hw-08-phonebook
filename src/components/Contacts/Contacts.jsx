import { useEffect,useState,useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Loader from '../common/Loader';
import Modal from 'components/common/Modal';
import EditCard from 'components/common/EditCard';

import { getContacts, addContact, editContact, deleteContact } from 'redux/phoneBook/operation';

import { filterContacts } from 'redux/phoneBook/phoneBookActions';

import { authSelectors } from 'redux/auth';
import { contactsState, filterPhoneBook, loadingSelector } from '../../redux/phoneBook/phonebook-selectors';

import { ToastContainer,toast } from 'react-toastify/dist/react-toastify';
import "react-toastify/dist/ReactToastify.css";
import s from './Contacts.module.css'


const ACTION = {
  NONE: "none",
  EDIT: "edit",
  DELETE: "delete",
};


const Contacts = () => {

  const userToken = useSelector(authSelectors.getToken);
  const loading = useSelector(loadingSelector);
  const contactsBook = useSelector(contactsState);
  const filterValueName = useSelector(filterPhoneBook);
  const dispatch = useDispatch();

  
  const [newContact, setNewContact] = useState(null);
  const [activeContact, setActiveContact] = useState(null);
  const [deleteContactId, setDeleteContactId] = useState(null);

  const [openModal, setOpenModal] = useState(ACTION.NONE);
  const [action, setAction] = useState(ACTION.NONE);

  const [editModal, setEditModal] = useState(false);

  
 
  // OPEN MODAL
  const openEditModal = () => setEditModal(true);

  // CLOSE MODAL
  const closeEditModal = () => {
    setEditModal(false);
    setOpenModal(ACTION.NONE)
  };


  //GET_CONTACTS

  useEffect(() => {
    if (!userToken) return;
    
    dispatch(getContacts(userToken))
  }, [dispatch, userToken])

    //ADD_CONTACT
  const confirmContact = (contact) => setNewContact(contact);

  useEffect(() => {
    if (!newContact) return;
    const isHaveName = contactsBook.some(({ name }) => name === newContact.name);

    if (isHaveName) {
      toast.error(`Контакт з ${newContact.name} вже існує :((`, { icon: `❌` });
      setNewContact(null);
    }
    if (!isHaveName || !userToken) {

      dispatch(addContact(newContact));
      toast.success(`Контакт  ${newContact.name} добавлено до списку контактів :))`, {
        icon: `✅`
      });
      setNewContact(null);
    }
  }, [contactsBook, dispatch, newContact, userToken]);

  // EDIT CONTACT
  const onEditContact = (activeItem) => {
    setActiveContact(activeItem);
    setOpenModal(ACTION.EDIT)
   
  };
  
  const confirmEdit = (editedItem) => {
    if (editedItem.name === activeContact.name && editedItem.number === activeContact.number) {
     setOpenModal(ACTION.NONE);
    setActiveContact(null);
    return;
    }
    setAction(ACTION.EDIT);
    setActiveContact(editedItem);
    
  };
 
  useEffect(() => {
    if (action !== ACTION.EDIT || !activeContact) return;
    const saveEditContact = () => {
      
    dispatch(editContact(activeContact))
   
    toast.success(
    `Контакт ${activeContact.name.toUpperCase()} успешно изменен !!`
    );
    setAction(ACTION.NONE);
    setActiveContact(null);
    setOpenModal(ACTION.NONE);

    closeEditModal();
    };

    saveEditContact();
  }, [action, activeContact, dispatch]);


  // FILTER 

  const filterChangeInput = (value) => dispatch(filterContacts(value))
  
  //Варіант з хуком USE MEMO
  const filterContactsName = useMemo(() => {
    const normalizedFilter = filterValueName.toLowerCase();

    const finalArray = contactsBook && contactsBook.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));

    if (finalArray.length === 0 && filterValueName !== "") {
      toast.info(`Усі контакти по запиту "${filterValueName.toUpperCase()}" були видалені ...✋!!`)
      toast.warning(`Очистіть поле для запиту, щоб побачити усі контакти :)))`)
    }
    return finalArray;
  }, [contactsBook, filterValueName]);

//DELETE_CONTACT 

  const onDeleteContact = (id) => setDeleteContactId(id);

  useEffect(() => {
    if (!deleteContactId ) return;
    console.log(deleteContactId);
    dispatch(deleteContact(deleteContactId));
    toast.success(`Контакт видалений зі списку контактів :))`, {
        icon: `❎`
      });
    setDeleteContactId(null);

  }, [deleteContactId, dispatch])
  
  
  return (
    <>
      {loading && <Loader loading={loading}/>}
      <div className={s.container}>
      
      {<ContactForm confirmContact={confirmContact}
      />}
    {contactsBook.length > 0 && (
        <Filter
          filterChangeInput={filterChangeInput}
          value={filterValueName}
      />
  )}
    {!contactsBook.length && !loading && <p>Please, add contact!</p>}
{contactsBook.length ? <ContactList
        openEditModal={openEditModal}
        onEditContact={onEditContact}
        filterContacts={filterContactsName}
        onDeleteContact={onDeleteContact}
        />:""}
{openModal ===  ACTION.EDIT && <Modal
        closeModal={closeEditModal}>
          <EditCard
            activeElement={activeContact}
            onSubmit={confirmEdit}
          />
        </Modal>}
      <ToastContainer theme="dark"/>
    </div>
    </>
    
  )
}

export default Contacts

