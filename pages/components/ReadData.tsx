import "../models/data.json";

const ReadData = async () => {
  const res = await fetch("../models/data.json");
  const data = await res;
  return data;
};

export default ReadData;
