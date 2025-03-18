import React from 'react';
import UserTextStyle from './user-text-style.component';

function PageHeader({ title, userName,  marginTop = '0' }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: marginTop,
    }}>
      <h1 style={{ fontSize: '1.7rem', fontWeight: '750', color: '#2b3e90' }}>{title}</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h3 style={UserTextStyle}>{userName}</h3>
      </div>
    </div>
  );
}

export default PageHeader;