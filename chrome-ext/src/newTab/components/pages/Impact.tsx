import React from 'react'
import './Impact.css'
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';

export default function Impact() {
  return (
    <div>
      <CampaignOutlinedIcon style={{marginTop:"10%", width: "100px", height: "100px", transform: "rotate(-15deg)", color: "#b4b4b4", strokeWidth: "10", marginLeft: "45%"}} />
      <div className='impact-header'>Under Construction</div>
      <div className='impact-header-p2'>Stay tuned as we hope to bring more <br />task apps soon!</div>
    </div>
  )
}
