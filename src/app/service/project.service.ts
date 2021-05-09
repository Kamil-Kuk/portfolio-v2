import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../model/project.model';
import {environment} from '../../environments/environment';

const ENDPOINT = '/repos';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  public getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(environment.API_BASE + ENDPOINT);
  }
}
