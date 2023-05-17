import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Physique } from "../models/clients/Physique";

//********** url API */
const urlapiphysique = "http://localhost:8086/notaris/v1/physique";

@Injectable({
  providedIn: "root",
})
export class PhysiqueServiceService {
  constructor(private http: HttpClient) {}

  public save(Physique: any): Observable<Physique> {
    return this.http.post(urlapiphysique, Physique);
  }
  public findById(id: number): Observable<Physique> {
    return this.http.get(`${urlapiphysique}/${id}`);
  }
  public findAll(): Observable<Physique[]> {
    return this.http.get<Physique[]>(urlapiphysique);
  }

  public findByEmail(email: string): Observable<Physique> {
    return this.http.get(`${urlapiphysique}/${email}`);
  }

  public findByNom(nom: string): Observable<Physique> {
    return this.http.get(`${urlapiphysique}/${nom}`);
  }

  public delete(id: number): Observable<Physique> {
    return this.http.delete(`${urlapiphysique}/${id}`);
  }
}
