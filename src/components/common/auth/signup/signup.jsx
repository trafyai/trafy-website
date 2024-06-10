// 'use client';

// import React, { useState } from "react";
// import '@styles/common/auth/login.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/database';
// import Link from "next/link";
// import { useRouter } from 'next/navigation';
// import { UserAuth } from "@context/AuthContext";
// import { auth } from "@firebase";

// const Signup = () => {
//     const [fname, setFname] = useState('');
//     const [lname, setLname] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmpassword, setConfirmPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [fnameError, setFnameError] = useState('');
//     const [lnameError, setLnameError] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [confirmPasswordError, setConfirmPasswordError] = useState('');
//     const [allFieldError, setAllFieldError] = useState('');
//     const [firebaseError, setFirebaseError] = useState(''); // State to handle Firebase errors
//     const router = useRouter();

//     const { googleSignIn, logOut, signUpWithEmail } = UserAuth();

//     const handleSumbit = async (e) => {
//         e.preventDefault();

//         // Reset previous error messages
//         setFnameError('');
//         setLnameError('');
//         setEmailError('');
//         setPasswordError('');
//         setConfirmPasswordError('');
//         setAllFieldError('');
//         setFirebaseError('');

//         // Form validation
//         if (!fname.trim() || !lname.trim() || !email.trim() || !password.trim() || !confirmpassword.trim()) {
//             setAllFieldError("Please fill in all fields.");
//             return;
//         }

//         if (!/^[a-zA-Z]*$/.test(fname)) {
//             setFnameError("First name should contain only alphabets.");
//             return;
//         }

//         if (!/^[a-zA-Z]*$/.test(lname)) {
//             setLnameError("Last name should contain only alphabets.");
//             return;
//         }

//         if (!/^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+$/.test(email)) {
//             setEmailError("Please enter a valid email address.");
//             return;
//         }

//         if (password.length < 8) {
//             setPasswordError("Password should be at least 8 characters long.");
//             return;
//         }

//         if (password !== confirmpassword) {
//             setConfirmPasswordError("Passwords do not match.");
//             return;
//         }

//         try {
//             await signUpWithEmail(email, password);
//             router.push('/');
//         } catch (error) {
//             if (error.code === 'auth/email-already-in-use') {
//                 setFirebaseError('An account with this email already exists. Please log in.');
//             } else {
//                 setFirebaseError('An error occurred during sign up. Please try again.');
//             }
//             console.log(error);
//         }
//     }

//     const handleGoogleSignIn = async () => {
//         try {
//             await googleSignIn();
//             router.push('/');
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     }

//     const toggleConfirmPasswordVisibility = () => {
//         setShowConfirmPassword(!showConfirmPassword);
//     }

//     return (
//         <div className="signup">
//             <div className="signup-container">
//                 <div className="signup-heading"><h1>Create Your Account</h1></div>
//                 {firebaseError && <div className="error-message">{firebaseError}</div>}
//                 <form className="form" onSubmit={handleSumbit}>
//                     <div className="Name">
//                         <div className="fname">
//                             <input type="text" value={fname} placeholder="Enter first name" autoComplete="off" name="fname"
//                                 className="fname-holder" onChange={(e) => setFname(e.target.value)} />
//                             {fnameError && <span className="error-message" style={{ width: "100%" }}>{fnameError}</span>}
//                         </div>
//                         <div className="lname">
//                             <input type="text" value={lname} placeholder="Enter last name" autoComplete="off" name="lname"
//                                 className="lname-holder" onChange={(e) => setLname(e.target.value)} />
//                             {lnameError && <span className="error-message">{lnameError}</span>}
//                         </div>
//                     </div>
//                     <div className="Email">
//                         <input type="text" value={email} placeholder="Enter email" required autoComplete="off" name="email"
//                             className="email-holder" onChange={(e) => setEmail(e.target.value)} />
//                         {emailError && <span className="error-message">{emailError}</span>}
//                     </div>
//                     <div className="Password">
//                         <div className="password-input">
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 value={password}
//                                 placeholder="Enter password"
//                                 required autoComplete="off"
//                                 name="password"
//                                 className="password-holder"
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             <span className="password-toggle" onClick={togglePasswordVisibility}>
//                                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//                             </span>
//                         </div>
//                         {passwordError && <span className="error-message">{passwordError}</span>}
//                     </div>
//                     <div className="Password">
//                         <div className="confirm-password-input">
//                             <input
//                                 type={showConfirmPassword ? "text" : "password"}
//                                 value={confirmpassword}
//                                 placeholder="Confirm password"
//                                 required autoComplete="off"
//                                 name="confirmpassword"
//                                 className="password-holder"
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                             />
//                             <span className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
//                                 <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
//                             </span>
//                         </div>
//                         {confirmPasswordError && <span className="error-message">{confirmPasswordError}</span>}
//                     </div>
//                     <div className="SignUp-button">
//                         <button className="signup-btn" type="submit">Sign Up</button>
//                     </div>

//                     <div className="divider"></div>

//                     <div className="google-signin">
//                         <button type="button" className="login-with-google-btn" onClick={handleGoogleSignIn}>Sign up with Google</button>
//                     </div>

//                     <p>Already have an account? <Link href="/login"> Login</Link> </p>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Signup;
'use client';
import React, { useState } from "react";
import '@styles/common/auth/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { UserAuth } from "@context/AuthContext";
import Modal from '@components/Modal';

