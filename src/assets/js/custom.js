export const stripHTML =(myString) => {
    return myString.replace(/(<([^>]+)>)/gi, "");
}

export const buildObject = (str = "") => {
  const strArr = str.split(",");
  return strArr;
};

export const tableSelectAllRow = () => {
    console.log('hi');
}

export const percentage = (value, total, toFixed=0) => {
   let per = (value/total) * 100;
   return per.toFixed(toFixed);
};

export const bytesToSize = (bytes) => {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
};

export const downloadFile = (data, fileName) => {
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
};