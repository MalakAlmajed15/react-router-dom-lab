import {useState} from 'react'
import { useNavigate } from 'react-router'

const MailboxForm = (props) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        boxSize: '',
        boxOwner: ''
    })
    const handleSubmitBox = (event) => {
        event.preventDefault()
        props.addBox(formData)
        setFormData({
            boxSize: '',
            boxOwner: ''
        })
        navigate('/mailboxes')
    }
    const handleInputChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    return (
        <>
           <h1>New Mailbox</h1> 
           <form onSubmit={handleSubmitBox}>
                <label>Enter a Box Owner:</label>
                <input type='text' name='boxOwner' placeholder="Boxholder name" value={formData.boxOwner} onChange={handleInputChange}></input>
                 
                 <label >Select Box Size:</label>
                <select name='boxSize' id='boxSize' value={formData.boxSize} onChange={handleInputChange}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'Large'}>Large</option>
                </select>

                <button type="submit">submit</button>
           </form>
        </>
    )
}

export default MailboxForm