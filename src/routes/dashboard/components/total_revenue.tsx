import { theme } from "antd";
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useSale } from "store/sale/hook";
import { FetchStatus } from "type/api.d";

export const TotalRevenue = () => {
  const { getTotalRevenue, totalRevenue } = useSale();
  const { token } = theme.useToken();

  useEffect(() => {
    if (totalRevenue.status === FetchStatus.NoAction) {
      getTotalRevenue({});
    }
  }, []);

  return (
    <Bar
      style={{
        backgroundColor: token.colorBgContainer,
        padding: token.padding,
        borderRadius: token.borderRadius,
      }}
      options={{
        scales: {
          y: {
            ticks: { color: token.colorTextLabel },
            // grid: { color: token.colorTextTertiary, lineWidth: 0.5 },
          },
          x: {
            ticks: { color: token.colorTextLabel },
            // grid: { color: token.colorTextTertiary, lineWidth: 0.5 },
          },
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 16,
              },
              color: token.colorTextLabel,
            },
            title: {
              font: {
                size: 18,
              },
            },
          },
        },
      }}
      data={{
        labels: totalRevenue.data.map((data) => data.label),
        datasets: [
          {
            label: "Total revenue",
            data: totalRevenue.data.map((data) => data.revenue),
            borderRadius: 5,
            backgroundColor: (context: any) => {
              const { ctx, chartArea } = context.chart;
              if (!chartArea) {
                // This case happens on initial chart load
                return;
              }
              const gradient = ctx.createLinearGradient(
                0,
                chartArea.bottom,
                0,
                chartArea.top
              );
              gradient.addColorStop(0, "#1882FF");
              gradient.addColorStop(1, "#36EBCA");
              return gradient;
            },
          },
        ],
      }}
    />
  );
};
