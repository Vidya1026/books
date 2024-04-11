// import React, { useState, useEffect } from 'react';
// import '../css/Scrollbar.css';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Import your CSS file for styling

// const ScrollButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Function to handle scroll event
//   const handleScroll = () => {
//     if (window.pageYOffset > 300) { // Adjust the threshold as needed
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   // Add scroll event listener when component mounts
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Function to scroll to the top
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth' // Add smooth scrolling behavior
//     });
//   };

//   return (
//     <div>
//       {isVisible && (
//         <button className="scroll-btn" onClick={scrollToTop}>
//        <ArrowUpwardIcon/>
//         </button>
//       )}
//     </div>
//   );
// };

// export default ScrollButton;
