const filterByColor = (color) => {
  const filtered = Kids.filter((item) => item.details.some((detail) => detail.color === color));
  setFilteredData(filtered);
};

const filterBySize = (size) => {
  const filtered = Kids.filter((item) => item.details.some((detail) => detail.size === size));
  setFilteredData(filtered);
};

const filterByUniqueName = (data) => {
  const names = data.map((item) => item.name);
  return [...new Set(names)];
};
// Populate by selected product

const filterByUniqueCategory = (data) => {
  const categories = data.map((item) => item.category);
  return [...new Set(categories)];
};
// Populate by selected category
