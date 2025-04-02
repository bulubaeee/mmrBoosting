import SignCss from '../SignFunction/Sign.module.css';

function Sign_up({ closeModal }) {

    return (
        <>
            <div className={SignCss.Sign_up_Pannel}>

                <div onClick={closeModal} className={SignCss.close_btn}>&times;</div>
                <div className={SignCss.Sign_up_PannelCont}>
                    <p>Register</p>
                    <label htmlFor="user-reg">Username</label>
                    <input type="text" id={`${SignCss.user_reg}`} placeholder="Enter username" />

                    <label htmlFor="pass-reg">Password</label>
                    <input type="password" id={`${SignCss.user_reg}`} placeholder="Enter password" />

                    <label htmlFor="confirm-pass">Confirm Password</label>
                    <input type="password" id ={`${SignCss.confirm_pass}`} placeholder="Confirm password" />

                    <label htmlFor="e-mail-reg">Email</label>
                    <input type="email" id="e-mail-reg" placeholder="sample@gmail.com" />
                    <button id={`${SignCss.Sign_up_button}`} >Register</button>
                </div>
            </div>
        </>
    );
}

export default Sign_up;
