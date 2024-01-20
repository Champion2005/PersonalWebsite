import './App.css';

import dt from './imgs/Donald_Trump.jpg';
import sh from './imgs/Stephen_Hawking.jpg';
import lj from './imgs/LeBron_James.jpg';
import dr from './imgs/Drake.jpg';


const App = () => {
  const years = ['1st', '2nd', '3rd', '4th'];
  let curYear = '1st';
  curYear = new Date().getMonth() === 8 ? years[new Date().getFullYear() - 2024] : years.find(() => {return curYear});

  return (
    <>
    <div className="w3-cell-row header">
      <div className="w3-container w3-cell">
        <h1 className="w3-text-white">Aditya Patel</h1>
      </div>

      <div className="w3-container w3-cell">
        <div className="w3-bar w3-center">
            <a id="navbar" className="w3-bar-item w3-button w3-round-large w3-xlarge w3-hover-teal w3-hover-text w3-text-white w3-right" href="https://www.linkedin.com/in/aditya-patel52/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a id="navbar" className="w3-bar-item w3-button w3-round-large w3-xlarge w3-hover-teal w3-hover-text w3-text-white w3-right" href="https://github.com/Champion2005" target="_blank" rel="noreferrer">Github</a>
            <a id="navbar" className="w3-bar-item w3-button w3-round-large w3-xlarge w3-hover-teal w3-hover-text w3-text-white w3-right" href='https://apatel.xyz/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</a>
        </div>
      </div>
    </div>

    <div className="section">
      <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>

    <div className="w3-margin-top w3-center w3-text-white">
      <h2><b>Hello.</b> I like programming.</h2>
      <h3>I am a <b>{curYear}</b> year computer science student at the University of Windsor.</h3>
    </div>

    <div className="w3-center w3-cell-row" style={{ 'padding-top': '50px' }}>
      <div className="w3-cell">
        <div className="w3-round-xlarge w3-animate-opacity w3-animate-zoom" style={{"background-color":"#284756", "margin":"20px"}}>
          <div className="w3-container" style={{'padding':'8px'}}>
              <img id="pfp" src={dt} className="w3-left" alt="" style={{ 'margin-right': '16px' }}></img>
              <p className="w3-left w3-text-white w3-xlarge" style={{ 'line-height': '16px' }}>Donald J. Trump | ★★★★★</p>
          </div>
          <div className="w3-container" style={{ 'padding': '8px' }}>
            <p className="w3-left-align w3-text-white w3-large">"Let me tell you about this guy, really smart, incredibly smart. He knows what he's doing, always. Every single time, he's just on top of it. Absolutely knows what's going on. Very impressive, believe me."</p>
          </div>
        </div>
      </div>
      <div className="w3-cell">
        <div className="w3-round-xlarge w3-animate-opacity w3-animate-zoom" style={{"background-color":"#284756", "margin":"20px"}}>
          <div className="w3-container" style={{'padding':'8px'}}>
              <img id="pfp" src={sh} className="w3-left" alt="" style={{ 'margin-right': '16px' }}></img>
              <p className="w3-left w3-text-white w3-xlarge" style={{ 'line-height': '16px' }}>Stephen Hawking | ★★★★☆</p>
          </div>
          <div className="w3-container" style={{ 'padding': '8px' }}>
              <p className="w3-left-align w3-text-white w3-large">"In all my years, I have seldom encountered an individual so replete with innovation and creativity. His potential is vast and it arouses great anticipation in me to observe what future endeavors he will undertake."</p>
          </div>
        </div>
      </div>
      <div className="w3-cell">
        <div className="w3-round-xlarge w3-animate-opacity w3-animate-zoom" style={{"background-color":"#284756", "margin":"20px"}}>
          <div className="w3-container" style={{'padding':'8px'}}>
              <img id="pfp" src={lj} className="w3-left" alt="" style={{ 'margin-right': '16px' }}></img>
              <p className="w3-left w3-text-white w3-xlarge" style={{ 'line-height': '16px' }}>LeBron James | ★★★★★</p>
          </div>
          <div className="w3-container" style={{ 'padding': '8px' }}>
              <p className="w3-left-align w3-text-white w3-large">"Aditya Patel is really killing it in the tech and AI game. The strides he's making are huge, and it's incredible to see his impact. He's changing the game, just like we try to do on the court. Big respect for what he's doing."</p>
          </div>
        </div>
      </div>
      <div className="w3-cell">
        <div className="w3-round-xlarge w3-animate-opacity w3-animate-zoom" style={{"background-color":"#284756", "margin":"20px"}}>
          <div className="w3-container" style={{'padding':'8px'}}>
              <img id="pfp" src={dr} className="w3-left" alt="" style={{ 'margin-right': '16px' }}></img>
              <p className="w3-left w3-text-white w3-xlarge" style={{ 'line-height': '16px' }}>Anita Max Wynn | ★★★★★</p>
          </div>
          <div className="w3-container" style={{ 'padding': '8px' }}>
              <p className="w3-left-align w3-text-white w3-large">"Always a great feeling to see Canadian talent getting the spotlight. Aditya Patel, man, he's having real motion out here. Love to see it, representing us on the global stage."</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
