import { instance } from "../axios";

const MainStats = () => {
  const response = instance.get(`/stats/main`);
  return response;
};

export default MainStats;
