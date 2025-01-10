import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AdminList from './AdminList.jsx'
import AdminEdit from './AdminEdit.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-275899ac10/icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ACSCSS/AdminModal.scss'
import { useState } from 'react';
import axios from 'axios';


function AdminModal({setShow, show, data, setCurrentPage, fetchUsers}) {

  const [context, setContext] = useState('list');
  const [inputs, setInputs] = useState({data})

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setContext('list')
    }, 500)
  }

  const handleEdit = () => {
    setContext('edit')
    console.log(data)
  }

  const handleEditSubmit = () => {
    axios.put('http://localhost:3000/updateCustomer', {
      id: data.id,
      data: inputs
    })
    .then(res => {
      console.log('resolution for update', res)
    })
    .catch((err) => {
      console.log('error updating customer', err)
    })

    setShow(false);
    setTimeout(() => {
      setContext('list')
      fetchUsers()
    }, 500)
  }


  return(

    <div className='modal show'>
      {data ?
        <Modal centered size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Button variant='outline-primary' className='edit-btn'>
              <FontAwesomeIcon
              icon={byPrefixAndName.fas['pen-to-square']}
              onClick={()=>{handleEdit()}}
              />
            </Button>
            <Modal.Title className='modal-title'>{data.company_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {context === 'list' ? <AdminList data={data}/> : <AdminEdit data={data} setContext={setContext} inputs={inputs} setInputs={setInputs}/>}
          </Modal.Body>
          <Modal.Footer className='modal-footer'>
            {context === 'list' ? <></> : <Button variant='primary' className='submit-edit-btn' onClick={handleEditSubmit}>Update</Button>}
            <Button variant='outline-danger' onClick={handleClose}>Delete</Button>
          </Modal.Footer>
        </Modal>
       : <></>
      }

    </div>
  )

}

export default AdminModal;