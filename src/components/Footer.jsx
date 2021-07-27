import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
    <div className="footer-padding"></div>
    <footer>
      <p>Copyright ⓒ {year} by Hậu Nguyễn</p>
    </footer>
    </>
  );
}

export default Footer;
