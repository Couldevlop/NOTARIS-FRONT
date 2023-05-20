import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Banque } from "../models/clients/Banque";
import { Observable } from "rxjs";

const banqueApiUrl = "http://localhost:8086/notaris/v1/banque/new";
const banqueApiUrlAll = "http://localhost:8086/notaris/v1/banque";

@Injectable({
  providedIn: "root",
})
export class BanqueServiceService {
  constructor(private http: HttpClient) {}

  public create(banque: any): Observable<Banque> {
    return this.http.post(banqueApiUrl, banque);
  }

  public findById(id: number): Observable<Banque> {
    return this.http.get(`${banqueApiUrl}/${id}`);
  }

  public findAll(): Observable<Banque[]> {
    return this.http.get<Banque[]>(`${banqueApiUrlAll}`);
  }

  public findBySigle(sigle: string): Observable<Banque> {
    return this.http.get(`${banqueApiUrl}/${sigle}`);
  }

  public delete(id: number) {
    this.http.delete(`${banqueApiUrl}/${id}`);
  }
}
