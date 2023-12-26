import { theme } from "antd";
import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSale } from "store/sale/hook";
import { FetchStatus } from "type/api.d";
const { useToken } = theme;

export const TotalRevenueProduct = () => {
  const { totalRevenueProduct, getTotalRevenueProduct, formatTotalRevenue } =
    useSale();
  const { token } = useToken();
  const colors = ["#5A3FFF", "#268AFF", "#1ED6FF", "#3DFFDC", "#ADE1FF"];

  const chartData = formatTotalRevenue();

  useEffect(() => {
    if (totalRevenueProduct.status === FetchStatus.NoAction) {
      getTotalRevenueProduct({
        from: 0,
        to: 2802568161195,
        timeUnit: "month",
      });
    }
  }, []);

  return (
    <Line
      style={{
        padding: token.padding,
        borderRadius: token.borderRadius,
        boxShadow: token.boxShadow,
        backgroundColor: token.colorBgContainer,
      }}
      options={{
        responsive: true,
        scales: {
          y: {
            ticks: { color: token.colorTextBase },
            grid: { color: token.colorTextTertiary, lineWidth: 0.5 },
          },
          x: {
            ticks: { color: token.colorTextBase },
            grid: { color: token.colorTextTertiary, lineWidth: 0.5 },
          },
        },
        plugins: {
          colors: {
            forceOverride: true,
          },
          legend: {
            display: false,
          },
          title: {
            text: "Top 5 revenue product",
            display: true,
            font: {
              size: 18,
            },
            color: token.colorTextLabel,
          },
        },
        elements: {
          line: {},
        },
      }}
      data={{
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: Object.keys(chartData).map((productName, index) => {
          const color = colors[index];
          return {
            label: productName,
            data: Object.keys(chartData[productName]).map(
              (key) => chartData[productName][key]
            ),
            // borderColor: (context: any) => {
            //   const { ctx, chartArea } = context.chart;
            //   if (!chartArea) {
            //     // This case happens on initial chart load
            //     return;
            //   }
            //   const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
            //   gradient.addColorStop(0, color);
            //   gradient.addColorStop(1, token.colorBgTextActive);
            //   return gradient;
            // },
            borderColor: color,
            backgroundColor: color,
            borderWidth: 2,
          };
        }),
      }}
    />
  );
};
