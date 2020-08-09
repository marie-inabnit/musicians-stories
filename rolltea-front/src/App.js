import React, {useState, useEffect}  from 'react';
import Modal from "react-modal";

import './App.css';
import './tailwind.output.css';
import Cards from './Component/Cards';
import SectionModal from './Component/SectionModal'




Modal.setAppElement('#root')

function App() {

  const [postList, setPostList] = useState([]);



/* var randomList = randomTitle.map(function (essai, i){
  return <Cards essaiName= {essai} key={i} />
}) */

  useEffect(() => {
    postListData()
  }, [])

  const postListData = async () => {
    const dataDB = await fetch('/get-posts')
    const dataJSON = await dataDB.json()

    console.log(dataJSON[0])
    setPostList(dataJSON)
  }

  let cardData = []
  for(let i=0; i<postList.length; i++){
    cardData.push(<Cards 
      key={postList[i]._id}
      title= {postList[i].title}
      pseudo = {postList[i].author}
      histoire = {postList[i].histoire}
    />)
  }

 /*  var cardsPorps = postList.map((post, i) => {
    return <Cards title={post.title}/>
  }) */
 

  return (
  <div>
    <nav className="grid grid-cols-2">
      <h1 className="text-2xl mx-4" id="navTitle">Mésaventures musicales</h1>
    </nav>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center m-6">
      {cardData}
    </div>
   
    
    <SectionModal/>
     
   
  </div>
  );
}

export default App;
