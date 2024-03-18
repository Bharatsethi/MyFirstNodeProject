//AboutComp.js
import React,{useEffect,useState} from 'react';
const AboutComp = ({filteredData}) => {
    
    return (
     <>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            <strong>Title:</strong> {item.title} | <strong>Body:</strong> {item.body}
          </li>
        ))}
      </ul>
     </>
  );
};

export default AboutComp;