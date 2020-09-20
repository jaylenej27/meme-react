import React, { useState, useEffect } from 'react';
import '../App.css';
import Form from './Form';

// access api, setState of input & selection
const MemeGenerator = () => {
  const [topLineText, setTopLineText] = useState('');
  const [bottomLineText, setBottomLineText] = useState('');
  const [selection, setSelection] = useState('http://memegen.link/tenguy');
  const [urls, setUrls] = useState([]);
  const [imageName, setName] = useState([]);
  const onSubmit = () => {};

  // set full url
  const actualUrl =
    selection + '/' + topLineText + '/' + bottomLineText + '.jpg';
  console.log(actualUrl);

  const onChangeSelect = (e) => {
    setSelection(e.target.value);
  };

  //this fetch gets the Url list of images from website
  useEffect(function fetching() {
    fetch('https://memegen.link/templates')
      .then((res) => res.json())
      .then((data) => {
        const urls = Object.values(data);
        const fileName = Object.keys(data);
        setUrls(urls);
        setName(fileName);
      });
  }, []);

  return (
    // display drop down selection
    <div className="Generator">
      <label for="image-options">Select image</label>
      <select className="image-options" onChange={onChangeSelect}>
        {urls.map(function mapping(url, i) {
          return (
            <option value={url.replace('/api/templates', '')}>
              "{imageName[i]}"
            </option>
          );
        })}
      </select>

      {/* display form  */}

      <Form
        topLineText={topLineText}
        bottomLineText={bottomLineText}
        setTopLineText={setTopLineText}
        setBottomLineText={setBottomLineText}
        onSubmit={onSubmit}
      />
      <br />
      <br />
      <img src={actualUrl} alt="" />
      <br />

      <a href={actualUrl} target="_blank" rel="noopener noreferrer">
        <button>Open Image in New tab</button>
      </a>

      {/* <button className="download">
          Download
        </button> */}

      <br />
      <br />
    </div>
  );
};
export default MemeGenerator;
