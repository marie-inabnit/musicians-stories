import React, {useState} from 'react';
import './SectionModal.css';
import '../tailwind.output.css';
import Modal from "react-modal"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

Modal.setAppElement('#root')

function SectionModal (){
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [pseudo, setPseudo] = useState('');
    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');

    const [post, setPost] = useState(false);

    let handleStory = async () => {
        const data = await fetch('/post-story', {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: `titleFront=${title}&pseudoFront=${pseudo}&storyFront=${story}`
        })
        const body = await data.json
        if(body.result === true){
            setPost(true);
        }

      
    }


    return(
        <div>
            <button id="modalBtn" className="bg-blue-400 hover:bg-blue-600 rounded-full w-12 h-12" onClick={() => setModalIsOpen(true)}>
                <FontAwesomeIcon icon={faPlus} className="fa-plus"/>
            </button>
           

            <Modal id="modalBox"  isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} shouldCloseOnOverlayClick={true} overlayClassName="Overlay">
            <div id="modalContent" className="rounded p-3 w-auto">
                <span onClick={() => setModalIsOpen(false)} id="closeModal"><FontAwesomeIcon icon={faTimes}/></span>
                <form className="flex flex-col flex-1 m-3">
                    <label htmlFor="pseudo">Pseudo (reste anonyme!)</label>
                    <input 
                        className = "bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mb-8 block w-full appearance-none leading-normal"
                        onChange = {(e) => setPseudo(e.target.value)}
                        value = {pseudo}
                    />
                    
                    <label htmlFor="titre">Titre</label>
                    <input 
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mb-8 block w-full appearance-none leading-normal"
                        onChange = {(e) => setTitle(e.target.value)}
                        value = {title}
                    />
                    
                    <label htmlFor="raconte-nous!">Raconte-nous!</label>
                    <textarea 
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mx-1  block w-full appearance-none leading-normal mb-5"
                        cols="30" rows="8"
                        onChange = {(e) => setStory(e.target.value)}
                        value = {story}
                    >
                        
                    </textarea>
                    
                    <button 
                        className="bg-teal-600 hover:bg-teal-700 rounded-full w-16 h-8 my-2 text-white object-bottom"
                        onClick={() => handleStory() }
                        >Poster</button>
                </form>
            </div>
            </Modal>
        </div>
    )
}

export default SectionModal;