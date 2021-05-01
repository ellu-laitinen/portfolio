import React, { createContext, useState } from "react";

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [project, setProject] = useState([
    {
      id: 1,
      name: "Music from my year",
      desc:
        "Music From My Year is a React App that uses Spotify API. The user can select the year, genre and the amount of results they want to get. Background image and title font change with each decade. It was a group project, made by 3 students in 3,5 weeks.",
      img: "./images/my-music3.png",
      alt: "App results example page",
      link: "http://lauratellervo.fi/mymusic/#",
      code: "https://github.com/ellu-laitinen/music-app",
    },
    {
      id: 2,
      name: "Christmas advent calendar for kids",
      desc:
        "A christmas advent calendar I made for kids. I Finnish only! React app. Uses Localstorage to keep the opened windows open after refreshing the page. At the moment all windows can be opened, but from Dec 1st 2020 you can only open the current and previous days' windows.",
      img: "./images/kalenteri2.jpg",
      alt: "Christmas advent calendar with two windows open",
      link: "https://lunas-calendar.web.app/",
      code: "https://github.com/ellu-laitinen/lunas-calendar",
    },
    {
      id: 4,
      name: "Speed Game",
      desc: "School project: a classic speed game. Built with React.",
      img: "./images/speed_game.jpg",
      alt: "Speed game",
      link: "https://speed-game-2.web.app",
      code: "https://github.com/ellu-laitinen/speed-game",
    },
    {
      id: 5,
      name: "Weather App",
      desc:
        "Project made with Udemy.com course The Complete Node.js Developer(3rd Edition) by Andrew Mead. Uses data from mapbox.com and weatherstack.com",
      img: "./images/weather-app1.png",
      alt: "Weather App",
      link: "https://ellun-weather-application.herokuapp.com/",
      code: "https://github.com/ellu-laitinen/node-weather-app",
    },
  ]);

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
