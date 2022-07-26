import { useState } from "react";
import ImgUploader from "../components/ImgUploader/ImgUploader";
import { downloadFile } from "../assets/js/custom";
import Compressor from "compressorjs";

const ImgCompressor = () => {

  const [buttonLoading, setButtonLoading] = useState(false);
  const [inputParams, setInputParams] = useState({
    imageData: null,
    imageFileName: "",
    imgQuality: 100,
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
        <h4 className="title text-center">Compress Image</h4>

        <div className="row">
          <ImgUploader
            inputParams={inputParams}
            setInputParams={setInputParams}
          />
        </div>

        {inputParams.imageData !== null && (
          <div className="row mx-1 mt-3">
            <div className="card p-0">
              <div className="card-header card-title">Compressed Image</div>
              <div className="card-body">
                <div className="row justify-content-center my-2">
                  <div className="col-md-6 col-sm-12">
                    <div className="input-group input-group-sm mb-3">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                      >
                        Compression ratio
                      </span>

                      <select
                        className="form-select form-select-sm"
                        name="imgQuality"
                        onChange={handelInput}
                        value={inputParams.imgQuality}
                      >
                        <option value="0">94.72%</option>
                        <option value="0.2">83.90%</option>
                        <option value="0.4">76.18%</option>
                        <option value="0.6">67.99%</option>
                        <option value="0.8">46.41%</option>
                        <option value="1">0%</option>
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

export default ImgCompressor;
