import { useState } from 'react'
import { useNavigate } from 'react-router'

const MailboxForm = (props) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        mailboxId:'',
        boxSize: '',
        boxOwner: ''
    })

    const handleSubmitBox = (event) => {
        event.preventDefault()
        setFormData(event)
        props.addBox()
        setFormData({
            mailboxId:'',
            boxSize: '',
            boxOwner: ''
        })
        navigate('/mailboxes')
    }

    return (
        <>
           <h1>New Mailbox</h1> 
           <form onSubmit={handleSubmitBox}>
                <label>Enter a Box Owner:</label>
                <input type='text' name='boxOwner' placeholder="Boxholder name" value={props.newMailbox.boxOwner} onChange={props.handleInputChange}></input>
                 
                 <label >Select Box Size:</label>
                <select name='boxSize' id='boxSize' onChange={props.handleInputChange} value={props.newMailbox.boxSize}>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>

                <button type="submit">submit</button>
           </form>
        </>
    )
}

export default MailboxForm