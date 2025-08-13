import {useState} from 'react'
import { useNavigate } from 'react-router'

const LetterForm = (props) => {
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState({
        mailboxId: 0,
        recipient: '',
        message: ''
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addLetter(formData)
        setFormData({
            mailboxId: 0,
            recipient: '',
            message: ''
        })
        navigate(`/mailboxes/${formData.mailboxId}`)
    }

    return (
        <>
            <h1>New Letter</h1>
            <form onSubmit={handleSubmit}>
                <label>Select a MailBox</label>
                <select onChange={handleChange} value={formData.mailboxId} name='mailboxId'>
                    {props.mailboxes.map((box) => {
                        return (
                            <option key={box._id} value={formData.mailboxId = box._id}>{`Mailbox ${box._id}`}</option>
                        )
                    })}
                </select>
                <label>Recipient</label>
                <input name='recipient' value={formData.recipient} onChange={handleChange}></input>
                <label>Message</label>
                <textarea name='message' value={formData.message} onChange={handleChange}></textarea>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default LetterForm