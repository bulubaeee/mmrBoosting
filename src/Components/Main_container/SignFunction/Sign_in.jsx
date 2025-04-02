import SignCss from '../SignFunction/Sign.module.css';

function Sign_in({ closeModal }) {  // Destructure closeModal from props
    return (
        <div className={SignCss.SignPannel}>
            <div onClick={closeModal} className={SignCss.close_button}>&times;</div>
            <p>Login</p>

            {/* Email input */}
            <label htmlFor="Sign_email">E-mail</label>
            <input
                type="text"
                id={SignCss.Sign_email}
                placeholder="Enter email or username"
            />

            {/* Password input */}
            <label htmlFor="Sign_pass">Password</label>
            <input
                type="password"
                id={SignCss.Sign_pass}
                placeholder="Enter password"
            />

            {/* Remember me checkbox */}
            <input type="checkbox" id={SignCss.Sign_remember} />
            <label htmlFor={SignCss.Sign_remember}>Remember me?</label>

            {/* Sign-in button */}
            <button id={SignCss.Sign_in_button}>Sign-in</button>

            {/* Forgot password link */}
            <a href="#" id={SignCss.Sign_forgot_pass}>Forgot password?</a>

            {/* Social media icons */}
            <div className={SignCss.Sign_in_widgets}>
                <i className='bx bxl-google bx-lg bx-tada-hover' id={SignCss.Sign_in_google}></i>
                <i className='bx bxl-facebook bx-lg bx-tada-hover' id={SignCss.Sign_in_fb}></i>
                <i className='bx bxl-steam bx-lg bx-tada-hover' id={SignCss.Sign_in_steam}></i>
            </div>
        </div>
    );
}

export default Sign_in;