import { faker } from '@faker-js/faker';
import { Space, Typography, theme } from 'antd';
import React, { Context, useEffect, useState } from "react";
import { useSale } from "store/sale/hook";
import { FetchStatus } from "type/api.d";
import { Line } from 'react-chartjs-2';
import { scales } from 'chart.js';
const { useToken } = theme;


export const TotalRevenueProduct = () => {
  const { totalRevenueProduct, getTotalRevenueProduct, formatTotalRevenue } = useSale();
  const { token } = useToken();
  const colors = [token.colorError, token.colorWarning, token.colorInfo, token.colorTextBase, token.colorSuccess]

  const chartData = formatTotalRevenue();

  useEffect(() => {
    if (totalRevenueProduct.status === FetchStatus.NoAction) {
      getTotalRevenueProduct({
        from: 0,
        to: 2802568161195,
        timeUnit: 'month'
      });
    }
  }, [])

  return <Line
    style={{
      padding: token.padding,
      borderRadius: token.borderRadius,
      boxShadow: token.boxShadow,
      backgroundColor: token.colorBgContainer
    }}
    options={{
      scales: {
        y: {
          ticks: { color: token.colorTextBase },
          grid: { color: token.colorTextTertiary, lineWidth: 0.5 }
        },
        x: {
          ticks: { color: token.colorTextBase },
          grid: { color: token.colorTextTertiary, lineWidth: 0.5 }
        }
      },
      plugins: {
        colors: {
          forceOverride: true
        },
        legend: {
          display: false,
        },
        title: {
          text: "Top 5 revenue product",
          display: true,
          font: {
            size: 18
          },
          color: token.colorTextLabel,
        },
      },
      elements: {
        line: {
        }
      }
    }
    }
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', "September", 'October', 'November', 'December'],
      datasets: Object.keys(chartData).map((productName, index) => {
        const color = colors[index];
        return {
          label: productName,
          data: Object.keys(chartData[productName]).map(key => chartData[productName][key]),
          borderColor: (context: any) => {
            const { ctx, chartArea } = context.chart;
            if (!chartArea) {
              // This case happens on initial chart load
              return;
            }
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
            gradient.addColorStop(0, color);
            gradient.addColorStop(1, token.colorBgTextActive);
            return gradient;
          },
          backgroundColor: color,
          borderWidth: 2,
        }
      })
    }} />
};