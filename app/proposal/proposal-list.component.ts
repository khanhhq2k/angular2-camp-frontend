import { Component } from '@angular/core';
import { Proposal } from './proposal';


@Component({
	moduleId: module.id,
	selector: "proposal-list",
	templateUrl: "proposal-list.component.html"
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(20, 'NUS company', 'https://porfolio.khanh.com', 'Angular2 + RoR', 120, 50, 3, 'client@yopmail.com');
  proposalTwo: Proposal = new Proposal(21, 'NUS company1', 'https://porfolio.khanh2.com', 'Angular2 + RoR + React', 150, 25, 8, 'client2@yopmail.com');
  proposalThree: Proposal = new Proposal(22, 'NUS company2', 'https://porfolio.khanh2.com', 'Angular2', 100, 57, 4, 'client3@yopmail.com');
  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}