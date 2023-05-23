import axios from "axios";

const CreateSURL = (input: string) => {
  const response = axios.post(`${process.env.REACT_APP_SURL}/short-url`, {
    url: input,
  });
  return response;
};

export default CreateSURL;
