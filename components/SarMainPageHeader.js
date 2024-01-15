import Image from "next/image";

function SarMainPageHeader() {
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="header">
            <div className="header-login">
              <a href="#">کیف پول تیولا</a>
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
export default SarMainPageHeader;
