import React from 'react';
import "../scss/home.scss";
import Chart from "react-apexcharts";
import bit from "../images/bitcoin.svg";
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

      const state2 = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
      }
    return(
        <div className="home-wrap">
          <div className="grid-wrap">
              <div className="topCon myWallet itemChild1">
                <div className="walletCon">
                    내 자산 현황
                    <div className="coutour"></div>
                    <div className="price">300,000원</div>
                </div>
              </div>
              <div className="topCon itemChild2">
                <div className="topConbit">
                    관심 종목
                    <div className="coutour"></div>
                    <div className="price">300,000원</div>
                </div>
              </div>
              <div className="topCon itemChild3"></div>
              <div className="topCon itemChild4"></div>
              <div className="chartCon">
                  <Chart
                      options={state.options}
                      series={state.series}
                      width="900"
                      height="300"
                      type="line"       
                      color={state.color}  
                  />
              </div>
              <div className="chartCon2">
                  <Chart
                      options={state2.options}
                      series={state2.series}
                      width="400"
                      height="300"
                      type="donut"       
                      
                  />
              </div>
              <div className="rank">
asdad
              </div>
              
              <div className="rank2">
asd
              </div>
            </div>
        </div>
    )
}
export default home;