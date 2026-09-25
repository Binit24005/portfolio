import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsDetails } from '../../../data/Productsdetails';
import DetailProjectPage from "./DetailProjectPage";

const Detailroute = () => {
  const { id } = useParams();

  // DEBUGGING: Check what we are looking for
  console.log("--- DEBUG START ---");
  console.log("1. URL ID we are looking for:", id);

  // Find the project
  const specificProject = ProductsDetails.find((p) =>  p.id === id);
  
  // DEBUGGING: Check what we found
  console.log("2. Did we find it?", specificProject);
  console.log("--- DEBUG END ---");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!specificProject) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-3xl font-bold text-red-500">Error: Project Not Found</h1>
        <p className="text-white mt-4">
            I looked for a project with the title: <strong>"{id}"</strong> inside 
            <code>ProductsDetails.js</code> but I couldn't find it.
        </p>
        <p className="text-gray-400 mt-2">
            Make sure the "title" in <code>config.js</code> matches the "title" in <code>ProductsDetails.js</code> exactly.
        </p>
      </div>
    );
  }

  return (
    <div>
       <DetailProjectPage products={specificProject} />
    </div>
  );
}

export default Detailroute;