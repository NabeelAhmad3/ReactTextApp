import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Aboutus from './components/Aboutus';
import Textform from './components/Textform';

function App() {
    return (<>
        <Navbar title="TextUtils" />
        <Textform heading="Enter the text to analyze" />
        </>
        // <Router>
        //     <Navbar title="TextUtils" />
        //     <div className="container">
            
        //         <Routes>
        //             <Route path="/" element={<Textform heading="Enter the text to analyze" />} />
        //             <Route path="/aboutus" element={<Aboutus />} />
        //         </Routes>
        //     </div>
        // </Router>
    );
}

export default App;
