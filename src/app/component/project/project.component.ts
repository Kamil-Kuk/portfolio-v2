import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../model/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent{
  showButtons: boolean;

  constructor() {
    this.showButtons = false;
  }
  @Input() project: Project;

}
