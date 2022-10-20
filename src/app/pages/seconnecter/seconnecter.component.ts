import { Component, OnInit } from '@angular/core';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.css']
})
export class SeconnecterComponent implements OnInit {

  faRightToBracket = faRightToBracket;
  faUser = faUser;
  faLock = faLock;
  faGoogle = faGoogle;

  constructor() { }

  ngOnInit(): void {
  }

}
