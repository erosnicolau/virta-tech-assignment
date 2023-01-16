import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { CountryList } from './components/CountryList/CountryList';

export default function App() {
  return (
    <div className="App">
      <Header />
      <CountryList />
    </div>
  );
}