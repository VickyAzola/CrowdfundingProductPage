import { useState } from "react";
import PropTypes from 'prop-types'
import Button from '/src/components/Button.jsx'
import data from '/src/data.json'

function Modal(props) {

// State to manage the border checkbox style for each card
const [selectedCheckboxIndex, setSelectedCheckboxIndex] = useState(null);

const dataCard = data.cards
const dataDisabled = data.disabled[0]

// Function to handle the border display
function handleChange(index) {
    setSelectedCheckboxIndex(index === selectedCheckboxIndex ? null : index);
}

    return (
        <>
        <article className='bg-white p-6 lg:px-10 lg:py-8 rounded-lg fade-in-up'>
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

            {dataCard.map((item, index) => (
                    <section key={index}
                        className={`my-5 p-6 rounded-lg 
                        ${ selectedCheckboxIndex === index
                            ? "border border-cyan-500 highlight"
                            : "border border-gray-200"
                        }`}>
                        <label className="container-checkbox block relative hover:cursor-pointer transition-all">
                            <input 
                                className="checkbox"
                                type="checkbox"
                                checked={selectedCheckboxIndex === index}
                                onChange={() => handleChange(index)}
                            />
                            <span className="checkmark"></span>
                            <div className="md:flex md:justify-between">
                                <div className="md:flex md:gap-x-3">
                                    <h4 className='hover:text-ModerateCyan font-black pl-10 transition-all'>{item.title}</h4>
                                    <p className='text-ModerateCyan font-semibold pl-10 md:pl-0'>{item.pledge}</p>
                                </div>
                                <p className='hidden md:flex items-center gap-x-1 mb-5'>
                                    <span className='font-bold text-xl'>{item.cuantity}</span>
                                    {index !== 0 && <span className='text-DarkGray'>left</span>}
                                </p>
                            </div>
                        </label>
                        <p className='text-DarkGray my-5'>{item.description}</p>
                        <p className='md:hidden flex items-center gap-x-1 mb-5'>
                            <span className='font-bold text-xl'>{item.cuantity}</span>
                            {index !== 0 && <span className='text-DarkGray'>left</span>}
                        </p>
                        
                        {selectedCheckboxIndex === index &&
                            <div>
                            <hr />
                                <div className={`${index == 0 
                                    ? 'md:ml-auto md:mr-0' 
                                    : 'md:flex md:items-center md:justify-between md:pt-4'}`
                                }>
                                {index !== 0 && <p className="text-center text-DarkGray my-3">Enter your pledge</p>}
                                    <div className="flex justify-between md:gap-x-3">
                                        {index !== 0 &&
                                            <label className="hover:border-DarkCyan hover:cursor-pointer border py-3 w-28 flex items-center border-gray-200 rounded-full text-sm font-semibold">
                                                <span className="pl-6 text-gray-300">$</span>
                                                <input 
                                                    className="ml-2 pl-2 w-14 rounded-full" 
                                                    type="number" 
                                                    min={item.min} 
                                                    defaultValue={item.defaultValue} 
                                                    onKeyDown={(e) => {
                                                        if (e.key === '-' || e.key === 'e' || e.key === '.') {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                />
                                            </label>
                                        }
                                            <div className={`${index == 0 ? 'pt-3 ml-auto mr-0' : ''}`}>
                                                <Button
                                                    handleClick={props.ThanksMessage} 
                                                    textButton="Continue" 
                                                    baseStyle="base" 
                                                    variant="narrow" 
                                                />
                                            </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </section>
            ))}

            <section className='border border-gray-200 my-5 p-6 rounded-lg'>
                <label className="container-checkbox disabled-cbx block relative ">
                    <input 
                        className="checkbox"
                        type="checkbox"
                        disabled
                    />
                        <span className="checkmark"></span>
                </label>
                <div className="md:flex md:justify-between">
                    <div className="md:flex md:gap-x-3 ">
                        <h4 className='font-black pl-10 text-gray-400'>{dataDisabled.title} </h4>
                        <p className='text-[#b3e6e2] pl-10 md:pl-0 font-semibold'>{dataDisabled.pledge} </p>
                    </div>
                    <p className='hidden md:flex items-center gap-x-1 mb-5'>
                        <span className='font-bold text-xl text-gray-400'>{dataDisabled.cuantity} </span>
                        <span className='text-gray-400'>left</span>
                    </p>
                </div>
                <p className='text-gray-300 my-5'>
                    {dataDisabled.description}
                </p>
                <p className='md:hidden flex items-center gap-x-1 mb-5'>
                    <span className='font-bold text-xl text-gray-400'>{dataDisabled.cuantity}</span>
                    <span className='text-gray-400'>left</span>
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
