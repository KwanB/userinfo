// import React, { useState, useEffect } from 'react';
// import axios from "axios";

// function App() {
//   const userData = async () => {
//     try {
//       const { data } = await axios.get('https://dummyjson.com/users');
//       console.log('data',data.users);
//     } catch (e) {
//       throw new Error(e);
//     }
//   };
//   useEffect(() => {
//     userData();
//   }, []);

//   return <div>Hello World</div>;
// }

// export default App;

import React from "react";
import Layout from './components/ui/Layout'

export default function App() {
  return <Layout></Layout>
  
}

