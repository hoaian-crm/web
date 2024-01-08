import { Col, Form, Row, Select } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useAddress } from 'store/address/hook';
import { InformationCard } from './components/information_card';

const data: any = {
  "id": "10324",
  "name": "Đức SiêuVương",
  "email": "7kucSieu.Vuong@hotmail.com",
  "extension": "+84",
  "phone": "020 0006 1455",
  "dob": moment("1944-03-05T00:00:00.000Z"),
  "address": {
    "id": "kTIUtaeRubxip01GlB4LzlqUQi34vZCLW7p3BIOOrR5bqkYz91aXyWq57XjqOVqXxbZN4MrlCpetqaV4PuKqH42FHc06gaIjAb21dSYt7i-Krbk4dvR2bi2y5RjaLHPDL",
    "metadata": {
      "url": "https://maps.goong.io/?pid=kTIUtaeRubxip01GlB4LzlqUQi34vZCLW7p3BIOOrR5bqkYz91aXyWq57XjqOVqXxbZN4MrlCpetqaV4PuKqH42FHc06gaIjAb21dSYt7i-Krbk4dvR2bi2y5RjaLHPDL",
      "name": "Cửa Hàng Mobile Address",
      "types": [
        "grocery_store"
      ],
      "compound": {
        "commune": "Tràng Tiền",
        "district": "Hoàn Kiếm",
        "province": "Hà Nội"
      },
      "geometry": {
        "location": {
          "lat": 21.023974229000032,
          "lng": 105.85418242400004
        }
      },
      "place_id": "kTIUtaeRubxip01GlB4LzlqUQi34vZCLW7p3BIOOrR5bqkYz91aXyWq57XjqOVqXxbZN4MrlCpetqaV4PuKqH42FHc06gaIjAb21dSYt7i-Krbk4dvR2bi2y5RjaLHPDL",
      "plus_code": {
        "global_code": "LNPP+RGBS",
        "compound_code": "+RGBS Tràng Tiền, Hoàn Kiếm, Hà Nội"
      },
      "formatted_address": "Cửa Hàng Mobile Address, 16 Hai Bà Trưng, Tràng Tiền, Hoàn Kiếm, Hà Nội"
    },
    "createdAt": "2024-01-03T17:14:17.856Z",
    "updatedAt": "2024-01-03T17:14:17.856Z"
  }
}

export const DetailCustomer = () => {

  const address = useAddress();
  const [form] = Form.useForm();
  const [change, setChange] = useState(false);

  const prefixSelector = (
    <Form.Item name="extension" noStyle initialValue={"+84"}>
      <Select style={{ width: 100 }}>
        <Select.Option value="+84">🇻🇳 +84 </Select.Option>
      </Select>
    </Form.Item>
  );

  return <Row justify="space-around">
    <Col span={8}>
      <InformationCard data={data} />
    </Col>
    <Col span={14} />
  </Row>
}
