import React from 'react';
import QRCode from 'react-qr-code';

export const QRCodeComponent = ({ value }) => {
  return (
    <div>
        <QRCode value={value} />
    </div>
  )
}
