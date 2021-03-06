import db from './db';

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
};

export const fetchSalesHead = distributor => {
  return Promise.resolve(db.distributors[distributor].salesHead || '');
};

export const fetchAllSalesHead = () => {
  return Promise.resolve(
    Object.keys(db.distributors).map(
      distributor => db.distributors[distributor].salesHead
    )
  );
};

export const fetchAllOrders = () => {
  return Promise.resolve(db.orders);
};

export const fetchOrder = id => {
  return Promise.resolve(db.orders.find(order => order.id === Number(id)));
};

export const addOrder = formData => {
  const newOrder = {
    id: db.orders.length,
    ...formData
  };
  db.orders.push(newOrder);

  return Promise.resolve(newOrder);
};

export const fetchAllProjections = () => {
  return Promise.resolve(db.projections);
};

export const fetchProjection = id => {
  return Promise.resolve(
    db.projections.find(projection => projection.id === Number(id))
  );
};
