import { Component, Input, OnChanges } from '@angular/core';
import { SidenavComponent } from '../common/sidenav/sidenav.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnChanges {
  @Input() data!: string;
  loginState: number = 0;

  ngOnChanges() {
    this.loginState++;
  }
}
