import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class LoginService {
    constructor(private httpClient: HttpClient,
    ) { }


    public signIn(name, password: string): Observable<any> {
        return this.httpClient.post("http://localhost:8080/api/login?name="+name+"&password="+password, null, { responseType: 'text' })
    }
}
