import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActeImmo } from "../models/dossiers/ActeImmo";
import { Observable } from "rxjs";

const urlApiActeImmo = "http://localhost:8086/notaris/v1/acteimmobilier";

@Injectable({
  providedIn: "root",
})
export class ActeImmoServiceService {
  constructor(private http: HttpClient) {}

  public save(acteImmo: ActeImmo): Observable<ActeImmo> {
    return this.http.post(urlApiActeImmo, acteImmo);
  }

  public findById(id: number): Observable<ActeImmo> {
    return this.http.get(`${urlApiActeImmo}/${id}`);
  }

  public findAll(): Observable<ActeImmo[]> {
    return this.http.get<ActeImmo[]>(urlApiActeImmo);
  }

  public saveWithDoc(idDossier: number, files: File): Observable<ActeImmo> {
    return this.http.post(urlApiActeImmo, ActeImmo);
  }

  public findActeImmoDocByIddossier(id: number): Observable<ActeImmo> {
    return this.http.get(`${urlApiActeImmo}/${id}`);
  }

  public deleteById(id: any): void {
    this.http.delete(`${urlApiActeImmo}/${id}`);
  }
}
