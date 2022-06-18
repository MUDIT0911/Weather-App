// import React from 'react'
// import "./Weather.css"

// const Weather = () => {
//   return (
//     <>
//         <div className="wrap">
//             <div className="search">
//                 <input type="search"
//                 placeholder='Search...'
//                 className='searchTerm'
//                 id="search"
//                 autoFocus />
//                 <button className="searchButton" type='search'>
//                     search
//                 </button>

//             </div>
//         </div>
//         <article className="widget">
//             <div className="temperature">
//                 <i className={"wi wi-day-sunny"}></i>
//             </div>

//             <div className="weatherInfo">
//                 <div className="temperature">
//                     <span>25.5&deg;</span>

//                 </div>
//                 <div className="description">
//                     <div className="weatherCondition">sunny</div>
//                     <div className="place">pune,India</div>

//                 </div>

//             </div>
//             <div className="date">{new Date().toLocaleString()}</div>
//             <div className="extra-temp">
//                 <div className="temp-info-minmax">
//                     <div className="two-sided-section">
//                         <p>
//                             <i className={"wi wi-sunset"}></i>
//                             </p>
//                             <p className="extra-info-leftside"></p>
//                     </div>
//                 </div>
//             </div>


//         </article>

//         </>
      
    
//   )
// }

// export default Weather










import React, { useEffect } from "react";


const Weather = ({tempInfo})=>{
 const{ temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}=tempInfo

  const [weatherState, setWeatheState] = React.useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }

  }, [weathermood]);

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weather;
