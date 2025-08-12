import {Link} from 'react-router'
const NavBar = () => {
    return (
        <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/mailboxes'>Mailboxes</Link></li>
                <li><Link to='/new-mailbox'>New Mailbox</Link></li>
                <li><Link to='/new-letter'>New Letter</Link></li>
            </ul>
        </>
    )
}

export default NavBar