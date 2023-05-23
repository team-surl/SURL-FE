import { instance } from "../axios";

const GetCode = () => {
  const response = instance.get(`/code`);
  return response;
};

export default GetCode;
