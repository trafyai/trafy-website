// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import '@styles/common/header/NavBar.css'
// import logoColor from '@public/assets/Images/comman/navbar/trafy-black-logo.png'
// import arrow from '@public/assets/Images/comman/navbar/arrow-outward-white.svg';
// import hamburgerIcon from '@public/assets/Images/comman/navbar/hamburger-black.svg';
// import closeIcon from '@public/assets/Images/comman/navbar/close-black.svg';
// import { UserAuth } from '@context/AuthContext';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef(null);
//   const { user, logOut } = UserAuth(); // Access user state and logOut function


//   const handleNavigation = (targetPath) => {
//     setMenuOpen(false);
//     document.body.classList.remove('overflow');
  
//     if (targetPath.startsWith('#')) {
//       const element = document.querySelector(targetPath);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else if (targetPath.startsWith('http')) {
//       window.location.href = targetPath;
//     }
//   };

//   const getInitials = (name, email) => {
//     if (name) {
//       return name.charAt(0).toUpperCase();
//     }
//     if (email) {
//       return email.charAt(0).toUpperCase();
//     }
//     return ''; // Return empty string if both are not available
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-container" ref={menuRef}>
//         <Link href='/' className="navbar-logo">
//           <Image src={logoColor} alt="trafy logo" />
//         </Link>

//         <div className="navbar-contents">
//           <div className="navbar-academy" onClick={() => handleNavigation('#pathway-section')} >
//             Pathway
//           </div>
//           <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
//             Resources
//           </div>
//           <div className="navbar-community" onClick={() => handleNavigation('/')}>
//             Community
//           </div>

//           {user ? (
//             <Link href='/account-settings' className="navbar-profile" >
//               <div className='navbar-profile-name'>
//               {getInitials(user.displayName, user.email)} {/* Display first letter of user's name or email */}
//               </div>
//             </Link>
//           ) : (
//             <div className='navbar-buttons'>
//               <Link href='/login' className="navbar-login">
//                 Login
//               </Link>
//               <Link href='/signup' className="navbar-signup">
//                 Signup
//               </Link>
//             </div>
//           )}
//         </div>

//         <div className="navbar-contents-menu">
//           <Image src={menuOpen ? closeIcon : hamburgerIcon} alt={menuOpen ? 'close-icon' : 'hamburger-icon'}
//             width={24} height={24} onClick={() => setMenuOpen(!menuOpen)}/>
//         </div>
//       </div>
//       <div className={`navbar-contents-drop ${menuOpen ? 'open' : ''}`}>
//         <div className="navbar-contents-mobile">
//           <div className="navbar-academy" onClick={() => handleNavigation('#pathway-section')}>
//             Pathway
//           </div>
//           <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
//             Resources
//           </div>
//           <div className="navbar-community" onClick={() => handleNavigation('/')}>
//             Community
//           </div>
//         </div>
//         {user ?(
//         <Link href='/account-settings' className="navbar-profile"   onClick={() => setMenuOpen(false)}>
//               <div className='navbar-profile-name'>
//               {getInitials(user.displayName, user.email)} {/* Display first letter of user's name or email */}
//               </div>
//               <p>{user.email}</p>
//         </Link>):
//         (
//           <Link href='/signup' className='get-started' onClick={() => setMenuOpen(false)}>
//             Get Started
//           </Link>
//         )
//         }
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import '@styles/common/header/NavBar.css';
// import logoColor from '@public/assets/Images/comman/navbar/trafy-black-logo.png';
// import arrow from '@public/assets/Images/comman/navbar/arrow-outward-white.svg';
// import hamburgerIcon from '@public/assets/Images/comman/navbar/hamburger-black.svg';
// import closeIcon from '@public/assets/Images/comman/navbar/close-black.svg';
// import { UserAuth } from '@context/AuthContext';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);
//   const [scrolled, setScrolled] = useState(false);
//   const menuRef = useRef(null);
//   const { user } = UserAuth(); // Access user state

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;

//       if (currentScrollPos > prevScrollPos) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }

//       setScrolled(currentScrollPos > 50);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [prevScrollPos]);

//   const handleNavigation = (targetPath) => {
//     setMenuOpen(false);
//     document.body.classList.remove('overflow');

