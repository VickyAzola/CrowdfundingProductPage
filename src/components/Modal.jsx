import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import Button from '/src/components/Button.jsx'

function Modal(props) {
// State to listen to window width
const [windowWidth, setWindowWidth] = useState(window.innerWidth)

// State to manage the border chackbox style
const [borderCheckbox, setBorderCheckbox] = useState({
    noReward: false,
    BambooStand: false,
    BlackStand: false,
})


//style card checbox
const styleChecked = {
    base: 'border border-gray-200 my-5 p-6 rounded-lg',
    border: 'border border-cyan-400 ',
}

// function to handle the border display
function handleChange(event) {
    const {name, checked} = event.target
    setBorderCheckbox(prevFormData => {
            return {
                ...prevFormData,
                [name]: checked
            }
        })
}

// listener for window width
useEffect(() => {
    function watchWidth() {
        setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", watchWidth)

    return function() {
        window.removeEventListener("resize", watchWidth)
    }
})

    return (
        <>
        <article className='bg-white p-6 lg:px-10 lg:py-8 rounded-lg'>
            <section>
                <div className="flex justify-between">
                    <h4 className='font-black text-lg md:text-2xl'>Back this project </h4>
                    <button onClick={props.handleClick}>
                        <svg
                            className='fill-DarkGray'
                            width="14" 
                            height="15" 
                            xmlns="http://www.w3.org/2000/svg">
                            <g fillRule="evenodd">
                                <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/>
                                <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/>
                            </g>
                        </svg>
                    </button>
                </div>
                <p className='text-DarkGray my-5'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            </section>

                <section className={`${styleChecked.base} ${borderCheckbox.noReward == true ? styleChecked.border : ''} `}>
                    <label className="container block relative hover:cursor-pointer">
                        <input 
                            className="checkbox"
                            type="checkbox"
                            checked={borderCheckbox.noReward}
                            onChange={handleChange}
                            name="noReward"
                            id="noReward"
                        />
                        <span className="checkmark"></span>
                        <h4 className='hover:text-ModerateCyan font-black pl-10'>Pledge with no reward </h4>
                    </label>
                    <p className='text-DarkGray my-5'>
                        Choose to support us without a reward if you simply believe 
                        in our project. As a backer, you will be signed up to receive 
                        product updates via email.
                    </p>
                    {borderCheckbox.noReward && <div>
                        <hr />
                        <div className="flex justify-end mt-3">
                            <Button
                                handleClick={props.ThanksMessage} 
                                textButton="Continue" 
                                baseStyle="base" 
                                variant="narrow" />
                        </div>
                    </div>}
                </section>
                

            <section className={`${styleChecked.base} ${borderCheckbox.BambooStand == true ? styleChecked.border : ''} `}>
                <label className="container block relative ">
                    <input 
                        className="checkbox"
                        type="checkbox"
                        checked={borderCheckbox.BambooStand}
                        onChange={handleChange}
                        name="BambooStand"
                        id="BambooStand"
                    />
                        <span className="checkmark"></span>
                        <div className="md:flex md:justify-between">
                            <div className="md:flex md:gap-x-3">
                                <h4 className='hover:text-ModerateCyan font-black pl-10'>Bamboo Stand</h4>
                                <p className='text-ModerateCyan font-semibold pl-10 md:pl-0'>Pledge $25 or more </p>
                            </div>
                            {windowWidth > 768 ? 
                            <p className='flex items-center gap-x-1 mb-5'>
                            <span className='font-bold text-xl'>101 </span>
                            <span className='text-DarkGray'>left</span>
                            </p> : ''}
                        </div>
                </label>
                <p className='text-DarkGray my-5'>
                    You get an ergonomic stand made of natural bamboo. 
                    You&#39;ve helped us launch our promotional campaign, and
                    you&#39;ll be added to a special Backer member list.
                </p>
                {windowWidth < 768 ? <p className='flex items-center gap-x-1 mb-5'>
                    <span className='font-bold text-xl'>101 </span>
                    <span className='text-DarkGray'>left</span>
                </p> : ''}

                {borderCheckbox.BambooStand && <div>
                    <hr />
                    <div className="md:flex md:justify-between md:pt-4">
                        <p className="text-center text-DarkGray my-3">Enter your pledge</p>
                        <div className="flex justify-between md:gap-x-3">
                            <label className="hover:border-DarkCyan hover:cursor-pointer border py-3 w-28 flex items-center border-gray-200 rounded-full text-sm font-semibold">
                                <span className="pl-6 text-gray-300">$</span>
                                <input className="ml-2 pl-2 w-14 rounded-full" type="number" min={25} defaultValue={25}  />
                            </label>
                            <Button
                                handleClick={props.ThanksMessage} 
                                textButton="Continue" 
                                baseStyle="base" 
                                variant="narrow" 
                            />
                        </div>
                    </div>
                </div>}
            </section>

            <section className={`${styleChecked.base} ${borderCheckbox.BlackStand == true ? styleChecked.border : ''} `}>
                <label className="container block relative hover:cursor-pointer">
                    <input 
                        className="checkbox"
                        type="checkbox"
                        checked={borderCheckbox.BlackStand}
                        onChange={handleChange}
                        name="BlackStand"
                        id="BlackStand"
                    />
                        <span className="checkmark"></span>
                        <h4 className='hover:text-ModerateCyan font-black pl-10'></h4>
                        <div className="md:flex md:justify-between">
                            <div className="md:flex md:gap-x-3">
                                <h4 className='hover:text-ModerateCyan font-black pl-10'>Black Edition Stand</h4>
                                <p className='text-ModerateCyan font-semibold pl-10 md:pl-0'>Pledge $75 or more </p>
                            </div>
                            {windowWidth > 768 ? 
                            <p className='flex items-center gap-x-1 mb-5'>
                            <span className='font-bold text-xl'>64 </span>
                            <span className='text-DarkGray'>left</span>
                            </p> : ''}
                        </div>
                </label>
                <p className='text-DarkGray my-5'>
                    You get a Black Special Edition computer stand and a 
                    personal thank you. You&#39;ll be added to our Backer
                    member list. Shipping is included.
                </p>
                {windowWidth < 768 ? <p className='flex items-center gap-x-1 mb-5'>
                    <span className='font-bold text-xl'>64 </span>
                    <span className='text-DarkGray'>left</span>
                </p> : ''}

                {borderCheckbox.BlackStand && <div>
                    <hr />
                    <div className="md:flex md:justify-between md:pt-4">
                        <p className="text-center text-DarkGray my-3">Enter your pledge</p>
                        <div className="flex justify-between md:gap-x-3">
                            <label className="hover:border-DarkCyan hover:cursor-pointer border py-3 w-28 flex items-center border-gray-200 rounded-full text-sm font-semibold">
                                <span className="pl-6 text-gray-300">$</span>
                                <input className="ml-2 pl-2 w-14 rounded-full" type="number" defaultValue={75} min={75} />
                            </label>
                            <Button
                                handleClick={props.ThanksMessage}
                                textButton="Continue" 
                                baseStyle="base" 
                                variant="narrow" 
                            />
                        </div>
                    </div>
                </div>}
            </section>

            <section className='border border-gray-200 my-5 p-6 rounded-lg'>
                <label className="container block relative ">
                    <input 
                        className="checkbox"
                        type="checkbox"
                        disabled
                    />
                        <span className="checkmark"></span>
                </label>
                <h4 className='font-black pl-10 text-gray-400'>Mahogany Special Edition</h4>
                <p className='text-cyan-100 font-semibold pl-10'>Pledge $200 or more </p>
                <p className='text-gray-300 my-5'>
                    You get two Special Edition Mahogany stands, a Backer 
                    T-Shirt, and a personal thank you. You&#39;ll be added
                    to our Backer member list. Shipping is included.
                </p>
                <p className='flex items-center gap-x-1 mb-5'>
                    <span className='font-bold text-xl text-gray-400'>0 </span>
                    <span className='text-gray-300'>left</span>
                </p>
            </section>
        </article>
        </>
    )
}

Modal.propTypes = {
    handleClick: PropTypes.func,
    ThanksMessage: PropTypes.func,
}

export default Modal
