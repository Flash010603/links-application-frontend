import React from 'react';
import { BtnAddEntry } from './ui/BtnAddEntry'

export const Header = () => {
    return (
        <header>
        <h1 className="title">-- URL Savior --</h1>
        <BtnAddEntry/>
      </header>
    )
}