const Signup = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [fnameError, setFnameError] = useState('');
    const [lnameError, setLnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [allFieldError, setAllFieldError] = useState('');
    const [firebaseError, setFirebaseError] = useState(''); // State to handle Firebase errors
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const router = useRouter();

    const { googleSignIn, signUpWithEmail } = UserAuth();

    const validateFname = (value) => {
        if (!/^[a-zA-Z]*$/.test(value)) {
            setFnameError("First name should contain only alphabets.");
        } else {
            setFnameError('');
        }
    }

    const validateLname = (value) => {
        if (!/^[a-zA-Z]*$/.test(value)) {
            setLnameError("Last name should contain only alphabets.");
        } else {
            setLnameError('');
        }
    }

    const validateEmail = (value) => {
        if (!/^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+$/.test(value)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError('');
        }
    }

    const validatePassword = (value) => {
        if (value.length < 8) {
            setPasswordError("Password should be at least 8 characters long.");
        } else {
            setPasswordError('');
        }
    }

    const validateConfirmPassword = (value) => {
        if (value !== password) {
            setConfirmPasswordError("Passwords do not match.");
        } else {
            setConfirmPasswordError('');
        }
    }

    const handleSumbit = async (e) => {
        e.preventDefault();

        // Reset previous error messages
        setAllFieldError('');
        setFirebaseError('');

        // Form validation
        if (!fname.trim() || !lname.trim() || !email.trim() || !password.trim() || !confirmpassword.trim()) {
            setAllFieldError("Please fill in all fields.");
            return;
        }

        if (fnameError || lnameError || emailError || passwordError || confirmPasswordError) {
            setAllFieldError("Please correct the errors before submitting.");
            return;
        }

        try {
            await signUpWithEmail(email, password);
            router.push('/');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setFirebaseError('An account with this email already exists. Please log in.');
                setShowModal(true); // Show the modal
            } else {
                setFirebaseError('An error occurred during sign up. Please try again.');
                setShowModal(true); // Show the modal
            }
            console.log(error);
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className="signup">
            <div className="signup-container">
                <div className="signup-heading"><h1>Create Your Account</h1></div>
                {allFieldError && <div className="error-message">{allFieldError}</div>}
                <form className="form" onSubmit={handleSumbit}>
                    <div className="Name">
                        <div className="fname">
                            <input
                                type="text"
                                value={fname}
                                placeholder="Enter first name"
                                autoComplete="off"
                                name="fname"
                                className="fname-holder"
                                onChange={(e) => { setFname(e.target.value); validateFname(e.target.value); }}
                                onBlur={(e) => validateFname(e.target.value)}
                            />
                            {fnameError && <span className="error-message" style={{ width: "100%" }}>{fnameError}</span>}
                        </div>
                        <div className="lname">
                            <input
                                type="text"
                                value={lname}
                                placeholder="Enter last name"
                                autoComplete="off"
                                name="lname"
                                className="lname-holder"
                                onChange={(e) => { setLname(e.target.value); validateLname(e.target.value); }}
                                onBlur={(e) => validateLname(e.target.value)}
                            />
                            {lnameError && <span className="error-message">{lnameError}</span>}
                        </div>
                    </div>
                    <div className="Email">
                        <input
                            type="text"
                            value={email}
                            placeholder="Enter email"
                            required
                            autoComplete="off"
                            name="email"
                            className="email-holder"
                            onChange={(e) => { setEmail(e.target.value); validateEmail(e.target.value); }}
                            onBlur={(e) => validateEmail(e.target.value)}
                        />
                        {emailError && <span className="error-message">{emailError}</span>}
                    </div>
                    <div className="Password">
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                placeholder="Enter password"
                                required
                                autoComplete="off"
                                name="password"
                                className="password-holder"
                                onChange={(e) => { setPassword(e.target.value); validatePassword(e.target.value); }}
                                onBlur={(e) => validatePassword(e.target.value)}
                            />
                            <span className="password-toggle" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        {passwordError && <span className="error-message">{passwordError}</span>}
                    </div>
                    <div className="Password">
                        <div className="confirm-password-input">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmpassword}
                                placeholder="Confirm password"
                                required
                                autoComplete="off"
                                name="confirmpassword"
                                className="password-holder"
                                onChange={(e) => { setConfirmPassword(e.target.value); validateConfirmPassword(e.target.value); }}
                                onBlur={(e) => validateConfirmPassword(e.target.value)}
                            />
                            <span className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        {confirmPasswordError && <span className="error-message">{confirmPasswordError}</span>}
                    </div>
                    <div className="SignUp-button">
                        <button className="signup-btn" type="submit">Sign Up</button>
                    </div>

                    <div className="divider"></div>

                    <div className="google-signin">
                        <button type="button" className="login-with-google-btn" onClick={handleGoogleSignIn}>Sign up with Google</button>
                    </div>

                    <p>Already have an account? <Link href="/login"> Login</Link> </p>
                </form>
            </div>
            <Modal show={showModal} handleClose={closeModal}>
                <p>{firebaseError}</p>
                {firebaseError === 'An error occurred during sign up. Please try again.' && (
                    <button onClick={closeModal}>Close</button>
                )}
                {firebaseError === 'An account with this email already exists. Please log in.' && (
                    <Link href="/login">
                        <button onClick={closeModal}>Login</button>
                    </Link>
                )}
            </Modal>
        </div>
    );
}

export default Signup;
