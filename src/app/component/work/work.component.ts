import { Component, OnInit } from '@angular/core';
import {Project} from '../../model/project.model';
import {ProjectService} from '../../service/project.service';

const TAGS = ['Java', 'Spring', 'SQL', 'JavaScript', 'HTML&CSS', 'Angular', 'Python'];
const HIDDEN = [334614549];

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})

export class WorkComponent implements OnInit {
  public showButtons: boolean;
  public isHidden: boolean;
  public hideRepos: number[];
  public projects: Project[] = [];
  public resultRepos: Project[] = [];
  public numOfAll: number;
  public carouselActiveProject: Project;

  constructor(
    private projectService: ProjectService
  ) {
    this.hideRepos = HIDDEN.slice(0);
    this.showButtons = false;
    this.isHidden = true;
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
      this.isHidden = true;
      return;
    }
    for (let i = 0 ; i < this.projects.length; i++){
      project = this.projects[i];
      if (project.topics == null || (!project.topics.includes(tag) && project.language !== tag)){
        this.hideRepos.push(project.id);
      }
    }
    this.getRepos();
    this.isHidden = true;
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

  public showMore(): void{
    this.isHidden = !this.isHidden;
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
      this.projects[0].image_url = 'assets/resources/alien.png';
      this.projects[1].image_url = 'assets/resources/calc.jpg';
      this.projects[2].image_url = 'assets/resources/covid.png';
      this.projects[3].image_url = 'assets/resources/recipes.jpg';

//       for (let i = 0; i < this.projects.length; i++) {
//         if (!this.project[i].image_url) {
//           this.projects[3].image_url = 'assets/resources/KK_logo.svg';
//         }
//       }

      this.projects[1].preview_url = 'https://kamil-kuk-calc-app.netlify.app';
      this.projects[5].preview_url = 'https://kamil-kukowski-java-dev.netlify.app';

      this.projects[5].language = TAGS[4];

      this.projects[0].topics = [TAGS[6]];
      this.projects[1].topics = [TAGS[4], TAGS[5]];
      this.projects[2].topics = [TAGS[2], 'JavaFX'];
      this.projects[3].topics = [TAGS[1], TAGS[2], TAGS[4]];
      this.projects[5].topics = [TAGS[4], TAGS[3], TAGS[5]];
      this.projects[6].topics = [TAGS[1], TAGS[2], TAGS[4]];

      this.numOfAll = this.getNumberOfTags('*');
      this.getRepos();
      this.carouselActiveProject = this.resultRepos[0];
    });
  }

}
