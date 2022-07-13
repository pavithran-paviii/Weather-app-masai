import React from 'react'
import { DailyWeather } from './dailyWeather'

export const WeeklyWeather = ({weatherDetails}) => {
  if(weatherDetails){
    var dailyData = weatherDetails.daily;
  }
  return (
    <div id="weeklyWeatherDiv">
        {weatherDetails && dailyData.map((data)=>{
          return <DailyWeather data={data} key={data.dt}/>
        })}
    </div>
  )
}
