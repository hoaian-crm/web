import { ConsoleSqlOutlined } from "@ant-design/icons"
import { Space, theme } from "antd"
import { limitText } from "common/utils"
import React, { useEffect } from "react"
import { Doughnut, Pie } from "react-chartjs-2"
import { useSale } from "store/sale/hook"
import { FetchStatus } from "type/api.d"
const { useToken } = theme;

export const TopProductSale = () => {

    const { topProductSale, getTopProductSale } = useSale();
    const { token } = useToken();
    const colors = [token.colorError, token.colorWarning, token.colorInfo, token.colorTextBase, token.colorSuccess]
    useEffect(() => {
        if (topProductSale.status === FetchStatus.NoAction) getTopProductSale({ limit: 5 });
    }, [])

    return <Doughnut
        plugins={[
            plugin
        ]}
        style={{ padding: 20 }}
        options={{
            aspectRatio: 2,
            plugins: {
                legend: {
                    align: 'start',
                    display: true,
                    position: 'right',
                    fullSize: true,
                    labels: {
                        color: token.colorTextBase,
                        font: {
                            size: 16
                        }
                    },
                    title: {
                        text: "Top 5 amount sale product",
                        display: true,
                        color: token.colorTextBase,
                        font: {
                            size: 18,
                        }
                    }
                },
            },
        }}
        data={{
            labels: topProductSale.data.map(data => limitText(data.name, 50)),
            datasets: [{
                data: topProductSale.data.map(data => data.amount),
                backgroundColor(context, options) {
                    const { ctx, chartArea } = context.chart;
                    if (!chartArea) {
                        // This case happens on initial chart load
                        return;
                    }
                    return colors.map(color => {
                        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
                        gradient.addColorStop(0, color);
                        gradient.addColorStop(0.2, token.colorPrimary);
                        gradient.addColorStop(1, color);
                        return gradient
                    }) as any
                },
            }]
        }} />
}

export const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart: any, args: any, options: any) => {
        // const { ctx } = chart;
        // ctx.save();
        // ctx.globalCompositeOperation = 'destination-over';
        // ctx.fillStyle = options.color || '#99ffff';
        // ctx.fillRect(0, 0, chart.width, chart.height);
        // ctx.restore();
    }
};