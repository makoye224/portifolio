/* eslint-disable no-unused-vars */
import React from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../assets/documents/resume.pdf';

const MyResume = () => {
  return (
    <div>
      <Document file={resume}>
        {/* 
          Loop through all pages and display each page using the Page component.
          In this example, it only displays the first page (pageNumber={1}),
          but you can map through all pages if needed.
        */}
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default MyResume;
