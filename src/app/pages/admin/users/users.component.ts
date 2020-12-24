import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {

  values = ['Данил', 'asdas', 'asdasdasd'];
  constructor() { }

  ngOnInit(): void {
  }

  delete(q) {
    this.values = this.values.filter(s => s !== q);
  }
}
