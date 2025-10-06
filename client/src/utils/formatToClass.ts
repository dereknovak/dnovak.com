const formatToClass = (name: string) => {
  return name.toLowerCase().split(' ').join('-');
};

export default formatToClass;
