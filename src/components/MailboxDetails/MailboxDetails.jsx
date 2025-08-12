import {useParams} from 'react-router'

const MailboxDetails = (props) => {
    const params = useParams()
    const boxSelected = props.mailboxes.find((mailbox) => {
        mailbox._id === Number(params.mailboxId)
    })
    const selectedLetters = props.letters.filter((letter) => {
        letter.mailboxId === Number(params.mailboxId)
    })

    return (
        <>
            <h2>Details</h2>
            <p>Box holder: {boxSelected.boxOwner}</p>
            <p>Box sixe: {boxSelected.boxSize}</p>
            <h2>Letters</h2>
            {selectedLetters.map((letter) => {
                return (
                    <>
                        <p>{`Dear ${letter.recipient}`}</p>
                        <p>{letter.message}</p>
                    </>
                )
            })}
        </>
    )
}

export default MailboxDetails