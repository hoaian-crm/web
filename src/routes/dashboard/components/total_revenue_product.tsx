import { Space, Typography, theme } from 'antd';
import React, { useEffect, useState } from "react";
import { useSale } from "store/sale/hook";
import { FetchStatus } from "type/api.d";
import { Line } from 'react-chartjs-2';


const { useToken } = theme;



export const TotalRevenueProduct = () => {
  const { totalRevenueProduct, getTotalRevenueProduct } = useSale();
  const { token } = useToken();

  useEffect(() => {
    if (totalRevenueProduct.status === FetchStatus.NoAction) {
      getTotalRevenueProduct({
        from: 0,
        to: 2802568161195,
        timeUnit: 'month'
      });
    }
  }, [])

  return <Space style={{ borderRadius: 20, width: '50vw', padding: 20 }}>
    <Line
      style={{
        width: '30vw',
        padding: token.padding,
        borderRadius: token.borderRadius,
        boxShadow: token.boxShadow,
        backgroundColor: token.colorBgSpotlight
      }}
      data={{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor: token.colorPrimary,
          borderColor: token.colorPrimary,
        }]
      }} />
  </Space>

};
