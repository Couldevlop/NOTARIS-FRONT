import { Injectable } from "@angular/core";
import { Physique } from "../models/clients/Physique";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const urlphysique = "http://localhost:8086/notaris/v1/physique";

@Injectable({
  providedIn: "root",
})
export class PhysiqueServiceService {
  constructor(private http: HttpClient) {}

  public create(physique: Physique): Observable<Physique> {
    return this.http.post(urlphysique, physique);
  }

  public findById(id: number): Observable<Physique> {
    return this.http.get(`${urlphysique}/${id}`);
  }

  public findByNom(nom: string): Observable<Physique> {
    return this.http.get(`${urlphysique}/${nom}`);
  }

  public findByEmail(email: string): Observable<Physique> {
    return this.http.get(`${urlphysique}/${email}`);
  }

  public findAll(): Observable<Physique[]> {
    return this.http.get<Physique[]>(urlphysique);
  }

  public delete(id: number) {
    this.http.get(`${urlphysique}/${id}`);
  }
}
