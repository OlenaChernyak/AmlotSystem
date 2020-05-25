import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/group';
import { Company } from '../models/company';



@Injectable({ providedIn: 'root' })

export class AdminService {
    private urlAdmin = "http://localhost:8080/api/admin/";

    constructor(private httpClient: HttpClient,
    ) { }


    public addGroup(group: Group): Observable<any> {
        const token = localStorage.getItem('token');
        return this.httpClient.post(
            this.urlAdmin + token + "/groups", group, { responseType: 'json' });
    }
 
    public addCompany(company: Company): Observable<any> {
        const token = localStorage.getItem('token');
        return this.httpClient.post(
            this.urlAdmin + token + "/companies", company, { responseType: 'text' });
    }

    public getAllCompanies(): Observable<Company[]> {
        const token = localStorage.getItem('token');
        return this.httpClient.get<Company[]>(this.urlAdmin + token + "/allCompanies");
    }

    public getAllGroups(): Observable<Group[]> {
        const token = localStorage.getItem('token');
        return this.httpClient.get<Group[]>(this.urlAdmin + token + "/groups");
    }

    public getGroupById(id: number): Observable<Group> {
        const token = localStorage.getItem('token');
        return this.httpClient.get<Group>(this.urlAdmin + token + "/groups/byId/" + id);
    }

    updateGroup(group: Group): Observable<Group> {
        const token = localStorage.getItem('token');
        return this.httpClient.put<Group>(this.urlAdmin + token + "/groups_update", group);
    }

    public removeGroup(id: number): Observable<any> {
        const token = localStorage.getItem('token');
        return this.httpClient.delete(this.urlAdmin + token + "/groups/" + id);
    }

    public removeCompany(id: number): Observable<any> {
        const token = localStorage.getItem('token');
        return this.httpClient.delete(this.urlAdmin + token + "/companies/" + id);
    }

    public getAllGroupsByCompanyId(id: number): Observable<Group[]> {
        const token = localStorage.getItem('token');
        return this.httpClient.get<Group[]>(this.urlAdmin + token + "/companyId_groups/" + id);
    }

}
