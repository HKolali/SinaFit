import { CiHome } from "react-icons/ci";
import { PiArticleThin } from "react-icons/pi";
import { SiFuturelearn } from "react-icons/si";
import './style/App.css';

function App() {
  return (
    <div className="app">
      <div className="leftSide"></div>
      <div className="rightSide">
        <img className='logo' src="./image/logo.png" alt="logo" />
        <div className="menuWrapper">
          <div className="menuItem active">
            <span className="menuTitle">صفحه اصلی</span>
            <CiHome className="menuIcon" />
          </div>
          <div className="menuItem">
            <span className="menuTitle">خدمات</span>
            <CiHome className="menuIcon" />
          </div>
          <div className="menuItem">
            <span className="menuTitle">مکمل‌های ورزشی</span>
            <CiHome className="menuIcon" />
          </div>
          <div className="menuItem">
            <span className="menuTitle">آموزش حرکات</span>
            <SiFuturelearn className="menuIcon" />
          </div>
          <div className="menuItem">
            <span className="menuTitle">تغذیه</span>
            <CiHome className="menuIcon" />
          </div>
          <div className="menuItem">
            <span className="menuTitle">مقالات</span>
            <PiArticleThin className="menuIcon" />
          </div>
          <div className="menuItem">
            <span className="menuTitle">ارتباط با من</span>
            <CiHome className="menuIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
