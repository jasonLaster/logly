"use client";
import { useState } from "react";

function FileUploadComponent() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file);
      setSelectedFile(file);
      // Further processing of the file can be done here
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && <p>File selected: {selectedFile.name}</p>}
    </div>
  );
}

export default FileUploadComponent;
