'use client'
import NavBar from '../app/Component/NavBar';
import Home from './Home/page';
import React, { useState } from 'react';

export default function House() {
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for the search term
  console.log(searchTerm)
  return (
  <div>

     <NavBar search={searchTerm} setSearch={setSearchTerm} /> 
     <Home search={searchTerm} setSearch={setSearchTerm} />
    </div>
  );
}
