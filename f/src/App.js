import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';

function App() {
  const isAudioSupported = typeof window.Audio !== "undefined" ? true : false;

  return (
    isAudioSupported ? 
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes> : <div>Your browser does not support audio. Please update your browser to use this web site</div>
  );
}

export default App;
