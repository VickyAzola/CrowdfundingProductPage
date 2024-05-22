import PropTypes from 'prop-types'
import Button from '/src/components/Button.jsx'
import CheckIcon from '/images/icon-check.svg'

function ThanksCard(props) {

    return (
        <>
        <article className='bg-white p-8 rounded-lg text-center fade-in-up'>
            <img className='mx-auto h-16 w-16 inset-x-0' src={CheckIcon} alt="" />
            <h4 className='font-black text-lg mt-5'>Thanks for your support! </h4>
            <p className='text-DarkGray my-5'>
                Your pledge brings us one step closer to sharing 
                Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.
            </p>
            <Button
                handleClick={props.ThanksMessage} 
                textButton="Got it!" 
                baseStyle="base" 
                variant="narrow" />
        </article>
        </>
    )
}

ThanksCard.propTypes = {
    ThanksMessage: PropTypes.func,
}

export default ThanksCard