//     if (targetPath.startsWith('#')) {
//       const element = document.querySelector(targetPath);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else if (targetPath.startsWith('http')) {
//       window.location.href = targetPath;
//     }
//   };

//   const getInitials = (name, email) => {
//     if (name) return name.charAt(0).toUpperCase();
//     if (email) return email.charAt(0).toUpperCase();
//     return '';
//   };

//   return (
//     <div className={`navbar ${scrolled ? 'scrolled' : ''} ${visible ? 'visible' : 'hidden'}`}>
//       <div className="navbar-container" ref={menuRef}>
//         <Link href="/" className="navbar-logo">
//           <Image src={logoColor} alt="trafy logo" />
//         </Link>

//         <div className="navbar-contents">
//           <div className="navbar-academy" onClick={() => handleNavigation('#pathway-section')}>
//             Pathway
//           </div>
//           <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
//             Resources
//           </div>
//           <div className="navbar-community" onClick={() => handleNavigation('/')}>
//             Community
//           </div>

//           {user ? (
//             <Link href="/account-settings" className="navbar-profile">
//               <div className="navbar-profile-name">{getInitials(user.displayName, user.email)}</div>
//             </Link>
//           ) : (
//             <div className="navbar-buttons">
//               <Link href="/login" className="navbar-login">
//                 Login
//               </Link>
//               <Link href="/signup" className="navbar-signup">
//                 Signup
//               </Link>
//             </div>
//           )}
//         </div>

//         <div className="navbar-contents-menu">
//           <Image
//             src={menuOpen ? closeIcon : hamburgerIcon}
//             alt={menuOpen ? 'close-icon' : 'hamburger-icon'}
//             width={24}
//             height={24}
//             onClick={() => setMenuOpen(!menuOpen)}
//           />
//         </div>
//       </div>

