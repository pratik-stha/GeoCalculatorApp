import axios from 'axios';


/* export function setpoint(pointA,pointB){
console.log(`${pointA} and ${pointB}`);

};
 */
const Serv = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/weather'

});


Serv.interceptors.request.use(
    async (config) => {
      // called when request is made.
      config.headers.Accept = 'application/json';
      // const token = await AsyncStorage.getItem('token');
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
      return config;
    },
    (err) => {
      // called when error
      return Promise.reject(err);
    }
  );
  
  export const getWeatherData = async (pointa,pointb,callback) => {
    const response = await Serv.get(
      `?lat=${pointa}&lon=${pointb}&appid=77f53b6883fc37e766f43eff7a1bcf13`,
    )
    callback(response.data);
  };
  
  export default Serv;
    