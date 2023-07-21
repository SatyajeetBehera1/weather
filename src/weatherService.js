const API_KEY = "37f5322384188df415959b0fd4bd9760";

const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity, sea_level },
    sys:{sunrise,sunset},
    wind: { speed },
    sys: { country },
    name,
    cod,
  } = data;

  const { description, icon, main } = weather[0];

  return {
    description,
    main,
    iconURL: makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
    cod,
    sea_level,
    sunrise,
    sunset,
  };
};

export { getFormattedWeatherData };
