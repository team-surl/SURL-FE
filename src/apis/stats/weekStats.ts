import { instance } from "../axios";

const WeekStats = (surl: string) => {
  const response = instance.get(`/stats/week/${surl}`);
  return response;
};

export default WeekStats;
