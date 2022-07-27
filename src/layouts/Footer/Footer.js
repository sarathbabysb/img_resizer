import Moment from "moment";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy-right">
        Copyright © {moment().year()} {process.env.REACT_APP_NAME}
      </div>
    </footer>
  );
};

export default Footer;
