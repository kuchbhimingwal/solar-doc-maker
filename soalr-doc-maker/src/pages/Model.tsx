import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import FormComponent from "../components/ModelFormComp"; // Import the form you created

const Authority = () => {
  const handleSubmit = (data:any) => {
    // Fetch the DOCX template from the server or public folder
    fetch("/model.docx")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch document");
        }
        console.log(response);
        
        return response.arrayBuffer(); // Ensure we're fetching it as binary data
      }) // Convert to arrayBuffer
      .then((content) => {
        // Load the docx file using PizZip
        const zip = new PizZip(content);
        
        // Initialize docxtemplater with the loaded zip
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });

        // Replace placeholders in the docx file with form data
        doc.render({
          CUSTOMERNAME: data.CUSTOMERNAME,
          KW: data.KW,
          ADDRESS: data.ADDRESS,
          CONNECTIONNUMBER: data.CONNECTIONNUMBER,
          PANNELMAKE: data.PANNELMAKE,
          PANELLWATT: data.PANELLWATT,
          INVERTERMAKE: data.INVERTERMAKE,
          TOTALCOST: data.TOTALCOST,
          FPAY: data.TOTALCOST * 0.8,
          SPAY: data.TOTALCOST * 0.19,
          TPAY: data.TOTALCOST * 0.01,
        });

        // Generate the modified docx file as a Blob
        const out = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });

        // Use FileSaver to save the updated file locally
        saveAs(out, "ModelAgrement.docx");
      })
      .catch((error) => {
        console.error("Error generating the document:", error);
      });
  };

  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6 text-green-600 text-center">Fill the Form to Generate a Model Agrement</h1>
      <FormComponent onSubmit={handleSubmit} />
      </div>
      </div>
    </div>
  );
};

export default Authority;
