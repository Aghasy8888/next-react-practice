import minRequest from "@/helpers/minRequest";

export const apiUrl = 'https://randomuser.me/api';

export const fetchInfo = async () => {
    const response = await minRequest(`${apiUrl}`);
    console.log('response 555555555555', response);
  
    return response;
  };