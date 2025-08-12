import {Link} from 'react-router'

const MailboxList = ({mailboxes}) => {
    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {mailboxes.map((box) => {
                    return (
                        <li key={box._id}>
                            <Link to={`/mailboxes/${box._id}`}>{`Mailbox ${box._id}`}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default MailboxList