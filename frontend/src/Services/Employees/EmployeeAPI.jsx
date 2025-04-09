import { Base_url } from "../../Base_url/Base_url";
import axios from "axios";

export const GetEmployeeListAPI = async () => {
  const url = `${Base_url}/emp`;
  const res = await axios.get(url);
  return res;
};

export const GetSingleEmployeeByIDAPI = async (id) => {
  const url = `${Base_url}/getsingleemp?employeeKeyID=${id}`;
  const res = await axios.get(url);
  return res;
};

export const AddUpdateEmployeeAPI = async (params) => {
  const url = `${Base_url}/emp`;
  const res = await axios.post(url, params);
  return res;
};

export const DeleteEmpAPI = async (id) => {
  const url = `${Base_url}/deleteemp?employeeKeyID=${id}`;
  const res = await axios.delete(url);
  return res;
};
