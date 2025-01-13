import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => {
 return (
     <Document file="./Temsmet2025_Sponsorship_Brochure.pdf">
    
    </Document>
 )
};

const Sponsorship = () => {
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
ReactDOM.render(<App />, document.getElementById('root'));
  
}

export default Sponsorship;
// src/components/PDFViewer.js


