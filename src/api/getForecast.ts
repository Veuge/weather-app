import axios from "./axios-config";

const PATH = "forecast";

interface IExpenseType {
  id: string;
  name: string;
}

const getExpenseTypeWs = (query: string) => axios.get(`${PATH}?q=${query}`);

export {
  IExpenseType,
  getExpenseTypeWs
};