import PropTypes from 'prop-types'
import Button from '/src/components/Button.jsx'
import data from '/src/data.json'

function Card(props) {

    const dataCard = data.cards
    const dataDisabled = data.disabled[0]

    return (
        <>
        {dataCard.slice(1,3).map((item) => (
            <article 
                key={item.id} 
                className="border border-gray-200 my-5 p-6 rounded-lg">
                <div className='md:flex md:justify-between'>
                    <h4 className='font-black'>{item.title} </h4>
                    <p className='text-ModerateCyan font-semibold'>{item.pledge} </p>
                </div>
                <p className='text-DarkGray my-5'>{item.description} </p>
                <div className='md:flex md:justify-between md:items-center'>
                    <p className='flex items-center gap-x-1 mb-5'>
                        <span className='font-bold text-4xl'>{item.cuantity} </span>
                        <span className='text-DarkGray'>left</span>
                    </p>
                    <Button 
                        handleClick={props.ThanksMessage} 
                        textButton="Select Reward" 
                        baseStyle="base" 
                        variant="narrow" />
                </div>
            </article>
        )) }

            <article  
                className="border border-gray-100 my-5 p-6 rounded-lg">
                <div className='md:flex md:justify-between'>
                    <h4 className='font-black text-gray-400'>{dataDisabled.title} </h4>
                    <p className='text-[#b3e6e2] font-semibold'>{dataDisabled.pledge} </p>
                </div>
                <p className='text-gray-300 my-5'>{dataDisabled.description} </p>
                <div className='md:flex md:justify-between md:items-center'>
                    <p className='flex items-center gap-x-1 mb-5'>
                        <span className='font-bold text-4xl text-gray-400'>{dataDisabled.cuantity} </span>
                        <span className='text-gray-300 '>left</span>
                    </p>
                    <Button 
                        textButton="Out of Stock" 
                        baseStyle="disabled" 
                        variant="narrow" 
                    />
                </div>
            </article>
        </>
    )
}

Card.propTypes = {
    ThanksMessage: PropTypes.func,
}

export default Card
