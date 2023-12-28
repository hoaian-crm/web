import { Row } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useSale } from "store/sale/hook";
import { FetchStatus } from "type/api.d";

export const GeneralStatistic = () => {
  const { generalStatistic, getGeneralStatistic } = useSale();

  useEffect(() => {
    if (generalStatistic.status === FetchStatus.NoAction)
      getGeneralStatistic({
        from: moment().startOf("month").valueOf(),
        to: moment().endOf("month").valueOf(),
        previousFrom: moment().subtract("month", 1).startOf("month").valueOf(),
        previousTo: moment().subtract("month", 1).endOf("month").valueOf(),
      });
  }, []);
  return <Row justify="space-between"></Row>;
};
