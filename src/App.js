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


/* 
  What "react-router-dom" is a package that we can install (npm install react-router-dom) that
  render components based on where we are on the URL. Typically what you would do is, in a normal
  website using html css and JavaScript, when you click on another page for instance, about.html
  you load that page. when you go to home.html you go to home and so on. In React we do not do that
  because we do things dynamically in JavaScript. So what "react-router-dom" does, it is to literally
  render the component based on the url we are on. So if we are on "work" is gonna render the
  work component, the cool thing is that only that specific part of the page is going to re-render
  and not the whole page. Typically when you load a index.html or about.html the whole page is
  going to refreshing. With React not.


  1.step: go to index.js and import the react router: import {BrowserRouter} from 'react-router-dom'
          this basially gives us the ability to do routing. 
  2.step: how? taking the app and wrap it inside a <BrowserRouter> tag as follow:
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
    document.getElementById('root')
    );
  3.step go to App.js and: import { Switch, Route, useLocation } from "react-router-dom";
  4. add the   we import Route, to speficy where to render the component inside ot if.
     But it does not give an exact route. If you wrote the path="/"
     and another path="/work" react will render both, because it notices the "/" as first
     match.

     With "switch" the component get rendered as soon as it matches the first url or the first path,
     so if it matches the slash is not going to the other ones (paths or url) anymore. It is
     not going to work or contacts. As soon as it matches the first one, is gonna stop and render
     the component and it is gonna ignore everything else. So you wrap the in the "switch" 
     all the "route".

     We you use "exact" on the slash path, to say: render this specific "/" as the exact path
     and if you don't find it render the others, because now the others are not anymore exactly
     a single /.

      function App() {
        return (
        <div className="App">
          <GlobalStyle />
          <Nav />
          <Switch>
            <Route path="/">
              <AboutUs />
            </Route>
            <Route path="/work">
              <OurWork />
            </Route>
            <Route path="/contacts">
              <ContactUs />
            </Route>
          </Switch>
        </div>
        );
      }
*/

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
--------------------------------------------------------------------------------------------------
  if you want to customize specific style for this spefic component you can.
  For example the layout of the Services section in a different than the AboutSection.

  you can create either a const:

  const Services = styled.div`
    put the style here 
  `

  or copy the one from the about section, in case it is the same, but it is a way
  to change just the name of the div and then customize the style from there

  const Services = styled(Layout)`
    here you can customize everything you want from the original Layout style
  `

  then you use Services as styled component
*/

