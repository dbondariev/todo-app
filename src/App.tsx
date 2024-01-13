import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
