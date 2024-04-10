import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  isSlideOut = true;

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }

  onDash() {}

  onProfile() {}

  onLogout(){}

  onHistory() {}
}
