import NavBar from "./components/Nav/NavBar"
import MailboxForm from "./components/MailboxForm/MailboxForm"
import MailboxList from "./components/MailboxList/MailboxList"
import MailboxDetails from "./components/MailboxDetails/MailboxDetails"
import { BrowserRouter as Router, Route, Routes} from "react-router"
import {useState} from 'react'
import LetterForm from "./components/LetterForm/LetterForm"

const App = () => {
    const [mailboxes, setMailboxes] = useState([])
    const [newMailboxes, setNewMailboxes] = useState({
        boxSize: '',
        boxOwner: ''
    })
    const [letters, setLetters] = useState([])
    
    const addBox = (event) => {
        event.preventDefault()
        const newMailbox = {
            _id: mailboxes.length + 1,
            ...newMailboxes
        }
        setMailboxes([...mailboxes, newMailbox])
        setNewMailboxes({
        boxSize: '',
        boxOwner: ''
    })
    console.log('kalasna')
    }

    const addLetter = (newLetter) => {
        setLetters([...letters, newLetter])
    }
    const handleInputChange = () => {
        setNewMailboxes({...newMailboxes, [event.target.name]: event.target.value})
    }
    
    return (
        <>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<main><h1>Post Office</h1></main>}></Route>
                    <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}></Route>
                    <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} mailboxes={mailboxes} newMailbox={newMailboxes} handleInputChange={handleInputChange}/>}></Route>
                    <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}></Route>
                    <Route path='/new-letter' element={<LetterForm mailboxes={mailboxes} addLetter={addLetter}/>}></Route>
                    <Route path='*' element={<h1>Mailbox Not Found !!!</h1>}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App