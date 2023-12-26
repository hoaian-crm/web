import { theme } from "antd";
import { limitText } from "common/utils";
import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSale } from "store/sale/hook";
import { FetchStatus } from "type/api.d";
const { useToken } = theme;

export const TopProductSale = () => {
  const { topProductSale, getTopProductSale } = useSale();
  const { token } = useToken();
  const colors = ["#5A3FFF", "#268AFF", "#1ED6FF", "#3DFFDC", "#ADE1FF"];
  useEffect(() => {
    if (topProductSale.status === FetchStatus.NoAction)
      getTopProductSale({ limit: 5 });
  }, []);

  const plugin = {
    id: "center_text_doughnut",
    beforeDraw: (chart: any, args: any, options: any) => {
      const { ctx, chartArea } = chart;
      ctx.fillStyle = token.colorTextBase;
      ctx.font = "20px Poppins";
      const total = (topProductSale as any).total || 9090;
      let measure = ctx.measureText(total || 9090);
      ctx.fillText(
        total,
        chartArea.right / 2 - measure.width / 2,
        (chartArea.top + chartArea.bottom) / 2 - 10
      );

      ctx.fillStyle = token.colorTextSecondary;
      ctx.font = "16 Poppins";
      measure = ctx.measureText("Products");
      ctx.fillText(
        "Products",
        chartArea.right / 2 - measure.width / 2,
        (chartArea.top + chartArea.bottom) / 2 + 20
      );
    },
  };

  return (
    <Doughnut
      plugins={[plugin]}
      options={{
        cutout: "80%",
        responsive: true,
        aspectRatio: 2,
        plugins: {
          title: {
            text: "Top 5 amount sale product",
            display: true,
            color: token.colorTextBase,
            font: {
              size: 18,
            },
            align: "center",
          },
          legend: {
            align: "end",
            display: true,
            position: "right",
            fullSize: true,
            labels: {
              color: token.colorTextBase,
              font: {
                size: 14,
              },
              boxWidth: 10,
              boxHeight: 10,
            },
          },
        },
      }}
      data={{
        labels: topProductSale.data.map((data) => limitText(data.name, 20)),
        datasets: [
          {
            data: topProductSale.data.map((data) => data.amount),
            backgroundColor: colors,
          },
        ],
      }}
    />
  );
};
