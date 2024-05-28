import { faker } from '@faker-js/faker';
import { ICustomer } from 'types/customer';

export namespace CustomerFaker {
  export const one = (): ICustomer => {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      id: faker.number.int(),
      gender: faker.person.gender(),
      dob: faker.date.birthdate().toString(),
      phone: faker.phone.number(),
      address: {
        metadata: {
          name: faker.address.streetAddress() + ',' + faker.address.city(),
          place_id: ''
        }
      },
      note: faker.lorem.paragraph(5)
    };
  };

  export const many = (amount: number) => {
    return Array.from({ length: amount }).map(() => one());
  };

  export const apiFake = (amount: number) => {
    return {
      result: many(amount),
      total: 1000
    };
  };
}
