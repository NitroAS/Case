import axios from "axios";

export const apiCase = axios.create({
    baseURL: 'http://localhost:3004/',
    headers: {'Content-Type': 'application/Json'}
  });