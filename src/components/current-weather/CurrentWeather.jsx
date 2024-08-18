import "./CurrentWeather.css";

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const d = new Date(); 
let day = weekday[d.getDay()];

const CurrentWeather = ({ data }) => {
  return (
    <>
      <label className="today">Today is {day}</label>
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{data.city}</p>
            <p className="weather-description">{data.weather[0].description}</p>
          </div>
          <img
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
            alt="Weather"
          />
        </div>
        <div className="bottom">
          <p className="temperature">{Math.round(data.main.temp)}&deg;C</p>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label top">Details</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {Math.round(data.main.feels_like)}&deg;C
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
