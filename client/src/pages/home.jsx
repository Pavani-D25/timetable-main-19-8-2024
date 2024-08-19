// // src/pages/Home.js

// import React from 'react';
// import NavScrollExample from '../components/Navbar';
// import ActionAreaCard from '../components/ActionAreaCard';

// const Home = () => {
//   return (
//     <div>
//       <NavScrollExample />
//       <ActionAreaCard />
//       <div className="container">
//         {/* Additional content if needed */}
//       </div>
//     </div>
//   );
// }

// export default Home;




// src/pages/Home.js
import React from 'react';
import NavScrollExample from '../components/Navbar';
import ActionAreaCard from '../components/ActionAreaCard';
import Chatbot from '../components/Chatbot'; // Import the Chatbot component

const Home = () => {
  return (
    <div>
      <NavScrollExample />
      <ActionAreaCard />
      <div className="container">
        {/* Chatbot added here */}
        <Chatbot />
      </div>
    </div>
  );
};

export default Home;
