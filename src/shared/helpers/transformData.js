export const transformData = data => {
  if (!Array.isArray(data)) return data;

  return data.reduce((acc, item) => {
    const { shopname } = item;

    acc[shopname] ? acc[shopname].push(item) : (acc[shopname] = [item]);

    return acc;
  }, {});
};
