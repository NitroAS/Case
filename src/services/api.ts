import axios from "axios";

export const apiDesafio = axios.create({
    baseURL: 'http://localhost:3004/',
    headers: {'Content-Type': 'application/Json'}
  });