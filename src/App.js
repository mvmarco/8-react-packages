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
  and not a real componet. 
  
  ---------------------------------------------------------------------------------------------
  THIS IS FOR A GLOBAL STYLE FILE: The globalStyle file's purpose is for only styling things 
  like the HTML, body, *, etc. It's not meant to be reused, only done once.

  Now if we want to have a global style for the whole page we have to:

  1. create in src a GlobalStyle.js file
  2. the global style will look like something like this:

  import {createGlobalStyle} from 'styled-components';

  const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body{
      background: #1b1b1b;
    }
    button{
      font-weight: bold;
      font-size: 1.1rem;
      cursor: pointer;
      padding: 1rem 2rem;
      border: 3px solid #23d997;
      background: transparent;
      color:white;
      transition: all 0.5 ease;
      &:hover{
        background-color: #23d997;
        color: white;
      }
    }
  `;

export default GlobalStyle;

  3. import the global style in App.js: import GlobalStyle from '.components/GlobalStyle';
  4: add the global style as a component:
      function App() {
        return (
          <div className="App">
            <h1>Film</h1>
            <GlobalStyle />
            <AboutUs />
          </div>
        );
      }

     export default App;
----------------------------------------------------------------------------------------------
IF YOU DO NOT WANT SPEFIC STYLE ONLY IN ONE PAGE IT IS COMMON TO CREATE A SINGLE FILE, IN SRC
CALLED style.js

In there you can put all the reusable styles for descriptions, images, etc. 
that may be imported to multiple components to be reused across the project.

1: you import: import styled from 'styled-components';
2: you export every single const

import styled from 'styled-components';
//styled components
export const About = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content:space-between;
  padding: 5rem 10rem;
  color: #ffffff;
`

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2{
    font-weight: lighter;
  }


  3: you import: import {About, Description, Image, Hide,} from '../styles'; where needed

`
*/

