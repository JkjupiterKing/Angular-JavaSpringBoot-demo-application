import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard1',
  standalone: true,
  imports: [],
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.css'
})
export class Dashboard1Component implements OnInit {
  email: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || 'Guest';
    });
  }
}

