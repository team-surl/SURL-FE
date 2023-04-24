import { instance } from "../axios";

const CreateSURL = (input: string) => {
  const response = instance.post(`/short-url`, {
    url: input,
  });
  return response;
};

export default CreateSURL;
