import React, { useState } from 'react';
import { PDFViewer, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

// Create styles for the PDF content
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'center',
    color: '#1F2937',
  },
});

const Sponsorship = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <iframe
        src="/Temsmet2025_Sponsorship_Brochure.pdf"
        className="w-full h-[800px] border border-gray-300 shadow-lg"
        title="Sponsorship Invitation PDF"
      />
    </div>
  );
};

export default Sponsorship;
