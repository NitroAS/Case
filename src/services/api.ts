import axios from "axios";

export const apiDesafio = axios.create({
    baseURL: '',
    headers: {'Content-Type': 'application/Json'}
  });