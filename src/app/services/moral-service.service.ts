import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Moral } from "../models/clients/Moral";
import { Observable } from "rxjs";

const moralUrlApi = "http://localhost:8086/notaris/v1/moral";
const moralUrlApiNom = "http://localhost:8086/notaris/v1/moral/nom";
const moralUrlApiEmail = "http://localhost:8086/notaris/v1/moral/email";

@Injectable({
  providedIn: "root",
})
export class MoralServiceService {
  constructor(private http: HttpClient) {}

  public create(moral: Moral): Observable<Moral> {
    return this.http.post(moralUrlApi, moral);
  }

  public findById(id: number): Observable<Moral> {
    return this.http.get(`${moralUrlApi}/${id}`);
  }

  public findByNom(nom: string): Observable<Moral> {
    return this.http.get(`${moralUrlApiNom}/${nom}`);
  }

  public findByEmail(email: string): Observable<Moral> {
    return this.http.get(`${moralUrlApiEmail}/${email}`);
  }

  public findAll(): Observable<Moral[]> {
    return this.http.get<Moral[]>(moralUrlApi);
  }

  public delete(id: number) {
    this.http.get(`${moralUrlApi}/${id}`);
  }
}
