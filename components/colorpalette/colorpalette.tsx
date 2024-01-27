'use client'
import React, { useState } from 'react';
import Circle from '@uiw/react-color-circle';

export default function Colorpallette() {
  const [hex, setHex] = useState('#c0c0c0');
  return (
    <Circle
      colors={[ '#000000', '#d8475d', '#0000ff', '#c0c0c0']}
      color={hex}
      onChange={(color) => {
        setHex(color.hex);
      }

     
    
    }
      
    />
  );
}