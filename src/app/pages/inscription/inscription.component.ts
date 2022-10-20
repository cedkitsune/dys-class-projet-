import { Component, OnInit } from '@angular/core';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  faGoogle = faGoogle;

  constructor() { }

  ngOnInit(): void {
  }

}
