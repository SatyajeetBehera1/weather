import React from "react";
import "./descriptions.css";

import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { PiWavesLight } from "react-icons/pi";
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Descriptions = ({ weather, units}) => {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";
  const convert =(n)=>{
    let unix = n;
    let time = new Date(unix*1000);
    // console.log(date);
    time = time.toLocaleTimeString()    
    return time;
  }
  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
    {
      id: 7,
      icon: <PiWavesLight />,
      title: "Sea level",
      data: weather.sea_level,
      unit: "mamsl",
    },
    {
      id: 8,
      icon: <BsSunriseFill />,
      title: "Sun rise",
      data: convert(weather.sunrise),
      unit: "",
    },
    {
      id: 9,
      icon: <BsSunsetFill />,
      title: "Sun set",
      data: convert(weather.sunset),
      unit: "",
    },
  ];
  return (
    <div className="section section__descriptions">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description__card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Descriptions;
