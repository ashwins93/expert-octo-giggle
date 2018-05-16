const db = {
  categories: {
    'Cat1': [
      'Item1',
      'Item2',
      'Item3'
    ],
    'Cat2': [
      'Item4',
      'Item5',
      'Item6'
    ]
  },
  distributors: {
    'Dis1': {
      endUsers: [
        'User1',
        'User2',
        'User3'
      ],
      salesHead: 'SH001'
    },
    'Dis2': {
      endUsers: [
        'User4',
        'User5'
      ],
      salesHead: 'SH002'
    }
  }
};

export const fetchOptions = (type, group) => {
  switch (type) {
    case 'categories':
      return Promise.resolve(Object.keys(db.categories) || []);
    case 'distributors':
      return Promise.resolve(Object.keys(db.distributors) || []);
    case 'endUsers':
      return Promise.resolve(db.distributors[group].endUsers || []);
    case 'items':
      return Promise.resolve(db.categories[group] || []);
    default:
      return Promise.resolve([]);
  }
}

export const fetchSalesHead = (distributor) => {
  return Promise.resolve(db.distributors[distributor].salesHead || "");
}