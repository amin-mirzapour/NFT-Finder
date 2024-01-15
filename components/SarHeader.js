import Image from "next/image";

function SarHeader() {
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="header">
            <div className="header-login">
              <a href="#">کیف پول چابک</a>
            </div>
            <div className="header-search">
              <div className="header-search-input">
                <input type="text" />
              </div>
              <div className="header-search-button">
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            <div className="header-logo">
              <Image src="/tiola-logo.png" width={270} height={95} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SarHeader;
