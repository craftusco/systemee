import axios from 'axios';

export const wooCommerceClient = axios.create({
  baseURL: "https://wordpress-1325122-4845929.cloudwaysapps.com/wp-json/wc/v3/",
  auth: {
    username: "ck_065337501ad3cc7ad9ebb2b6a5989ef2742f2ed9",
    password: "cs_1c65e29157956990664d212e7c364eadfa99382f",
  },
});

export const apiClient = axios.create({
  baseURL: "https://wordpress-1325122-4845929.cloudwaysapps.com/wp-json/wc/v3/",
  auth: {
    username: "ck_065337501ad3cc7ad9ebb2b6a5989ef2742f2ed9",
    password: "cs_1c65e29157956990664d212e7c364eadfa99382f",
  },
});
