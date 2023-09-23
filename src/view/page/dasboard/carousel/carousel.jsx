import React, { useState, useEffect } from 'react';
import Resume from '../../../image/resume1.png';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { pdfjs } from 'react-pdf';

// import openai from "openai";

// openai.api_key = "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"

// const API_KEY ="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"

// import worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const Carousel = () => {
  /* 
      Must use an ATS-friendly CV template (bahasa)
      Must be in PDF format
  */

  const [expText, setExpText] = useState('');
  const [eduText, setEduText] = useState('');
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');

  const sanitizeToASCII = (text) => text.replace(/[^\x00-\x7F]/g, '');

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error); // Handle errors
    });

  const convertPDFToText = async (file) => {
    try {
      const pdfBase64 = await convertToBase64(file);
      const pdf = await pdfjs.getDocument(pdfBase64).promise;

      const maxPages = pdf._pdfInfo.numPages;
      const pagePromises = [];

      for (let pageNo = 1; pageNo <= maxPages; pageNo++) {
        pagePromises.push(pdf.getPage(pageNo));
      }

      const pages = await Promise.all(pagePromises);
      const pageTexts = await Promise.all(
        pages.map((page) => page.getTextContent())
      );

      const pageContents = pageTexts.map((pageText) =>
        pageText.items.map((item) => item.str).join(' ')
      );

      return pageContents.join('\n');
    } catch (error) {
      console.error('Error processing PDF:', error);
    }
  };

  const onFileChange = async (event) => {
    const file = event.target.files[0];
    const text = await convertPDFToText(file);
    const textASCII = sanitizeToASCII(text);

    // using regex to extract experience and education
    const experienceReg = /PENGALAMAN KERJA(.*?)PENDIDIKAN/gs;
    const experienceMatch = experienceReg.exec(textASCII);

    if (experienceMatch) {
      const extractedText = experienceMatch[1].trim();
      console.log('PENGALAMAN KERJA:');
      console.log(extractedText);
      setExpText(extractedText);
    }

    const educationReg = /PENDIDIKAN(.*?)PENGALAMAN ORGANISASI/gs;
    const educationMatch = educationReg.exec(textASCII);

    if (educationMatch) {
      const extractedText = educationMatch[1].trim();
      console.log('PENDIDIKAN:');
      console.log(extractedText);
      setEduText(extractedText);
    }

    setText(textASCII);
    setFile(file);
  };

  return (
    <div className="flex justify-center">
      <div className="card border shadow-xl w-full mt-10 h-full">
        <div className="w-full bg-blue-100 py-5">
          <h1 className="text-xl font-semibold ml-5">RESUME PARSER</h1>
        </div>
        <div className="flex justify-between example mb-10 mt-4 mx-40">
          <img src={Resume} alt="" className="w-72" />
          <img src={Resume} alt="" className="w-72" />
        </div>
        <div className="anon mx-5">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
            quisquam totam. Voluptatum inventore ab aperiam animi quam quaerat
            sit consequuntur, sint a ratione? Optio animi quo velit sint, non
            voluptatem? Error quo omnis perferendis inventore quibusdam? Odio
            voluptatem magnam error explicabo quae suscipit, fugit sapiente
            repellendus assumenda, facere voluptatum hic consequuntur illum
            labore corrupti, fugiat esse temporibus aspernatur quidem aliquid?
          </p>
        </div>
        <div className="border border-b-gray-400 mt-8 mx-10"></div>
        <div className="flex justify-evenly mt-5 mx-9 mb-5">
          <div className="card bg-white py-4 w-full">
            <div className="card-body">
              <div className="input">
                <div className="flex space-x-1">
                  <span>
                    <AttachFileIcon sx={{ fontSize: 20 }} />
                  </span>
                  <p className="mb-2">File</p>
                </div>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="inputFile"
                  onChange={onFileChange}
                />
                <p className="text-sm text-gray-400 mt-2">Input File</p>
              </div>
              <div className="login">
                <p className=" mt-3">Sign In To Run This Model :</p>
                <button className="border shadow-lg rounded px-3 py-2 bg-blue-200 mt-3">
                  Sign In
                </button>
              </div>
            </div>
          </div>
          <div className="card border w-full">
            <div className="card-body">
              <div className="result">
                <p className="text-gray-400 py-5 px-5">Foto Upload</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
