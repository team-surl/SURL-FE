import { instance } from "../axios";

const WorldStats = (surl: string) => {
  const response = instance.get(`/stats/world/${surl}`);
  return response;
};

export default WorldStats;
