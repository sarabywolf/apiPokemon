import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  async setStorage(key: string, data: string) {
    // console.log("encryp datos=>", data);
    let llave = this.createHash(key)
    let datos = await this.encryp(data, llave)
    localStorage.setItem(llave, datos)
    return 'success'
  }

  async getStorage(key: string) {
    let llave = this.createHash(key);
    let data = localStorage.getItem(llave);
    let datos = await this.decryp(data, llave);
    // console.log("datos=>", datos);
    return datos;
  }
  createHash(data: any) {
    let hash: string = '';
    hash = CryptoJS.HmacSHA256(hash, data).toString(CryptoJS.enc.Hex);
    return hash.toString();
  }
  encryp(data: any, key: string) {
    //npm install crypto-js --save  npm install @types/crypto-js –save
    if (data && key) {
      data = CryptoJS.DES.encrypt(data, key);
      // console.log("data encryptado 22", data);
      data = data.toString();
      return data;
    } else {
      return { "data": 'no hay data' }
    }
  }
  decryp(data: any, key: string) {
    // console.log("llegando la data para desencriptar", data, key);
    if (data && key) {
      data = CryptoJS.DES.decrypt(data, key);
      data = data.toString(CryptoJS.enc.Utf8);
      return data;
    } else {
      return { "data": 'no hay data' }
    }
  }
}
