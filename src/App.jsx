import React, { Suspense } from 'react';
import Navbar from "./components/Navbar";
import About from "./components/About";

// Lazy loading des composants non critiques
const Formations = React.lazy(() => import("./components/Formations"));
const Competences = React.lazy(() => import("./components/Competences"));
const Project = React.lazy(() => import("./components/Project"));
const Contact = React.lazy(() => import("./components/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));

// Composant de chargement
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center py-5">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Chargement...</span>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-vh-100">
      <header>
        <Navbar/>
      </header>
      <main>
        <About/>
        <div className="section-separator"></div>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Formations/>
        </Suspense>
        <div className="section-separator"></div>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Competences/>
        </Suspense>
        <div className="section-separator"></div>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Project/>
        </Suspense>
        <div className="section-separator"></div>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Contact/>
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Footer/>
        </Suspense>
      </main>
    </div>
  );
}

export default App;