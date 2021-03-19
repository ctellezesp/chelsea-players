import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({label, placeholder, handleChange}) => (
    <div class="group">      
      <input 
            className="search-box"
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
        />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{label}</label>
    </div>
);