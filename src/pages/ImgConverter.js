import { useState } from "react";
import ImgUploader from "../components/ImgUploader/ImgUploader";
import { downloadFile } from "../assets/js/custom";
import Compressor from "compressorjs";

const ImgConverter = () => {

  const [buttonLoading, setButtonLoading] = useState(false);
  const [inputParams, setInputParams] = useState({
    imageData: null,
    imageFileName: "",
    imgQuality: 100,
    imgWidth: "",
    imgHeight: "",
    imgFormat: "",
    imgConvertFormat: "",
  });

  const toExtenExtension = [
    { name: "JPEG", value: "jpeg" },
    { name: "JPG", value: "jpg" },
    { name: "PNG", value: "png" },
  ];

  const handelInput = (e) => {
    e.persist();
    setInputParams({ ...inputParams, [e.target.name]: e.target.value });
  };

  const imageDownload = (e) => {
    setButtonLoading(true);
    let imageFileName = inputParams.imageFileName;
    let fileName = imageFileName.split(".")[0];
    let downloadFileName = fileName + "." + inputParams.imgConvertFormat;
    new Compressor(inputParams.imageData, {
      success(result) {
        downloadFile(result, downloadFileName);
        setButtonLoading(false);
      },
      error(err) {
        console.log(err.message);
        setButtonLoading(false);
      },
    });
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
        <h4 className="title text-center">Convert Image</h4>

        <div className="row">
          <ImgUploader
            inputParams={inputParams}
            setInputParams={setInputParams}
          />
        </div>

        {inputParams.imageData !== null && (
          <div className="row mx-1 mt-3">
            <div className="card p-0">
              <div className="card-header card-title">Choose new format</div>
              <div className="card-body">
                <div className="row justify-content-center my-2">
                  <div className="col-md-4 col-sm-6">
                    <div className="input-group input-group-sm mb-3">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                      >
                        From
                      </span>

                      <select
                        className="form-select form-select-sm"
                        name="imgFormat"
                        onChange={handelInput}
                        value={inputParams.imgFormat.toLowerCase()}
                      >
                        <option value={inputParams.imgFormat.toLowerCase()}>
                          {inputParams.imgFormat.toUpperCase()}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="input-group input-group-sm mb-3">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                      >
                        To
                      </span>

                      <select
                        className="form-select form-select-sm"
                        name="imgConvertFormat"
                        onChange={handelInput}
                        value={inputParams.imgConvertFormat}
                      >
                        {toExtenExtension.map((item, index) => {
                          if (
                            item.value !== inputParams.imgFormat.toLowerCase()
                          ) {
                            return (
                              <option key={index} value={item.value}>
                                {item.name}
                              </option>
                            );
                          }
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-12 text-center">
                    <button
                      className="btn"
                      onClick={imageDownload}
                      disabled={buttonLoading}
                    >
                      {buttonLoading ? (
                        <span className="spinner-border spinner-border-sm button-spinner"></span>
                      ) : (
                        <>
                          <span>Download</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImgConverter;
