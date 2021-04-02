function App() {
  return (
    <div className="App">
      <h1>Packages</h1>
    </div>
  );
}

export default App;


// ############################
// COMMON PACKAGES TO INSTALL
// ############################

//  npm install react-router-dom framer-motion react-intersection-observer styled-components

// ############################
// REACT-ROUTER-DOM
// ############################

// ############################
// FRAMER-MOTION
// ############################

// ############################
// REACT-INTERSECTION-OBSERVER
// ############################

// ############################
// STYLED COMPONENTS
// ############################

/* 
  https://styled-components.com/

  What style components allow us to do is to write JavaScript styles but it will look 
  exactly like CSS properties. You could also write the style like:
  style={{backgroundColor: red}} but with styled components you do:

  const button = styled.a``

  the benefit is that everything is gonna be in one page.

  1.step: npm install --save styled-components
  2: import styled from 'styled-components';           wherever you gotta need it
  3: be sure you have the extension vscode-styled-components

  4: imagine you have a div:

  <div className="div">
    <h2>bla bla</h2>
  </div>

  5: you go on the bottom of the page before the export of the component function and add:

  const About = styled.div`
    min-height: 90vh;
    display: flex;
    justify-content:space-between;
    padding: 5rem 10rem;
    color: #ffffff;
    background: black;
  `

  styled is the name of your import in line 46

  6: you replace the div tag with <About> </About>:
  <About className="div">
    <h2>bla bla</h2>
  </About>

  a good practice would be call About, AboutStyle so everyone knows that it is a style component
  and not a real componet

*/

