const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__about">
          <a href="#">
            <h4>Space</h4>
          </a>
          <p>
            The best design for your web studio website. Vitae nulla nunc
            euismod vel pretium tellus accumsan semper. Vitae nulla nunc euismod
            vel pretium tellus accumsan semper.{" "}
          </p>
        </div>
        <div className="footer__pages">
          <h4>Pages</h4>
          <a href="#">Templates</a>
          <a href="#">Price</a>
          <a href="#">Help</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer__demos">
          <h4>Demos</h4>
          <a href="#">Dark theme</a>
          <a href="#">Light theme</a>
          <a href="#">Classic theme</a>
        </div>
        <div className="footer__resources">
          <h4>Resources</h4>
          <a href="#">Documentation</a>
        </div>
      </div>
      <div className="footer__footnote flex ">
        <div className="footer__container-footnote">
          <h5>© 2019-2020 All Rights Reserved.</h5>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
