import { Col, Row, theme } from "antd";
import { limitText } from "common/utils";
import React, { useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useSale } from "store/sale/hook";
import { FetchStatus } from "type/api.d";
const { useToken } = theme;

export const TotalRevenueProduct = () => {
  const {
    totalRevenueProduct,
    getTotalRevenueProduct,
    formatTotalRevenue,
    topProductSale,
  } = useSale();
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
    <Row justify="space-around" gutter={[10, 10]}>
      <Col span="18">
        <Line
          style={{
            borderRadius: token.borderRadius,
            // boxShadow: token.boxShadow,
            backgroundColor: token.colorBgContainer,
            height: "100%",
          }}
          options={{
            responsive: true,
            aspectRatio: 3,
            scales: {
              y: {
                ticks: { color: token.colorTextLabel },
                grid: { color: "transparent", lineWidth: 0.5 },
              },
              x: {
                ticks: { color: token.colorTextLabel },
                grid: { color: "transparent", lineWidth: 0.5 },
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
                text: "Top 5 Revenue Product",
                display: true,
                font: {
                  size: 18,
                  weight: 600,
                  family: "Poppins",
                },
                color: token.colorTextLabel,
                align: "center",
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
                borderColor: color,
                pointBorderWidth: 0,
                borderWidth: 1.5,
                tension: 0.4,
              };
            }),
          }}
        />
      </Col>
      <Col span="6">
        <Bar
          style={{
            backgroundColor: token.colorBgContainer,
            borderRadius: 10,
          }}
          options={{
            scales: {
              y: {
                ticks: { color: token.colorTextLabel },
                grid: { color: "transparent", lineWidth: 0.5 },
              },
              x: {
                ticks: { color: token.colorTextLabel },
                grid: { color: "transparent", lineWidth: 0.5 },
              },
            },
            aspectRatio: 1,
            indexAxis: "y",
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Top 5 Product",
                color: token.colorTextLabel,
                font: {
                  size: 16,
                },
              },
            },
          }}
          data={{
            labels: topProductSale.data.map((data) => limitText(data.name, 10)),
            datasets: [
              {
                data: topProductSale.data.map((data) => data.amount),
                backgroundColor: colors,
                borderRadius: 100,
              },
            ],
          }}
        />
      </Col>
    </Row>
  );
};
