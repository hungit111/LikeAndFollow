import { Injectable } from '@angular/core';
import { HttpParams, HttpRequest } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(    
    private httpClient:HttpClient
  ) { }

  getAccess(token:string) {
    
    return this.httpClient.post("https://api.instagram.com/oauth/access_token",{}, {
      params:{
        client_id : "Client ID 043f79bc30994111b15e27e3c3dd55d8",
        client_secret :"07f6656e0b3c442bae4b4d8abc76a3c4",
        grant_type : "authorization_code",
        redirect_uri: "http://localhost:4200/access",
        code : token
      }
    });
  }
}
