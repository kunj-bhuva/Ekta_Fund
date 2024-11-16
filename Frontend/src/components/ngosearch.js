import React, { useState } from 'react';
import './ngosearch.css';
import Header_white from './Header_white';
import NgosearchResults from './ngosearchresults';

export default function Ngosearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm) {
      console.log(`Searching for: ${searchTerm}`);
      // Add search logic here
    } else {
      alert("Please enter a search term.");
    }
  };

  const handleQuickSearch = (term) => {
    setSearchTerm(term);
    handleSearch();
  };

  return (
    <div className="aller">
      <Header_white />
      <div className="cont">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search for non-profits"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
        <div className="top-searches">
          <div className="top-search-item" onClick={() => handleQuickSearch('Mumbai')}>Mumbai</div>
          <div className="top-search-item" onClick={() => handleQuickSearch('Livelihoods')}>Livelihoods</div>
          <div className="top-search-item" onClick={() => handleQuickSearch('Climate Change')}>Climate Change</div>
        </div>
        <NgosearchResults />
      </div>
    </div>
  );
}
