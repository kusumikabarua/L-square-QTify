
import './App.css';
import HeroImage from './components/HeroImage/HeroImage';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import { useState,useEffect } from 'react';
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api';

function App() {
  const [topAlbumsData,setTopAlbumsData] = useState([]);
  const getTopsAlbumData =async() =>{
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  }

  const [newAlbumsData,setNewAlbumsData] = useState([]);
  const getNewAlbumData =async() =>{
    const data = await fetchNewAlbums();
    setNewAlbumsData(data);
  }

  const [songsData,setSongsData] = useState([]);
  const getSongsData =async() =>{
    const data = await fetchSongs();
    setSongsData(data);
  }

  useEffect(()=>{
    getTopsAlbumData();
    getNewAlbumData();
    getSongsData();
  },[])
  return (
    <div>
     <Navbar />
     <HeroImage />
     <div>
      <Section data ={topAlbumsData} type="album" title="Top Albums"/>
      {/* <Section data ={newAlbumsData} type="album" title="New Albums"/>
      <Section data ={songsData} type="song" title="Songs"/> */}
     </div>
    
    
    </div>
  );
}

export default App;
