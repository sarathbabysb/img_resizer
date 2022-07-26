import { useState } from "react";
import ImgUploader from "../components/ImgUploader/ImgUploader";
import { downloadFile } from "../assets/js/custom";
import Compressor from "compressorjs";

const Converter = () => {

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
        <h4 className="title text-center">Converte Image</h4>

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
                        name="imgFrom"
                        onChange={handelInput}
                        value="jpeg"
                      >
                        <option value="jpeg">JPEG</option>
                        <option value="jpg">JPG</option>
                        <option value="png">PNG</option>
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
                        name="imgTo"
                        onChange={handelInput}
                        value="png"
                      >
                        <option value="jpeg">JPEG</option>
                        <option value="jpg">JPG</option>
                        <option value="png">PNG</option>
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

export default Converter;
