import axios from "axios";

export const getConfig = async ({ user, version, env, facility }) => {
  const response = await axios.get(
    `http://localhost.com/getconfig?puser=${user}&pversion=${version}&penv=${env}&pfacility=${facility}`
  );
  return response.data;
};
