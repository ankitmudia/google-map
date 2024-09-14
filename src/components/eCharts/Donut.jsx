import ReactECharts from "echarts-for-react";
import { GaugeChart } from "echarts/charts";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { React } from "react";

const Donut = (props) => {
  const transformData = (points) => {
    const aggregatedData = {
      offline: 0,
      available: 0,
      busy: 0,
      faulted: 0,
    };

    points.forEach((item) => {
      for (const [key, value] of Object.entries(item)) {
        if (aggregatedData.hasOwnProperty(key)) {
          aggregatedData[key] += value;
        }
      }
    });

    const data = Object.entries(aggregatedData).map(([name, value]) => ({
      value,
      name,
    }));

    return data;
  };

  const calcPointsData = (points, names) => {
    let total = 0;
    names.forEach((name) => {
      total += points.reduce((acc, element) => acc + (element[name] || 0), 0);
    });
    return total;
  };

  echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    GaugeChart,
    CanvasRenderer,
  ]);
  const options = () => ({
    tooltip: {
      trigger: "item",
    },
    title: {
      text: calcPointsData(props.data.points, [
        "offline",
        "available",
        "busy",
        "faulted",
      ]),
      subtext: "Total",
      left: "center",
      top: "center",
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
      },
      subtextStyle: {
        fontSize: 16,
        color: "#999",
      },
    },
    series: [
      {
        type: "pie",
        radius: ["64%", "80%"],
        avoidLabelOverlap: true,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: transformData(props.data.points),
      },
    ],
  });

  return (
    <ReactECharts
      echarts={echarts}
      theme={"theme_name"}
      style={{
        height: "60px",
        width: "130px",
        position: "absolute",
        transform: "translate(-50%, -50%)",
      }}
      option={options()}
    />
  );
};

export default Donut;
