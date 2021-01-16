import React from 'react';
import "../scss/home.scss";
import Chart from "react-apexcharts";

function home(){
    const state =   {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          },
        },
        
        color:['#3f51b5'],
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      };
    return(
        <div className="home-wrap">
            <div className="topCon myWallet itemChild1"></div>
            <div className="topCon itemChild2"></div>
            <div className="topCon itemChild3"></div>
            <div className="topCon itemChild4"></div>
            <div className="chartCon">
                <Chart
                    options={state.options}
                    series={state.series}
                    width="700"
                    height="300"
                    type="line"       
                    color={state.color}  
                />
            </div>

        </div>
    )
}
export default home;