import { useState } from "react";
import Navbar from './components/Navbar'
import Card from './components/Card'
import Button from './components/Button'
import LogoMaster from '/images/logo-mastercraft.svg'
import BookmarkIcon from '/images/icon-bookmark.svg'
import BookmarkDarkCyan from '/images/bookmark-darkCyan.svg'
import Modal from './components/Modal'
import ThanksCard from '/src/components/ThanksCard.jsx'
import TheCredits from "./components/TheCredits.jsx";

function App() {

// State to manage the modal visibility
const [showModal, setShowModal] = useState(false);

// State to display the thanks card
const [showThanks, setShowThanks] = useState(false);

// State to display bookmark
const [bookmark, setBookmark] = useState(false);


// Toggle function to handle the modal display
  function handleClick() {
    setShowModal(!showModal);
  }

// function to display the thanks card
function ThanksMessage() {
  setShowThanks(!showThanks)
  setShowModal(false);
  //scrool to top
  window.scrollTo(0, 0)
}

// function to change style of button bookmark
function isBookmarked() {
  setBookmark(!bookmark)
}

  return (
    <>
      <header className='bg-app'>
        <Navbar />
      </header>
      {showModal || showThanks ? <div className="fixed top-0 z-10 min-h-screen bg-black/20 min-w-[100%]"></div> : ''}
      <main className='relative mx-6 md:mx-28 lg:mx-48 xl:mx-80'>
        
        <div className='mb-8 bg-[#f9fafb] rounded-lg top-[-3.8rem] mx-auto inset-x-0 absolute'>
          
          <img src={LogoMaster} className='absolute top-[-2rem] mx-auto inset-x-0' />
          
          <section className='bg-white pt-10 pb-6 px-6 lg:pt-12 lg:pb-10 lg:px-12 border-b border-x border-gray-100 text-center rounded-lg mb-5'>
            <h1 className='text-2xl lg:text-3xl font-bold mb-3'>Mastercraft Bamboo Monitor Riser</h1>
            <p className='text-DarkGray mb-4'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className='flex items-center gap-x-2 justify-center md:justify-between md:pt-3'>
              <Button
                handleClick={handleClick} 
                textButton="Back this project" 
                baseStyle="base" 
                variant="widest" />
              <button onClick={isBookmarked} aria-label='Bookmark' className="md:bg-gray-100 md:flex md:items-center md:justify-between md:w-40 md:rounded-full">
                <p className={`${bookmark ? 'text-DarkCyan' : 'text-DarkGray'} hidden md:block md:order-1 pr-4 font-bold`}>Bookmark</p>
                {bookmark ? <img src={BookmarkDarkCyan} alt=""/> : <img src={BookmarkIcon} alt=""/>}
              </button>
            </div>
          </section>

          <section className='bg-white p-6 lg:px-12 lg:py-8 border border-gray-100 text-center md:text-left rounded-lg mb-5'>
          <div className="md:grid md:grid-cols-3 md:place-items-start">
            <div>
              <h2 className='font-bold text-3xl'>$89,914</h2>
              <p className='text-DarkGray text-[.8rem]'>of $100,000 backed</p>
              <hr className='w-20 mx-auto inset-x-0 my-4 md:hidden' />
            </div>
            <div className="md:border-l md:border-gray-300 md:pl-5">
              <h2 className='font-bold text-3xl'>5,007</h2>
              <p className='text-DarkGray'>total backers</p>
              <hr className='w-20 mx-auto inset-x-0 my-4 md:hidden' />
            </div>            
            <div className="md:border-l md:border-gray-300 md:pl-5">
              <h2 className='font-bold text-3xl'>56</h2>
              <p className='text-DarkGray'>days left</p>
            </div>
          </div>
            <div className='relative flex mt-6 mb-2'>
              <span className='absolute z-10 w-[78%] bg-ModerateCyan h-3 rounded-full'></span>
              <span className='w-full bg-gray-100 h-3 rounded-full'></span>
            </div>
          </section>

          <section className='bg-white border border-gray-100 rounded-lg p-6 lg:px-12'>
            <h3 className='font-bold text-xl mb-4'>About this project</h3>
            <p className='text-DarkGray mb-4'>  The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
              to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
              your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>  
            <p className='text-DarkGray mb-7'> Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
              to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>

            <Card ThanksMessage={ThanksMessage} />
          </section>
          <div className='h-10'>
            <TheCredits />
          </div>

          {showModal && <div className="absolute top-[-6%] z-20">
              <Modal handleClick={handleClick} ThanksMessage={ThanksMessage}  />
            </div>
          }

          {showThanks && <div className="absolute top-[-6%] z-20">
                <ThanksCard ThanksMessage={ThanksMessage}  />
            </div>
            } 
        </div>
      </main>
    </>
  )
}

export default App
