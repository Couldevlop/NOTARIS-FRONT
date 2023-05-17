import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const urldocapi = "https://localhost:8086/notaris/v1/upload";

@Injectable({
  providedIn: "root",
})
export class DocumentServiceService {
  constructor(private http: HttpClient) {}

  public saveFile(file: File): Observable<any> {
    return this.http.post(urldocapi, file);
  }
}
