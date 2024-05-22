import PropTypes from 'prop-types'
import Button from '/src/components/Button.jsx'

function Card(props) {

    const dataCard = {
        rewards: [
            {
                "id": 1,
                "name": "Bamboo Stand",
                "pledge": "Pledge $25 or more",
                "description": "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
                "cuantity": 101
            },
            {
                "id": 2,
                "name": "Black Edition Stand",
                "pledge": "Pledge $75 or more",
                "description": "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
                "cuantity": 64
            }
        ]
    }


    const disabledCard = {
        name: "Mahogany Special Edition",
        pledge: "Pledge $200 or more",
        description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        cuantity: 0
    }

    return (
        <>
        {dataCard.rewards.map((item) => (
            <article 
                key={item.id} 
                className="border border-gray-200 my-5 p-6 rounded-lg">
                <div className='md:flex md:justify-between'>
                    <h4 className='font-black'>{item.name} </h4>
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
                    <h4 className='font-black text-gray-400'>{disabledCard.name} </h4>
                    <p className='text-[#b3e6e2] font-semibold'>{disabledCard.pledge} </p>
                </div>
                <p className='text-gray-300 my-5'>{disabledCard.description} </p>
                <div className='md:flex md:justify-between md:items-center'>
                    <p className='flex items-center gap-x-1 mb-5'>
                        <span className='font-bold text-4xl text-gray-400'>{disabledCard.cuantity} </span>
                        <span className='text-gray-300 '>left</span>
                    </p>
                    <Button textButton="Out of Stock" baseStyle="disabled" variant="narrow" />
                </div>
            </article>
        </>
    )
}

Card.propTypes = {
    ThanksMessage: PropTypes.func,
}

export default Card
