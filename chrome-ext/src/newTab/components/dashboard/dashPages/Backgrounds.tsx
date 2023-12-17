import React, { useRef, useState } from 'react'
import { Button } from '@mui/material'
import './Backgrounds.css'
import UploadIcon from '@mui/icons-material/UploadRounded';
import DefaultBackground from '../../../../assets/DefaultBackground.png'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function Backgrounds(props) {
  const driveLink = "https://drive.google.com/uc?id=";
  const imageIDs = ["1ahnxS3s3vmFKTC2D89TGxXv9HHPQOBw1", "1CX570Z5PCgjOX3KUabgSVVpwWDHiRAif", "1JdtY5FU5mPXpT85M0M40hIvLekznNzmJ", "1p5qRFvcNJpmua10hobYmNSPOg8LLnQev", "1IWZGnbAc6JyUpQGF-tXwcIwtp9lBHmiH"];

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

          <Button onClick={() => { props.setBackground(driveLink + imageIDs[0]) }}>
            <img
              src={driveLink + imageIDs[0]}
              style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer' }}
            />
            {props.background == driveLink + imageIDs[0] && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>

          <Button onClick={() => { props.setBackground(driveLink + imageIDs[1]) }}>
            <img
              src={driveLink + imageIDs[1]}
              style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer' }}
            />
            {props.background == driveLink + imageIDs[1] && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>

          <Button onClick={() => { props.setBackground(driveLink + imageIDs[2]) }}>
            <img
              src={driveLink + imageIDs[2]}
              style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer' }}
            />
            {props.background == driveLink + imageIDs[2] && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>

          <Button onClick={() => { props.setBackground(driveLink + imageIDs[3]) }}>
            <img
              src={driveLink + imageIDs[3]}
              style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer' }}
            />
            {props.background == driveLink + imageIDs[3] && (
              <CheckCircleRoundedIcon
                style={{ width: '18px', height: '18px', position: 'absolute', top: '-5px', right: '-5px', color: '#772CE8', zIndex: 1, }}
              />
            )}
          </Button>

          <Button onClick={() => { props.setBackground(driveLink + imageIDs[4]) }}>
            <img
              src={driveLink + imageIDs[4]}
              style={{ width: '160px', height: '120px', flexShrink: '0', borderRadius: '5px', cursor: 'pointer' }}
            />
            {props.background == driveLink + imageIDs[4] && (
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
