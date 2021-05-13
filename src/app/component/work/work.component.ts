import { Component, OnInit } from '@angular/core';
import {Project} from '../../model/project.model';
import {ProjectService} from '../../service/project.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const TAGS = ['Java', 'Spring', 'Hibernate', 'SQL', 'JavaScript', 'HTML&CSS', 'Angular', 'Python'];
const HIDDEN = [334614549];

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})

export class WorkComponent implements OnInit {
  public showButtons: boolean;
  public hideRepos: number[];
  public projects: Project[] = [];
  public resultRepos: Project[] = [];
  public numOfAll: number;
  public carouselActiveProject: Project;

  constructor(
    private projectService: ProjectService
  ) {
    // this.manualRepos = [332283097, 352052234, 334614549, 363749408, 320807663];
    this.hideRepos = HIDDEN.slice(0);
    this.showButtons = false;
  }

  public getNumberOfTags(tag: string): number{
    let result = 0;
    let project: Project;
    const numOfHidden = this.hideRepos.length;
    if (tag === '*'){
      return this.projects.length - numOfHidden;
    }
    for (let i = 0 ; i < this.projects.length; i++){
      project = this.projects[i];
      if (project.language === tag){
        result++;
      }else if (project.topics != null && project.topics.includes(tag)) {
        result++;
      }
    }
    return result;
  }

  public showByTag(tag: string): void {
    let project: Project;
    this.hideRepos = HIDDEN.slice(0);
    if (tag === '*') {
      this.getRepos();
      return;
    }
    for (let i = 0 ; i < this.projects.length; i++){
      project = this.projects[i];
      if (project.topics == null || (!project.topics.includes(tag) && project.language !== tag)){
        this.hideRepos.push(project.id);
      }
    }
    this.getRepos();
  }

  public getRepos(): void {
    this.resultRepos = [];
    for (let project of this.projects){
      if (!this.hideRepos.includes(project.id)){
        this.resultRepos.push(project);
      }
    }
    this.carouselActiveProject = this.resultRepos[0];
}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
      this.projects[0].image_url = 'assets/resources/alien.png';
      this.projects[1].image_url = 'assets/resources/calc.jpg';
      this.projects[2].image_url = 'assets/resources/covid.png';
      this.projects[3].image_url = 'assets/resources/recipes.jpg';

      this.projects[1].preview_url = 'https://kamil-kuk-calc-app.netlify.app';

      this.projects[5].language = TAGS[5];

      this.projects[0].topics = [TAGS[7]];
      this.projects[1].topics = [TAGS[5], TAGS[6]];
      this.projects[2].topics = [TAGS[2], TAGS[3], 'JavaFX'];
      this.projects[3].topics = [TAGS[1], TAGS[3], TAGS[5]];
      this.projects[5].topics = [TAGS[5], TAGS[4], TAGS[6]];
      this.projects[6].topics = [TAGS[1], TAGS[3], TAGS[5]];

      this.numOfAll = this.getNumberOfTags('*');
      this.getRepos();
      this.carouselActiveProject = this.resultRepos[0];
    });
  }

}