//       <div className={`navbar-contents-drop ${menuOpen ? 'open' : ''}`}>
//         <div className="navbar-contents-mobile">
//           <div className="navbar-academy" onClick={() => handleNavigation('#pathway-section')}>
//             Pathway
//           </div>
//           <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
//             Resources
//           </div>
//           <div className="navbar-community" onClick={() => handleNavigation('/')}>
//             Community
//           </div>
//         </div>
//         {user ? (
//           <Link href="/account-settings" className="navbar-profile" onClick={() => setMenuOpen(false)}>
//             <div className="navbar-profile-name">{getInitials(user.displayName, user.email)}</div>
//             <p>{user.email}</p>
//           </Link>
//         ) : (
//           <Link href="/signup" className="get-started" onClick={() => setMenuOpen(false)}>
//             Get Started
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import '@styles/common/header/NavBar.css';
// import logoColor from '@public/assets/Images/comman/navbar/trafy-black-logo.png';
// import arrow from '@public/assets/Images/comman/navbar/arrow-outward-white.svg';
// import hamburgerIcon from '@public/assets/Images/comman/navbar/hamburger-black.svg';
// import closeIcon from '@public/assets/Images/comman/navbar/close-black.svg';
// import { UserAuth } from '@context/AuthContext';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const menuRef = useRef(null);
//   const { user, logOut } = UserAuth(); // Access user state and logOut function

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleNavigation = (targetPath) => {
//     setMenuOpen(false);
//     document.body.classList.remove('overflow');

//     if (targetPath.startsWith('#')) {
//       const element = document.querySelector(targetPath);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else if (targetPath.startsWith('http')) {
//       window.location.href = targetPath;
//     }
//   };

//   const getInitials = (name, email) => {
//     if (name) {
//       return name.charAt(0).toUpperCase();
//     }
//     if (email) {
//       return email.charAt(0).toUpperCase();
//     }
//     return ''; // Return empty string if both are not available
//   };

//   return (
//     <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//       <div className="navbar-container" ref={menuRef}>
//         <Link href='/' className="navbar-logo">
//           <Image src={logoColor} alt="trafy logo" />
//         </Link>

//         <div className="navbar-contents">
//           <div className="navbar-academy" onClick={() => handleNavigation('#pathway-section')}>
//             Pathway
//           </div>
//           <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
//             Resources
//           </div>
//           <div className="navbar-community" onClick={() => handleNavigation('/')}>
//             Community
//           </div>

//           {user ? (
//             <Link href='/account-settings' className="navbar-profile">
//               <div className='navbar-profile-name'>
//                 {getInitials(user.displayName, user.email)}
//               </div>
//             </Link>
//           ) : (
//             <div className='navbar-buttons'>
//               <Link href='/login' className="navbar-login">
//                 Login
//               </Link>
//               <Link href='/signup' className="navbar-signup">
//                 Signup
//               </Link>
//             </div>
//           )}
//         </div>

//         <div className="navbar-contents-menu">
//           <Image
//             src={menuOpen ? closeIcon : hamburgerIcon}
//             alt={menuOpen ? 'close-icon' : 'hamburger-icon'}
//             width={24} height={24}
//             onClick={() => setMenuOpen(!menuOpen)}
//           />
//         </div>
//       </div>
//       <div className={`navbar-contents-drop ${menuOpen ? 'open' : ''}`}>
//         <div className="navbar-contents-mobile">
//           <div className="navbar-academy" onClick={() => handleNavigation('#pathway-section')}>
//             Pathway
//           </div>
//           <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
//             Resources
//           </div>
//           <div className="navbar-community" onClick={() => handleNavigation('/')}>
//             Community
//           </div>
//         </div>
//         {user ? (
//           <Link href='/account-settings' className="navbar-profile" onClick={() => setMenuOpen(false)}>
//             <div className='navbar-profile-name'>
//               {getInitials(user.displayName, user.email)}
//             </div>
//             <p>{user.email}</p>
//           </Link>
//         ) : (
//           <Link href='/signup' className='get-started' onClick={() => setMenuOpen(false)}>
//             Get Started
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@styles/common/header/NavBar.css';
import logoColor from '@public/assets/Images/comman/navbar/trafy-black-logo.png';
import arrow from '@public/assets/Images/comman/navbar/arrow-outward-white.svg';
import hamburgerIcon from '@public/assets/Images/comman/navbar/hamburger-black.svg';
import closeIcon from '@public/assets/Images/comman/navbar/close-black.svg';
import { UserAuth } from '@context/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const { user } = UserAuth(); // Access user state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = ''; // Reset on unmount
    };
  }, [menuOpen]);

  const handleNavigation = (targetPath) => {
    setMenuOpen(false);
    if (targetPath.startsWith('#')) {
      const element = document.querySelector(targetPath);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (targetPath.startsWith('http')) {
      window.location.href = targetPath;
    }
  };

  const getInitials = (name, email) => {
    if (name) return name.charAt(0).toUpperCase();
    if (email) return email.charAt(0).toUpperCase();
    return '';
  };

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container" ref={menuRef}>
        <Link href='/' className="navbar-logo">
          <Image src={logoColor} alt="trafy logo" />
        </Link>

        <div className="navbar-contents">
          <div className="navbar-academy" onClick={() => handleNavigation('#pathway-section')}>
            Pathway
          </div>
          <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
            Resources
          </div>
          <div className="navbar-community" onClick={() => handleNavigation('/')}>
            Community
          </div>

          {user ? (
            <Link href='/account-settings' className="navbar-profile">
              <div className='navbar-profile-name'>{getInitials(user.displayName, user.email)}</div>
            </Link>
          ) : (
            <div className='navbar-buttons'>
              <Link href='/login' className="navbar-login">Login</Link>
              <Link href='/signup' className="navbar-signup">Signup</Link>
            </div>
          )}
        </div>

        <div className="navbar-contents-menu">
          <Image
            src={menuOpen ? closeIcon : hamburgerIcon}
            alt={menuOpen ? 'close-icon' : 'hamburger-icon'}
            width={24}
            height={24}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      <div className={`navbar-contents-drop ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-contents-mobile">
          <div className="navbar-academy" onClick={() => handleNavigation('#pathway-section')}>
            Pathway
          </div>
          <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
            Resources
          </div>
          <div className="navbar-community" onClick={() => handleNavigation('/')}>
            Community
          </div>
        </div>
        {user ? (
          <Link href='/account-settings' className="navbar-profile" onClick={() => setMenuOpen(false)}>
            <div className='navbar-profile-name'>{getInitials(user.displayName, user.email)}</div>
            <p>{user.email}</p>
          </Link>
        ) : (
          <Link href='/signup' className='get-started' onClick={() => setMenuOpen(false)}>
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
