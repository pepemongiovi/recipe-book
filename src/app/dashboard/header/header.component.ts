import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuPress = new EventEmitter();

  constructor(private authService: AuthService,
              private route: ActivatedRoute) { }

  private headerTitle: string;

  ngOnInit() {
    this.route.fragment.subscribe(
      (title) => {
        this.headerTitle = title;
      }
    );
  }

  logout() {
    this.authService.logout();
  }

  getHeaderTitle() {
    return this.headerTitle;
  }

  onMenuPress() {
    this.menuPress.emit();
  }
}
