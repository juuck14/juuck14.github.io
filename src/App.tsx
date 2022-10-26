import React from "react";
import { useState } from "react";
import Navi from "./components/Navi";
import TitlePage from "./components/TitlePage";
import IntroducePage from "./components/IntroducePage";
import TimelinePage from "./components/TimelinePage";
import { useEffect } from "react";
import ContactPage from "components/ContactPage";




function App() {
  const [showHeader, setShowHeader] : [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
  const [headerStyle, setHeaderStyle] : [string, React.Dispatch<React.SetStateAction<string>>] = useState("default");
  const animationEndCallback : Function = () => {
      setShowHeader(true);
  }
  useEffect(() => {  
    window.scrollTo(0,0)
    
    window.addEventListener('scroll', () => {
      let scrollLocation = document.documentElement.scrollTop;
      setHeaderStyle(scrollLocation > 0 ? "dark" : "default");
    })

    const options: any = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add("active")
        else entry.target.classList.remove("active")
      })
    }, options)

    const observees = document.querySelectorAll(".observee");

    observees.forEach(el => observer.observe(el))

    const timelineObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log([...document.getElementsByClassName("timelineObservee")]
        .some(a=>a.classList.contains("active")))
        if([...document.getElementsByClassName("timelineObservee")]
          .some(a=>a.classList.contains("active"))) {
          document.getElementById("TimelineBar")?.classList.add("active")
          document.getElementById("TimelineToggle")?.classList.add("active")
        } else{
          document.getElementById("TimelineBar")?.classList.remove("active")
          document.getElementById("TimelineToggle")?.classList.remove("active")
        }

        if(entry.isIntersecting){
          entry.target.classList.add("active")
          document.getElementById(`${entry.target.id}link`)?.classList.add("active")
        } else{
          entry.target.classList.remove("active")
          document.getElementById(`${entry.target.id}link`)?.classList.remove("active")
        }
      })
    }, options)

    const timelineObservees = document.querySelectorAll(".timelineObservee");

    timelineObservees.forEach(el => timelineObserver.observe(el))

  }, [])
  
  return (
    <>
      {showHeader ? <Navi headerStyle={headerStyle}/> : ''}
      <TitlePage animationEnd={animationEndCallback}/>
      <IntroducePage/>
      <TimelinePage/>
      <ContactPage/>
    </>
  );
}

export default App;
