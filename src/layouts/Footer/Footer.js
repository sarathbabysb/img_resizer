const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy-right">
        Copyright © 2022 {process.env.REACT_APP_NAME}
      </div>
    </footer>
  );
}

export default Footer;
