import React, { useState, useEffect, useRef } from "react";
import NavCSS from './../Nav/Nav.module.css';
import logo from '../../assets/sfdotalogo.png';
import sven from '../../assets/sven.gif';
import ta from '../../assets/ta.gif';
import Sign_in from "../Main_container/SignFunction/Sign_in";
import SignUp from "../Main_container/SignFunction/Sign_up";
import SignCss from '../Main_container/SignFunction/Sign.module.css';

function Nav({ onShowMMRBoosting }) {
  const [activeModal, setActiveModal] = useState(null);
  const [activeMenu, setActiveMenu] = useState(false);
  const navRef = useRef(null);

  const handleClick = (modalType) => {
    if (activeModal === modalType) {
      setActiveModal(null); // Close the modal if it's already open
      setActiveBlur(false); // Optionally remove blur if needed
    } else {
      setActiveModal(modalType); // Open the modal
      setActiveBlur(true);
    }
  };

  const handleBoostingClick = () => {
    setActiveModal(null);
    onShowMMRBoosting();
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleMenuToggle = () => {
    setActiveMenu(true);
  };


  const handleDocumentClick = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setActiveMenu(false);
    }
  };

  useEffect(() => {
    if (activeMenu) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [activeMenu]);

  return (
    <div
      className={`${NavCSS.NavBar} ${activeMenu ? NavCSS.showmenu : ''}`}
      ref={navRef}
    >
      <i className='bx bx-menu-alt-left' id={`${NavCSS.menu}`} onClick={handleMenuToggle}></i>
      <div className={NavCSS.icons} >
        <i className='bx bxs-moon bx-tada-hover' title="dark mode" id={`${NavCSS.dark_mode}`}></i>
        <i className='bx bxs-bell-ring bx-tada-hover' title="notifications" id={`${NavCSS.notif}`}></i>
        <i className='bx bxs-user-circle bx-tada-hover' title="user profile" id={`${NavCSS.profile}`}></i>
      </div>
      <img src={logo} alt="error" className={`${NavCSS.logo}`} />
      <h1 className={`2xl:text-3xl xl:text-2xl lg:text-2xl md:text-base sm:text-xl ${NavCSS.buluming}`}>
        BULUMING SERVICES
      </h1>

      <img src={sven} alt="error" className={`${NavCSS.sven}`} />
      <div>
        <ul className={`2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl xs:text-3xl ${NavCSS.user_options}`}>
          <li>
            <a id="boosting" onClick={handleBoostingClick} href="#" target="_self">
              ✔️ MMR BOOSTING
            </a>
          </li>
          <li><a id="coach" href="#">🎧 COACHING</a></li>
          <li><a id="arcana" href="#">☄️ ARCANA PROGRESS</a></li>
          <li><a id="other" href="#">➕ ABOUT</a></li>
        </ul>
      </div>
      <img src={ta} alt="error" className={`${NavCSS.ta}`} />
      <div className={`${NavCSS.btns}`}>
        <button id={`${NavCSS.Sign_in}`} onClick={() => handleClick('signIn')}>▶️Sign-in</button>
        <button id={`${NavCSS.Sign_up}`} onClick={() => handleClick('signUp')}>✍Sign-up</button>
      </div>

      {activeModal === 'signIn' && (
        <div className={SignCss.modal}>
          <Sign_in closeModal={closeModal} />
        </div>
      )}

      {activeModal === 'signUp' && (
        <div className={SignCss.modal}>
          <SignUp closeModal={closeModal} />
        </div>
      )}
    </div>
  );
}

export default Nav;
