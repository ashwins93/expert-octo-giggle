const db = {
  categories: {
    Cat1: ['Item1', 'Item2', 'Item3'],
    Cat2: ['Item4', 'Item5', 'Item6']
  },
  distributors: {
    Dis1: {
      endUsers: ['User1', 'User2', 'User3'],
      salesHead: 'SH001'
    },
    Dis2: {
      endUsers: ['User4', 'User5'],
      salesHead: 'SH002'
    }
  },
  orders: [
    {
      id: 0,
      category: 'Cat1',
      contact: { salesHead: 'SH001', distributor: 'Dist1', endUser: 'User1' },
      delivery: {
        courier: 'ST',
        deliveryDate: '2018-05-19',
        dispatchDate: '2018-05-17',
        invoiceNo: '123',
        invoiced: true,
        pendingPayments: '0',
        podNo: '125',
        remarks: 'Blah blah',
        supply: '1st month'
      },
      items: [
        {
          id: 0,
          name: 'Item1',
          quantity: 2,
          rate: '80'
        }
      ],
      order: {
        orderReceivedOn: '2018-05-04',
        orderReceivedThrough: 'Message',
        originalOrder: '2018-05-06'
      }
    },
    {
      id: 1,
      category: 'Cat2',
      contact: { salesHead: 'SH002', distributor: 'Dist2', endUser: 'User4' },
      delivery: {
        courier: 'ST',
        deliveryDate: '2018-05-19',
        dispatchDate: '2018-05-17',
        invoiceNo: '123',
        invoiced: true,
        pendingPayments: '0',
        podNo: '125',
        remarks: 'Blah blah',
        supply: '1st month'
      },
      items: [
        {
          id: 0,
          name: 'Item4',
          quantity: 3,
          rate: '100'
        }
      ],
      order: {
        orderReceivedOn: '2018-04-15',
        orderReceivedThrough: 'Message',
        originalOrder: '2018-05-06'
      }
    }
  ]
};

export default db;
