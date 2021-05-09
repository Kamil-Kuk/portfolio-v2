import { Component, OnInit } from '@angular/core';
import {Project} from '../../model/project.model';
import {ProjectService} from '../../service/project.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  showButtons: boolean;
  manualRepos: number[];
  public projects: Project[] = [];

  constructor(
    private projectService: ProjectService
  ) {
    this.manualRepos = [332283097, 352052234, 334614549, 363749408, 320807663];
    this.showButtons = false;
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

}
