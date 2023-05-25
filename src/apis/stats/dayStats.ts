import { instance } from "../axios";

const DayStats = (surl: string) => {
  const response = instance.get(`/stats/day/${surl}`);
  return response;
};

export default DayStats;
