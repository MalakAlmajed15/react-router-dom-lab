import {useParams} from 'react-router'

const MailboxDetails = (props) => {
    const params = useParams()
    const boxSelected = props.mailboxes.find((mailbox) => {
        return mailbox._id === Number(params.mailboxId)
    })
    const selectedLetters = props.letters.filter((letter) => {
        return letter.mailboxId === Number(params.mailboxId)
    })

   return (
        <>
            {
                boxSelected ?
                    <>
                        <h1>Mailbox {boxSelected._id}</h1>
                        <h3>Details</h3>
                        <p>Boxholder: {boxSelected.boxOwner}</p>
                        <p>Box Size: {boxSelected.boxSize}</p>

                        {/* letters part*/}
                        <h3>Letters</h3>
                        {
                            selectedLetters.map((letter, index) => (
                                <>
                                    <p key={index}>{letter.message}</p>
                                    <hr />
                                </>
                            ))
                        }
                    </>
                    :
                    <h1>Mailbox Not Found!</h1>
            }
        </>
    )
}

export default MailboxDetails