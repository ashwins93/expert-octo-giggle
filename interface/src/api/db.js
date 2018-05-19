const db = {
  categories: {
    EXDSI: ['Electode Analyser - EXDS'],
    'EXCA - I': ['Electode Analyser - EXCA'],
    'EXCA - RR': ['Diluent', 'LD Lyse', 'LH Lyse', 'Probe cleanser'],
    'EXDS RR': [
      'R1 - 470ML',
      'R2 - 140ML',
      'R1 - 235ML',
      'Wash Solutions',
      'Fibran Cups',
      'Fibran Balls'
    ],
    EXT: ['R1 - 470ML', 'R2 - 140ML', 'R1 - 235ML']
  },
  distributors: {
    'Diagnostic Sales House': {
      endUsers: ['Anand Lab', 'Distri.'],
      salesHead: 'Udhaw & Baljeeth - Chandigarh'
    },
    'Rose Medicare Pvt Ltd': {
      endUsers: ['G.S. Neuro Health Clinic', 'Bimal', 'Maurya'],
      salesHead: 'Pankaj/Randhir - Patna'
    },
    'Rapid House': {
      salesHead: 'Pankaj/Randhir - Patna',
      endUsers: ['Sriram Scan Center', 'Kamakya Diagnostics', 'Prasad Hospital']
    }
  },
  orders: [
    {
      id: 0,
      category: 'EXDSI',
      contact: {
        salesHead: 'Udhaw & Baljeeth - Chandigarh',
        distributor: 'Diagnostic Sales House',
        endUser: 'Anand Lab'
      },
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
          name: 'Electode Analyser - EXDS',
          quantity: 2,
          rate: '200'
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
      category: 'EXCA - I',
      contact: {
        salesHead: 'Pankaj/Randhir - Patna',
        distributor: 'Rose Medicare Pvt Ltd',
        endUser: 'G.S. Neuro Health Clinic'
      },
      delivery: {
        courier: 'ABCD',
        deliveryDate: '2018-05-19',
        dispatchDate: '2018-05-17',
        invoiceNo: '12133',
        invoiced: true,
        pendingPayments: '0',
        podNo: '125',
        remarks: 'Blah blah',
        supply: '1st month'
      },
      items: [
        {
          id: 0,
          name: 'Electode Analyser - EXCA',
          quantity: 20,
          rate: '100'
        }
      ],
      order: {
        orderReceivedOn: '2018-04-15',
        orderReceivedThrough: 'Phone Call',
        originalOrder: '2018-05-06'
      }
    },
    {
      id: 2,
      category: 'EXCA - I',
      contact: {
        salesHead: 'Pankaj/Randhir - Patna',
        distributor: 'Rose Medicare Pvt Ltd',
        endUser: 'G.S. Neuro Health Clinic'
      },
      delivery: {
        courier: '',
        deliveryDate: '',
        dispatchDate: '',
        invoiceNo: '',
        invoiced: false,
        pendingPayments: '',
        podNo: '',
        remarks: 'Blah blah',
        supply: '1st month'
      },
      items: [
        {
          id: 0,
          name: 'Electode Analyser - EXCA',
          quantity: 23,
          rate: '100'
        }
      ],
      order: {
        orderReceivedOn: '2018-04-15',
        orderReceivedThrough: 'Phone Call',
        originalOrder: '2018-05-06'
      }
    },
    {
      id: 3,
      category: 'EXDS RR',
      contact: {
        salesHead: 'Udhaw & Baljeeth - Chandigarh',
        distributor: 'Diagnostic Sales House',
        endUser: 'Distri.'
      },
      delivery: {
        courier: '',
        deliveryDate: '',
        dispatchDate: '',
        invoiceNo: '',
        invoiced: false,
        pendingPayments: '0',
        podNo: '',
        remarks: 'Blah blah',
        supply: '1st month'
      },
      items: [
        {
          id: 0,
          name: 'R1 - 470ML',
          quantity: 5,
          rate: '250'
        },
        {
          id: 0,
          name: 'R2 - 140ML',
          quantity: 10,
          rate: '50'
        },
        {
          id: 0,
          name: 'Wash Solutions',
          quantity: 2,
          rate: '60'
        },
        {
          id: 0,
          name: 'Fibran Cups',
          quantity: 5,
          rate: '30'
        }
      ],
      order: {
        orderReceivedOn: '2018-05-23',
        orderReceivedThrough: 'Email',
        originalOrder: '2018-05-06'
      }
    },
    {
      id: 4,
      category: 'EXT',
      contact: {
        salesHead: 'Udhaw & Baljeeth - Chandigarh',
        distributor: 'Diagnostic Sales House',
        endUser: 'Distri.'
      },
      delivery: {
        courier: '',
        deliveryDate: '',
        dispatchDate: '',
        invoiceNo: '',
        invoiced: false,
        pendingPayments: '0',
        podNo: '',
        remarks: 'Blah blah',
        supply: '1st month'
      },
      items: [
        {
          id: 0,
          name: 'R1 - 470ML',
          quantity: 5,
          rate: '100'
        },
        {
          id: 1,
          name: 'R1 - 235ML',
          quantity: 3,
          rate: '20'
        }
      ],
      order: {
        orderReceivedOn: '2018-05-12',
        orderReceivedThrough: 'Message',
        originalOrder: '2018-05-06'
      }
    },
    {
      id: 5,
      category: 'EXDS RR',
      contact: {
        salesHead: 'Udhaw & Baljeeth - Chandigarh',
        distributor: 'Diagnostic Sales House',
        endUser: 'Distri.'
      },
      delivery: {
        courier: 'ABC',
        deliveryDate: '2018-06-01',
        dispatchDate: '2018-05-31',
        invoiceNo: '878AH',
        invoiced: true,
        pendingPayments: '0',
        podNo: '1005932801',
        remarks: 'Sent',
        supply: '3rd Quarter'
      },
      items: [
        {
          id: 0,
          name: 'R1 - 470ML',
          quantity: 7,
          rate: '250'
        },
        {
          id: 1,
          name: 'R2 - 140ML',
          quantity: 15,
          rate: '50'
        }
      ],
      order: {
        orderReceivedOn: '2018-05-23',
        orderReceivedThrough: 'Email',
        originalOrder: '2018-05-06'
      }
    }
  ],
  projections: [
    {
      id: 0,
      projectionStart: '2018-05-01',
      projectionEnd: '2018-05-31',
      salesHead: 'Udhaw & Baljeeth - Chandigarh',
      categories: [
        {
          category: 'EXDS RR',
          amount: '3000'
        },
        {
          category: 'EXDSI',
          amount: '5000'
        },
        {
          category: 'EXT',
          amount: '2000'
        }
      ]
    },
    {
      id: 1,
      projectionStart: '2018-04-01',
      projectionEnd: '2018-04-30',
      salesHead: 'Pankaj/Randhir - Patna',
      categories: [
        {
          category: 'EXCA - I',
          amount: '3000'
        },
        {
          category: 'EXT',
          amount: '2500'
        }
      ]
    }
  ]
};

export default db;
