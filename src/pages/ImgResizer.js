import { useState } from "react";
import ImgUploader from "../components/ImgUploader/ImgUploader";
import { downloadFile } from "../assets/js/custom";
import Compressor from "compressorjs";

const ImgResizer = () => {

  const [buttonLoading, setButtonLoading] = useState(false);
  const [inputParams, setInputParams] = useState({
    imageData: null,
    imageFileName: "",
    imgQuality: 1,
    imgWidth: "",
    imgHeight: "",
    imgFormat: "",
  });

  const handelInput = (e) => {
    e.persist();
    setInputParams({ ...inputParams, [e.target.name]: Number(e.target.value) });
  };

  const imageDownload = (e) => {
    setButtonLoading(true);

    new Compressor(inputParams.imageData, {
      width: inputParams.imgWidth,
      height: inputParams.imgHeight,
      quality: inputParams.imgQuality,
      success(result) {
        downloadFile(result, inputParams.imageFileName);
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
        <h4 className="title text-center">Resize Image</h4>

        <div className="row">
          <ImgUploader
            inputParams={inputParams}
            setInputParams={setInputParams}
          />
        </div>

        {inputParams.imageData !== null && (
          <div className="row mx-1 mt-3">
            <div className="card p-0">
              <div className="card-header card-title">
                Choose new quality and size
              </div>
              <div className="card-body">
                <div className="row my-2">
                  <div className="col-md-4 col-sm-6">
                    <div className="input-group input-group-sm mb-3">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                      >
                        Quality (%)
                      </span>

                      <select
                        className="form-select form-select-sm"
                        name="imgQuality"
                        onChange={handelInput}
                        value={inputParams.imgQuality}
                      >
                        <option value="1">1</option>
                        <option value="0.8">0.8</option>
                        <option value="0.6">0.6</option>
                        <option value="0.4">0.4</option>
                        <option value="0.2">0.2</option>
                        <option value="0">0</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="input-group input-group-sm mb-3">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                      >
                        Width
                      </span>
                      <input
                        type="number"
                        name="imgWidth"
                        className="form-control"
                        onChange={handelInput}
                        value={inputParams.imgWidth}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="input-group input-group-sm mb-3">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                      >
                        Height
                      </span>
                      <input
                        type="number"
                        name="imgHeight"
                        className="form-control"
                        onChange={handelInput}
                        value={inputParams.imgHeight}
                      />
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

export default ImgResizer;
