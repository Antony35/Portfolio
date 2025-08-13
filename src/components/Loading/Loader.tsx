import './Loader.css'

function Loader() {
  return (
    <div className="Loader">
      {/* Floating geometric shapes */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      {/* Main content */}
      <div className="loader-content">
        {/* Code-style animation */}
        <div className="code-loader">
          <div className="code-line">  status: 'loading...'</div>
        </div>

        {/* Geometric spinner */}
        <div className="geometric-loader"></div>

        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>

        {/* Loading text */}
        <div className="loading-text">Loading Portfolio</div>
      </div>
    </div>
  );
}

export default Loader;