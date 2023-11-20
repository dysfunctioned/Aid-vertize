import React, { useRef, useState } from 'react'
import { Button } from '@mui/material'
import './Backgrounds.css'
import UploadIcon from '@mui/icons-material/UploadRounded';
import DefaultBackground from '../../../../assets/DefaultBackground.png'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function Backgrounds(props) {
  const backgrounds = [
    'https://images.squarespace-cdn.com/content/v1/5dd9e841aaf3a2671e79cacb/1575251382233-0HV2GI056VREW9S0G37K/%E5%A4%A7%E8%BF%9E%E5%B0%BF%E7%85%A73.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5dd9e841aaf3a2671e79cacb/1647267752269-DON5UU8RIV5P4YRT35Q9/Seceda+Houses-compressed.jpg?format=1000w',
    'https://images.squarespace-cdn.com/content/v1/5dd9e841aaf3a2671e79cacb/1574564008106-2OQHDEFZ8PMXRZHO9TDI/Golden+Gate+3.jpg?format=1000w',
    'https://images.squarespace-cdn.com/content/v1/5dd9e841aaf3a2671e79cacb/1597945538227-HUE3YEW74MLZ87LDXK50/Milky+Way+4.png?format=1000w',
    'https://images.squarespace-cdn.com/content/v1/5dd9e841aaf3a2671e79cacb/1581105122269-RBYTQYXD7LSVDANR1ANY/AA6B7A9C-D8B0-4E1B-B5EF-FBC19412C5D3.jpeg?format=1000w'
  ];

  const [uploadedBackground, setUploadedBackground] = useState(() => {
    const storedBackground = localStorage.getItem('uploadedBackground');
    return storedBackground ? `data:image/png;base64,${storedBackground}` : null;
  });

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    // Trigger click on the hidden file input when the div is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = typeof reader.result === 'string' ? reader.result.split(',')[1] : new TextDecoder().decode(reader.result);
        setUploadedBackground(`data:image/png;base64,${base64String}`);
        localStorage.setItem('uploadedBackground', base64String);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <>
      <div className='backgrounds-p1'>

        <div className='backgrounds-header'>YOUR BACKGROUNDS</div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '15px', }}>

          <Button onClick={handleUploadClick}>
            <div style={{
              width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px',
              border: '1px solid #D8D8D8', background: '#E9E9E9',
              textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', cursor: 'pointer'
            }}>
              <UploadIcon sx={{ color: '#606367', width: '30px', height: '30px', marginTop: '30px', }} />
              <span style={{
                marginTop: '5px', color: '#606367', textAlign: 'center', fontSize: '12px',
                fontStyle: 'normal', fontWeight: '500', lineHeight: 'normal', letterSpacing: '0.22px', textTransform: 'none'
              }}>Upload from device</span>

              <input
                ref={fileInputRef}
                type="file"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </Button>

          <Button onClick={() => { props.setBackground(DefaultBackground) }}>
            <img
              src={DefaultBackground}
              style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer' }}
            />
            {props.background == DefaultBackground && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>

          {uploadedBackground && (
            <Button onClick={() => { props.setBackground(uploadedBackground) }}>
              <img
                src={uploadedBackground}
                style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer', }}
              />
              {props.background == uploadedBackground && (
                <CheckCircleRoundedIcon
                  style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
                />
              )}
            </Button>
          )}
        </div>
      </div >

      <div className='backgrounds-p2'>
        <div className='backgrounds-header'>GALLERY</div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '15px', }}>

          <Button onClick={() => { props.setBackground(backgrounds[0]) }}>
            <img
              src={backgrounds[0]}
              style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer' }}
            />
            {props.background == backgrounds[0] && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>

          <Button onClick={() => { props.setBackground(backgrounds[1]) }}>
            <img
              src={backgrounds[1]}
              style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer' }}
            />
            {props.background == backgrounds[1] && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>

          <Button onClick={() => { props.setBackground(backgrounds[2]) }}>
            <img
              src={backgrounds[2]}
              style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer' }}
            />
            {props.background == backgrounds[2] && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>

          <Button onClick={() => { props.setBackground(backgrounds[3]) }}>
            <img
              src={backgrounds[3]}
              style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer' }}
            />
            {props.background == backgrounds[3] && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>

          <Button onClick={() => { props.setBackground(backgrounds[4]) }}>
            <img
              src={backgrounds[4]}
              style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer' }}
            />
            {props.background == backgrounds[4] && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>
        </div>
      </div>
    </>
  )
}
