import http from "./http-common";
import INaveData from "./nave"
import INaveInputData from "./nave-input"

class NaveDataService {
    async getAll()  {
      let response = await http.get<INaveData>("/");
      return response
    }
    get(tipo: string) {
      return http.get<INaveData>(`/${tipo}`);
    }
    create(data: INaveInputData) {
      return http.post<INaveInputData>("/", data);
    }
  }
  export default new NaveDataService();