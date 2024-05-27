import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const Result = ({ matchDetails }) => {

  return (
    <>
   <div className="main">
  <div className="container-fluid">
  <div className="container">
        <div className="text">
          <h1>LATEST RESULTS FOR</h1>
          <h2>EXPERIENCE JUST FOR</h2>
        </div>

        <span>PREMIER LEAGUE</span>
        <div className="winner-container">
          <h1 className="winner-title">WINNER</h1>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="https://mykd-react.vercel.app/assets/img/others/win01.png"
              sx={{ width: 75, height: 90 }}
            />
             <Avatar
              alt="Remy Sharp"
              src="https://mykd-react.vercel.app/assets/img/others/win02.png"
              sx={{ width: 75, height: 90 }}
            />
          </Stack>
          <ul className="winner-list">
            <li>BLACK HUNT</li>
            <li>$500,000</li>
            <li>WARZONE</li>
            <li>WOLF</li>
            <li>SKY HUNTER</li>
            <li>$300,000</li>
          </ul>
        </div>

        <div className="text2">
          <h3>DECEMBER 19, 2021 | 9:50 AM</h3>
          <h4>GRAND SURAT</h4>
          <button className='starbtn'>READ MORE</button>
        </div>
      </div>
    </div>
  </div>


    </>
  );
}

export default Result;
