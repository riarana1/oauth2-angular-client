import { Component } from '@angular/core';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  message = '';

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.resourceService.admin().subscribe(
      (data) => {
        this.message = data.message;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
