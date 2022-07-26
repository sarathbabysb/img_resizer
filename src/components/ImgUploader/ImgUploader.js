import { useState } from "react";
import "./imgUploader.css";
import { bytesToSize } from "../../assets/js/custom";

const ImgUploader = (props) => {

  const { inputParams, setInputParams } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentImage, setCurrentImage] = useState({
    imgWidth: "",
    imgHeight: "",
    imgSize: "0kb",
  });

  const inputFileHandel = (e) => {
    if(e.target.files.length>0) {
      let file = e.target.files[0];
      let fileName = file.name;
      let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(fileName)) {
        alert("Invalid image file type");
        return false;
      }
      let fileExtension = fileName.split(".").pop();
      setSelectedFile(file);
      let imgSize = bytesToSize(file.size);
      let imgUrl = URL.createObjectURL(file);
      let img = new Image();
      img.src = imgUrl;
      img.onload = () => {
        setCurrentImage({
          ...currentImage,
          imgWidth: img.width,
          imgHeight: img.height,
          imgSize: imgSize,
        });
        props.setInputParams({
          ...inputParams,
          imageData: file,
          imageFileName: fileName,
          imgWidth: img.width,
          imgHeight: img.height,
          imgFormat: fileExtension,
        });
      };
      img.remove();
    }
  };

  return (
    <div className="mt-3 file-uploader">
      <form id="file-upload-form" className="uploader">
        <input
          id="file-upload"
          type="file"
          name="fileUpload"
          onChange={(e) => inputFileHandel(e)}
        />
        <label
          htmlFor="file-upload"
          id="file-drag"
          className={`${selectedFile === null ? "modal-body file-upload" : ""}`}
        >
          {selectedFile !== null && (
            <img
              id="file-image"
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
            />
          )}

          <div id="start">
            {selectedFile === null ? (
              <>
                <i className="fa fa-file-import" aria-hidden="true"></i>
                <div>Drop your images here or select a image</div>
              </>
            ) : (
              <div id="notimage">
                <span>
                  Width: {currentImage.imgWidth}px, Height:{" "}
                  {currentImage.imgHeight}px, Size:
                  {currentImage.imgSize}
                </span>
              </div>
            )}
            <span id="file-upload-btn" className="btn btn-primary">
              Select Image
            </span>
          </div>
        </label>
      </form>
    </div>
  );
};

export default ImgUploader;