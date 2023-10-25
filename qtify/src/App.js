import "./App.css";
import HeroImage from "./components/HeroImage/HeroImage";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import { useState, useEffect } from "react";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [value, setValue] = useState(0);

  const getTopsAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumsData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getNewAlbumData = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbumsData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getAllSongsData = async () => {
    try {
      const data = await fetchSongs();
      setSongsData(data);
      setFilteredDataValues(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filteredData = (res) => {
    setFilteredDataValues(res);
  };

  const generateSongsData = (value) => {
    let key;

    switch (value) {
      case 1:
        key = "rock";
        break;
      case 2:
        key = "pop";
        break;
      case 3:
        key = "jazz";
        break;
      case 4:
        key = "blues";
        break;
      default:
        filteredData(songsData);
        return;
    }
    const res = songsData.filter((item) => item.genre.key === key);

    filteredData(res);
  };

  useEffect(() => {
    getTopsAlbumData();
    getNewAlbumData();
    getAllSongsData();
  }, []);

  useEffect(() => {
    generateSongsData(value);
  }, [value]);

  return (
    <div>
      <Navbar />
      <HeroImage />
      <div>
        <Section
          data={topAlbumsData}
          type="album"
          title="Top Albums"
          filteredDataValues={topAlbumsData}
          handleToggle={handleToggle}
          toggle={toggle}
        />
        <Section
          data={newAlbumsData}
          type="album"
          title="New Albums"
          filteredDataValues={newAlbumsData}
          handleToggle={handleToggle}
          toggle={toggle}
        />
        <Section
          data={songsData}
          type="song"
          title="Songs"
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleToggle={handleToggle}
          handleChange={handleChange}
          toggle={toggle}
        />
      </div>
    </div>
  );
}

export default App;
