import React, { useRef, useState } from 'react'
import { Button } from '@mui/material'
import './Backgrounds.css'
import UploadIcon from '@mui/icons-material/UploadRounded';
import DefaultBackground from 'src/assets/DefaultBackground.png'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import Bg1 from 'src/assets/Background1.png';
import Bg2 from 'src/assets/Background2.png';
import Bg3 from 'src/assets/Background3.png';
import Bg4 from 'src/assets/Background4.png';
import Bg5 from 'src/assets/Background5.png';


export default function Backgrounds(props) {
  // Handle backgrounds uploading
  const [uploadedBackground, setUploadedBackground] = useState(() => {
    const storedBackground = localStorage.getItem('uploadedBackground');
    return storedBackground ? `data:image/png;base64,${storedBackground}` : null;
  });

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
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
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className='backgrounds-p1' style={{ display: 'flex', flexDirection: 'column', }}>
        <div className='backgrounds-header'>YOUR BACKGROUNDS</div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>

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
              style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer', objectFit: 'cover', objectPosition: 'center' }}
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

      <div className='backgrounds-p2' style={{ display: 'flex', flexDirection: 'column' }}>
        <div className='backgrounds-header'>GALLERY</div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>

          <Button onClick={() => { props.setBackground(Bg1) }}>
            <img src={Bg1} style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer', objectFit: 'cover', objectPosition: 'center' }} loading='lazy' />
            {props.background == Bg1 && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>

          <Button onClick={() => { props.setBackground(Bg2) }}>
            <img src={Bg2} style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer', objectFit: 'cover', objectPosition: 'center' }} loading='lazy' />
            {props.background == Bg2 && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>

          <Button onClick={() => { props.setBackground(Bg3) }}>
            <img src={Bg3} style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer', objectFit: 'cover', objectPosition: 'center' }} loading='lazy' />
            {props.background == Bg3 && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>

          <Button onClick={() => { props.setBackground(Bg4) }}>
            <img src={Bg4} style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer', objectFit: 'cover', objectPosition: 'center' }} loading='lazy' />
            {props.background == Bg4 && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>

          <Button onClick={() => { props.setBackground(Bg5) }} >
            <img src={Bg5} style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer', objectFit: 'cover', objectPosition: 'center' }} loading='lazy' />
            {props.background == Bg5 && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}