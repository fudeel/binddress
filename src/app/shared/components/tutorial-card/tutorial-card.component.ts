import {Component, Input, OnInit} from '@angular/core';
import {TutorialCard} from '../../models/tutorial-card';
import {faLifeRing, faSatelliteDish, faShieldAlt, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tutorial-card',
  templateUrl: './tutorial-card.component.html',
  styleUrls: ['./tutorial-card.component.scss']
})
export class TutorialCardComponent implements OnInit {

  @Input() tutorialCard: TutorialCard;
  icon: any;

  constructor() {
  }

  ngOnInit(): void {
    const img = this.tutorialCard.img;
    this.icon = img === 'img-0' ? faUser : img === 'img-1' ?
      faShieldAlt : img === 'img-2' ?
        faLifeRing : img === 'img-3' ?
          faSatelliteDish : null;
  }

}
