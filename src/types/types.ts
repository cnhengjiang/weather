export interface WeatherData {
  tempMin: string; //低温
  tempMax: string; //高温
  fxDate: string; //日期
  textDay: string; //天气
  windSpeedDay: string; //风速
  windDirDay: string; //风向
  humidity: string; //湿度
  precip: string; //降水量
  pressure: string; //气压
  iconDay: string; //天气图标
}
export interface LocationData {
  name?: string; //城市名称
  id: string; //城市ID
  adm1: string; //省份
  adm2: string; //地区
  label?: string; //标签
}
