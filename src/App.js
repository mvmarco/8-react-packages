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

      -----------------------------------------------------------------------
      EXAMPLE
      -----------------------------------

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />

      How is that different than this?

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>


      It's not about sending a user to Home - it will match on both examples.
      The problem is when you send a user to a second route - such as /about or /example - 
      that is where your second example fails and the first example works 

      ----------------------------------------------------------------------------
      the next steps are:

      go where this links are, for instance, the navbar. 
      and:

      1: import {Link} from 'react-router-dom''
      2: remove the <a> </a> and instead put <Link> </Link>
      3: add remove href="#" and instead put to="/contacts" for instance, same as the path

      as follow:
      <h1>
        <Link id="logo" to="/"> capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/"> 1. About Us </Link>
        </li>
        <li>
          <Link to="/work"> 2. Our Work </Link>
        </li>
        <li>
          <Link to="/contacts"> 3. Contact Us </Link>
        </li>
      </ul>

*/

// ############################
// FRAMER-MOTION
// ############################

/*
  https://www.framer.com/motion/ 
  it is a way of adding animation using React, since the styling is sometimes limiting.
  It adds effects on elements when a component is rendered on the screen

  1: npm install framer-motion
  2: import {motion} from 'framer-motion' where needed
  3: replace the tag of the element you want to add an animation
     for instance:  
     <motion.h2> bla bla bla </motion.h2>
  4: you add different properties such as animate which is an object:
     <motion.h2 animate={{
      opacity: 1
      transition:{
        duration: 2
      }
     }}>
     which is the final state and the initial state:
     initial={{
     opacity: 0
     }}>We work to make</motion.h2>


    IMPORTANT: animate, is a life property. Which means giving life to elements in a components
    and can be hooked to the state if we want and if the state changes animate changes as 
    consequences, check here: https://www.framer.com/motion/

    Since we can have lots of animations we can save them into a variable in the component
    called in framer motion, "variance", so to refactor the above code you can:
      
      const titleAnim = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: { duration: 2} },
      }  
      return (
        <motion.h2 variants={titleAnim} initial="hidden" animate="show">
          We work to make
        </motion.h2>
      )

    
     In simple terms the "variants" is the {object} and the "initial" and "animate" are the "".
     Another benefit of using the variants is that we can chain together multiple anumations.
     we can "stagger" other animations that are the same (the h2).
     for instance if we have an animated div we can add the animation of the h2 associated
     to the div itself, because he is the parent variant. So we can remove the 
     <motion.h2 variants={titleAnim} initial="hidden" animate="show">
     and use only: <motion.h2 variants={titleAnim} > and apply it to all the h2 we have.
     then we can go to the parent variant const, in the transition and add another property
     staggerChildren: 1. Which basically adds to all the h2 the same hidden and show, initial
     and animate but with a different transition time. It is important to notice that
     that initial and animate property on the parent and children need to have the same name
     such as "hidden" and "show" both in parent and children. You can also add another property
     called "when". That basically indicates when this transition time should occur:
     when: "afterChildren" so basically the div slide after the transition in opacity occurs.
     if you do not put nothing, both parent and children will start at the same time.


     if you have a styled.component and you need to add the variants you do, for example:
     const Work = styled(motion.div)`


:

  const AboutSection = () => {
  const titleAnim = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: { duration: 2} },
  }
  const containerAnim = {
    hidden: {x: 100},
    show: {x:0, transition: { duration: 0.75, ease: "easeOut", staggerChildren: 1}},
  }
  return (
    <Layout>
      <Description>
        <motion.div className="title" variants={containerAnim} initial="hidden" animate="show">
          <Hide>
            <motion.h2 variants={titleAnim} initial="hidden" animate="show">
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come{" "}
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </motion.div>
      </Description>
    </Layout>
  );
}


the best way would be add a new file in SRC called animation.js and add:

    export const pageAnimation = {
      hidden: {
        opacity: 0,
        y: 300
      },
      show: { 
        opacity:1,
        y: 0,
        transition: {
          duration: 1,
        }
      },
      exit: {
        opacity:0,
        y: 300,
        transition: {
          duration: 1,
        }
      }
    }

then import it and use the variants where needed, exit is needed to use "AnimatePresence"
check below
-----------------------------------------------------------------
  another important part of "framer-motion" is the "AnimatePresence":
  https://www.framer.com/api/motion/animate-presence/
  AnimatePresence allows components to animate out when they're removed from the React tree.
  so when you go to another component the animation goes back to the original status
  and shades in while the new one shades out.
  1: import {AnimatePresence} from "framer-motion"
  2: wrap the Switch <AnimatePresence exitBeforeEnter> exit before enter is a way of waiting
  that the first div shades in before the new one to shades out. Otherwise they shades in and out
  at the same time.
  3: create a   const location = useLocation();
  4: add to the switch: <Switch location={location} key={location.pathname}>
  the key is a way to let know react from where and to where we are moving
  5: add 


 
  

*/


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

