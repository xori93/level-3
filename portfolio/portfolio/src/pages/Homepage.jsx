import React from 'react'
import Header from '../components/Header'
import About from '../pages/About';
import Skills from './Skills';
import Projects from './Projects';
import { createContext, useContext, useState } from 'react';


// structured application, useContext the API. That gives us a global storage that our entire application has access to. Similar to local storage. Moved all the variables to components, so creating global variables
// used the global variables
// changed the themeContext of the icons on the pages

export const ThemeContext = createContext('light');

const Homepage = () => {


  const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light"
  //   setTheme(newTheme);
  //   document.documentElement.classList.toggle('dark', newTheme === "dark");
  // }


  return (
    
    <ThemeContext value={{theme, setTheme}}>
        <div className={theme === "dark" ? "bg-slate-900 text-white"  : "bg-white"}>
        <Header />
        <About />
        <Projects />
        <Skills />
    </div>
      </ThemeContext>



  )
}

export default Homepage