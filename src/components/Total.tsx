//TODO: DEMO

import React from 'react';
// const ThemeContext = React.createContext();
// import "~react-vis/dist/style";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  FlexibleXYPlot,
  FlexibleWidthXYPlot,
  LineSeries,
  VerticalGridLines,
  LineMarkSeries,
  VerticalBarSeries,
  HorizontalBarSeries,
} from 'react-vis';
const Total = () => {
  return (
    <div className="Box">
      <h3>業種別</h3>
      <FlexibleXYPlot animation stackBy="y" height={300}>
        <HorizontalGridLines />
        <VerticalBarSeries
          fill="#6029A7"
          opacity={1}
          data={[
            {
              x: 2014,
              y: 1,
            },
            {
              x: 2015,
              y: 8,
            },
            {
              x: 2016,
              y: 16,
            },
            {
              x: 2017,
              y: 15,
            },
            {
              x: 2018,
              y: 27,
            },
            {
              x: 2019,
              y: 33,
            },
          ]}
          style={{ background: '#c00' }}
        />
        <VerticalBarSeries
          fill="#4041A7"
          // stroke={10}
          opacity={1}
          data={[
            {
              x: 2014,
              y: 1,
            },
            {
              x: 2015,
              y: 8,
            },
            {
              x: 2016,
              y: 16,
            },
            {
              x: 2017,
              y: 15,
            },
            {
              x: 2018,
              y: 27,
            },
            {
              x: 2019,
              y: 33,
            },
          ]}
          style={{ background: '#c00' }}
        />
        <VerticalBarSeries
          fill="#A73C86"
          data={[
            {
              x: 2014,
              y: 0,
            },
            {
              x: 2015,
              y: 0,
            },
            {
              x: 2016,
              y: 2,
            },
            {
              x: 2017,
              y: 8,
            },
            {
              x: 2018,
              y: 19,
            },
            {
              x: 2019,
              y: 9,
            },
          ]}
          style={{}}
        />
        <LineMarkSeries
          data={[
            { x: 2014, y: 1 },
            { x: 2015, y: 9 },
            { x: 2016, y: 25 },
            { x: 2017, y: 30 },
            { x: 2018, y: 39 },
            { x: 2019, y: 65 },
            { x: 2020, y: 61 },
          ]}
        />

        <XAxis />
        <YAxis />
      </FlexibleXYPlot>

      <h3>入社/退職</h3>
      <FlexibleXYPlot animation height={300}>
        <HorizontalGridLines />

        <VerticalBarSeries
          fill="#4041A7"
          // stroke={10}
          opacity={1}
          data={[
            {
              x: 2014,
              y: 1,
            },
            {
              x: 2015,
              y: 8,
            },
            {
              x: 2016,
              y: 16,
            },
            {
              x: 2017,
              y: 15,
            },
            {
              x: 2018,
              y: 27,
            },
            {
              x: 2019,
              y: 33,
            },
          ]}
          style={{ background: '#c00' }}
        />
        <VerticalBarSeries
          fill="#A73C86"
          data={[
            {
              x: 2014,
              y: 0,
            },
            {
              x: 2015,
              y: 0,
            },
            {
              x: 2016,
              y: 2,
            },
            {
              x: 2017,
              y: 8,
            },
            {
              x: 2018,
              y: 19,
            },
            {
              x: 2019,
              y: 9,
            },
          ]}
          style={{}}
        />
        <LineMarkSeries
          data={[
            { x: 2014, y: 1 },
            { x: 2015, y: 9 },
            { x: 2016, y: 25 },
            { x: 2017, y: 30 },
            { x: 2018, y: 39 },
            { x: 2019, y: 65 },
            { x: 2020, y: 61 },
          ]}
        />

        <XAxis />
        <YAxis />
      </FlexibleXYPlot>

      {/*             
            <XYPlot
            animation
              width={1000}
              height={300}>
                
              <HorizontalGridLines />
              <LineSeries
                data={[
                  {x: 2014, y: 1},
                  {x: 2015, y: 9},
                  // {x: 2016, y: 25},
                  // {x: 2017, y: 30},
                  // {x: 2018, y: 39},
                  // {x: 2019, y: 65},
                  // {x: 2020, y: 61},
                  // {x: 8, y: 1},
                  // {x: 9, y: 8},
                  // {x: 10, y: 2},
                  // {x: 11, y: 12},
                  // {x: 12, y: 19}
                ]}/>
                
              <XAxis tickValues={[2014, 2015, 2016, 2017, 2018, 2019, 2020]} left={30} 
              tickFormat={v => `${v}`}/>
              <YAxis />
              
            </XYPlot>

            <XYPlot
            // stackBy="y"
              // xDomain={[
              //   0,
              //   20
              // ]}
              // yDomain={[
              //   0,
              //   8
              // ]}
              width={1000}
              height={300}
            >
              <VerticalBarSeries
                fill="#2784A0"
                opacity={1}
                data={[
                  {
                    x: 0,
                    y: 20
                  },
                  {
                    x: 1,
                    y: 1.922393478612905
                  },
                  
                ]}
                style={{background:"#c00"}}
              />
              <VerticalBarSeries
                fill="#9E4646"
                data={[
                  {
                    x: 0,
                    y: 30
                  },
                  {
                    x: 1,
                    y: 1.124
                  },
                  
                ]}
                style={{}}
              />
            </XYPlot>



            
            <XYPlot height={200} width={1000}>
              <VerticalBarSeries data={[
                                {x: 2014, y: 1},
                                {x: 2015, y: 9},
                                {x: 2016, y: 25},
                                {x: 2017, y: 30},
                                {x: 2018, y: 39},
                                {x: 2019, y: 65},
                                {x: 2020, y: 61},
                                // {x: 8, y: 1},
                                // {x: 9, y: 8},
                                // {x: 10, y: 2},
                                // {x: 11, y: 12},
                                // {x: 12, y: 19}
                              ]} />
            </XYPlot>

            <XYPlot width={1000} height={300}><XAxis/><YAxis/>
            <HorizontalGridLines />
            <VerticalGridLines />
            <LineMarkSeries data={[
                    {x: 2014, y: 1},
                    {x: 2015, y: 9},
                    {x: 2016, y: 25},
                    {x: 2017, y: 30},
                    {x: 2018, y: 39},
                    {x: 2019, y: 65},
                    {x: 2020, y: 61},
                    // {x: 8, y: 1},
                    // {x: 9, y: 8},
                    // {x: 10, y: 2},
                    // {x: 11, y: 12},
                    // {x: 12, y: 19}
                  ]} />
            </XYPlot> */}

      {/* 人数
            <select >
                <option value="all">すべて</option>
                <option value="ENGINEER">エンジニア</option>
                <option value="DESIGNER">デザイナ</option>
                <option value="DIRECTOR">ディレクター</option>
                <option value="CORPORATE_STAFF">コーポレートスタッフ</option>
                <option value="OTHER">その他</option>
            </select> */}
    </div>
  );
};
export default Total;

// import React from 'react'
// import { Chart } from 'react-charts'

// const Total =()=>{
//   const data = React.useMemo(
//     () => [
//       {
//         label: 'Series 1',
//         data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
//       },
//       {
//         label: 'Series 2',
//         data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
//       }
//     ],
//     []
//   )

//   const axes = React.useMemo(
//     () => [
//       { primary: true, type: 'linear', position: 'bottom' },
//       { type: 'linear', position: 'left' }
//     ],
//     []
//   )

//   return  (
//     // A react-chart hyper-responsively and continuusly fills the available
//     // space of its parent element automatically
//     <div
//       style={{
//         width: '400px',
//         height: '300px'
//       }}
//     >
//       <Chart data={data} axes={axes} />
//     </div>
//   )
// }
// export default Total
