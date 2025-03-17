import React from 'react';
import Switch from '@mui/material/Switch';

const switchStyles = {
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: 'darkgreen',
    '& + .MuiSwitch-track': {
      backgroundColor: 'green',
    },
  },
  '& .MuiSwitch-root': {
    paddingTop: '0px',
    paddingBottom: '0px',
  },
  '& .MuiSwitch-switchBase': {
    padding: '7px',
    '& .MuiSvgIcon-root': {
      width: '18px',
      height: '18px',
    },
  },
  '& .MuiSwitch-track': {
    height: '17px',
    width: '32x',
  },
};

function CustomSwitchStyle({ checked, onChange }) {
  return <Switch checked={checked} onChange={onChange} sx={switchStyles} size="small" />;
}

export default CustomSwitchStyle;