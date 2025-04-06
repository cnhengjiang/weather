import { message } from "antd";
import axios from "axios";
import { LocationData, WeatherData } from "types/types";
const service = axios.create({
  baseURL: "https://pj7qqq7kxp.re.qweatherapi.com/",
});

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    message.error("输入地址信息有误，请重新输入");
    return Promise.reject(error);
  }
);

export const fetchWeather = async (
  city: string
): Promise<WeatherData[] | undefined> => {
  try {
    const response = await service.get(
      `v7/weather/7d?location=${city}&key=5f92d2d345bc40ac885efa8a28e2fb72`
    );
    return response.data.daily;
  } catch (error) {}
};

export const fetchLocation = async (
  value: string
): Promise<LocationData[] | undefined> => {
  try {
    const response = await service.get(
      `geo/v2/city/lookup?location=${value}&key=5f92d2d345bc40ac885efa8a28e2fb72`
    );
    return response.data.location;
  } catch (error) {}
};
