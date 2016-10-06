import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SeriesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SeriesService {

  private baseUrl: string = '/tvdb-api';
  //private baseUrl: string = 'https://api.thetvdb.com';

  static get parameters() {
    return [[Http]];
  }

  constructor(public http: Http) {
    console.log('Hello SeriesService Provider');
  }

  getTimeline() {

    //localStorage.setItem('auth_token', this.accessToken);
    let authToken = localStorage.getItem('auth_token');
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Authorization', 'Bearer ' + authToken);

    let options = new RequestOptions({ headers: headers });

    var url = this.baseUrl + '/series/257655/episodes';
    url = 'http://api.michaelschilling.com/series/timeline';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }


  getTimelineFromLocalStorage() {
    return JSON.parse(`
      [
        {
          "aired": "2016-10-17T00:00:00",
          "serie": "Supergirl",
          "episode": "The Last Children of Krypton",
          "episodeCode": "S2E2"
        },
        {
          "aired": "2016-10-13T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Out of Time",
          "episodeCode": "S2E1"
        },
        {
          "aired": "2016-10-12T00:00:00",
          "serie": "Arrow",
          "episode": "The Recruits",
          "episodeCode": "S5E2"
        },
        {
          "aired": "2016-10-11T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Paradox",
          "episodeCode": "S3E2"
        },
        {
          "aired": "2016-10-10T00:00:00",
          "serie": "Supergirl",
          "episode": "The Adventures of Supergirl",
          "episodeCode": "S2E1"
        },
        {
          "aired": "2016-10-05T00:00:00",
          "serie": "Arrow",
          "episode": "Legacy",
          "episodeCode": "S5E1"
        },
        {
          "aired": "2016-10-04T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Flashpoint",
          "episodeCode": "S3E1"
        },
        {
          "aired": "2016-07-23T00:00:00",
          "serie": "Arrow",
          "episode": "Season 5 Comic-Con - First Look",
          "episodeCode": "S0E8"
        },
        {
          "aired": "2016-07-23T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Season 2 Comic-Con: First Look",
          "episodeCode": "S0E2"
        },
        {
          "aired": "2016-05-24T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Race of His Life",
          "episodeCode": "S2E23"
        },
        {
          "aired": "2016-05-19T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Legendary",
          "episodeCode": "S1E16"
        },
        {
          "aired": "2016-05-17T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Invincible",
          "episodeCode": "S2E22"
        },
        {
          "aired": "2016-05-12T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Destiny",
          "episodeCode": "S1E15"
        },
        {
          "aired": "2016-05-11T00:00:00",
          "serie": "Arrow",
          "episode": "Monument Point",
          "episodeCode": "S4E21"
        },
        {
          "aired": "2016-05-10T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Runaway Dinosaur",
          "episodeCode": "S2E21"
        },
        {
          "aired": "2016-05-10T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Chronicles Of Cisco: Entry 0419 - Part 4",
          "episodeCode": "S0E4"
        },
        {
          "aired": "2016-05-05T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "River of Time",
          "episodeCode": "S1E14"
        },
        {
          "aired": "2016-05-04T00:00:00",
          "serie": "Arrow",
          "episode": "Genesis",
          "episodeCode": "S4E20"
        },
        {
          "aired": "2016-05-03T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Rupture",
          "episodeCode": "S2E20"
        },
        {
          "aired": "2016-05-03T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Chronicles Of Cisco: Entry 0419 - Part 3",
          "episodeCode": "S0E3"
        },
        {
          "aired": "2016-04-28T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Leviathan",
          "episodeCode": "S1E13"
        },
        {
          "aired": "2016-04-27T00:00:00",
          "serie": "Arrow",
          "episode": "Canary Cry",
          "episodeCode": "S4E19"
        },
        {
          "aired": "2016-04-26T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Back to Normal",
          "episodeCode": "S2E19"
        },
        {
          "aired": "2016-04-26T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Chronicles Of Cisco: Entry 0419 - Part 2",
          "episodeCode": "S0E2"
        },
        {
          "aired": "2016-04-21T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Last Refuge",
          "episodeCode": "S1E12"
        },
        {
          "aired": "2016-04-19T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Versus Zoom",
          "episodeCode": "S2E18"
        },
        {
          "aired": "2016-04-19T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Chronicles Of Cisco: Entry 0419 - Part 1",
          "episodeCode": "S0E1"
        },
        {
          "aired": "2016-04-18T00:00:00",
          "serie": "Supergirl",
          "episode": "Better Angels",
          "episodeCode": "S1E20"
        },
        {
          "aired": "2016-04-14T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "The Magnificent Eight",
          "episodeCode": "S1E11"
        },
        {
          "aired": "2016-04-11T00:00:00",
          "serie": "Supergirl",
          "episode": "Myriad",
          "episodeCode": "S1E19"
        },
        {
          "aired": "2016-04-07T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Progeny",
          "episodeCode": "S1E10"
        },
        {
          "aired": "2016-04-06T00:00:00",
          "serie": "Arrow",
          "episode": "Eleven-Fifty-Nine",
          "episodeCode": "S4E18"
        },
        {
          "aired": "2016-03-31T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Left Behind",
          "episodeCode": "S1E9"
        },
        {
          "aired": "2016-03-30T00:00:00",
          "serie": "Arrow",
          "episode": "Beacon of Hope",
          "episodeCode": "S4E17"
        },
        {
          "aired": "2016-03-29T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Flash Back",
          "episodeCode": "S2E17"
        },
        {
          "aired": "2016-03-28T00:00:00",
          "serie": "Supergirl",
          "episode": "Worlds Finest",
          "episodeCode": "S1E18"
        },
        {
          "aired": "2016-03-23T00:00:00",
          "serie": "Arrow",
          "episode": "Broken Hearts",
          "episodeCode": "S4E16"
        },
        {
          "aired": "2016-03-22T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Trajectory",
          "episodeCode": "S2E16"
        },
        {
          "aired": "2016-03-21T00:00:00",
          "serie": "Supergirl",
          "episode": "Manhunter",
          "episodeCode": "S1E17"
        },
        {
          "aired": "2016-03-18T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "A Cold Day in Hell's Kitchen",
          "episodeCode": "S2E13"
        },
        {
          "aired": "2016-03-18T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "The Dark at the End of the Tunnel",
          "episodeCode": "S2E12"
        },
        {
          "aired": "2016-03-18T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": ".380",
          "episodeCode": "S2E11"
        },
        {
          "aired": "2016-03-18T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "The Man in the Box",
          "episodeCode": "S2E10"
        },
        {
          "aired": "2016-03-18T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Seven Minutes in Heaven",
          "episodeCode": "S2E9"
        },
        {
          "aired": "2016-03-18T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Guilty as Sin",
          "episodeCode": "S2E8"
        },
        {
          "aired": "2016-03-18T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Semper Fidelis",
          "episodeCode": "S2E7"
        },
        {
          "aired": "2016-03-18T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Regrets Only",
          "episodeCode": "S2E6"
        },
        {
          "aired": "2016-03-18T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Kinbaku",
          "episodeCode": "S2E5"
        },
        {
          "aired": "2016-03-18T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Penny and Dime",
          "episodeCode": "S2E4"
        },
        {
          "aired": "2016-03-18T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "New York's Finest",
          "episodeCode": "S2E3"
        },
        {
          "aired": "2016-03-18T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Dogs to a Gunfight",
          "episodeCode": "S2E2"
        },
        {
          "aired": "2016-03-18T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Bang",
          "episodeCode": "S2E1"
        },
        {
          "aired": "2016-03-14T00:00:00",
          "serie": "Supergirl",
          "episode": "Falling",
          "episodeCode": "S1E16"
        },
        {
          "aired": "2016-03-10T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Night of the Hawk",
          "episodeCode": "S1E8"
        },
        {
          "aired": "2016-03-03T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Marooned",
          "episodeCode": "S1E7"
        },
        {
          "aired": "2016-02-29T00:00:00",
          "serie": "Supergirl",
          "episode": "Solitude",
          "episodeCode": "S1E15"
        },
        {
          "aired": "2016-02-25T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Star City 2046",
          "episodeCode": "S1E6"
        },
        {
          "aired": "2016-02-24T00:00:00",
          "serie": "Arrow",
          "episode": "Taken",
          "episodeCode": "S4E15"
        },
        {
          "aired": "2016-02-23T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "King Shark",
          "episodeCode": "S2E15"
        },
        {
          "aired": "2016-02-22T00:00:00",
          "serie": "Supergirl",
          "episode": "Truth, Justice and the American Way",
          "episodeCode": "S1E14"
        },
        {
          "aired": "2016-02-18T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Fail-Safe",
          "episodeCode": "S1E5"
        },
        {
          "aired": "2016-02-17T00:00:00",
          "serie": "Arrow",
          "episode": "Code of Silence",
          "episodeCode": "S4E14"
        },
        {
          "aired": "2016-02-16T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Escape from Earth-2",
          "episodeCode": "S2E14"
        },
        {
          "aired": "2016-02-11T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "White Knights",
          "episodeCode": "S1E4"
        },
        {
          "aired": "2016-02-10T00:00:00",
          "serie": "Arrow",
          "episode": "Sins of the Father",
          "episodeCode": "S4E13"
        },
        {
          "aired": "2016-02-09T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Welcome to Earth-2",
          "episodeCode": "S2E13"
        },
        {
          "aired": "2016-02-08T00:00:00",
          "serie": "Supergirl",
          "episode": "For the Girl Who Has Everything",
          "episodeCode": "S1E13"
        },
        {
          "aired": "2016-02-04T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Blood Ties",
          "episodeCode": "S1E3"
        },
        {
          "aired": "2016-02-03T00:00:00",
          "serie": "Arrow",
          "episode": "Unchained",
          "episodeCode": "S4E12"
        },
        {
          "aired": "2016-02-02T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Fast Lane",
          "episodeCode": "S2E12"
        },
        {
          "aired": "2016-02-01T00:00:00",
          "serie": "Supergirl",
          "episode": "Bizarro",
          "episodeCode": "S1E12"
        },
        {
          "aired": "2016-01-28T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Pilot (2)",
          "episodeCode": "S1E2"
        },
        {
          "aired": "2016-01-27T00:00:00",
          "serie": "Arrow",
          "episode": "A.W.O.L.",
          "episodeCode": "S4E11"
        },
        {
          "aired": "2016-01-26T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Reverse-Flash Returns",
          "episodeCode": "S2E11"
        },
        {
          "aired": "2016-01-25T00:00:00",
          "serie": "Supergirl",
          "episode": "Strange Visitor From Another Planet",
          "episodeCode": "S1E11"
        },
        {
          "aired": "2016-01-21T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Pilot (1)",
          "episodeCode": "S1E1"
        },
        {
          "aired": "2016-01-20T00:00:00",
          "serie": "Arrow",
          "episode": "Blood Debts",
          "episodeCode": "S4E10"
        },
        {
          "aired": "2016-01-19T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Potential Energy",
          "episodeCode": "S2E10"
        },
        {
          "aired": "2016-01-19T00:00:00",
          "serie": "DC's Legends of Tomorrow",
          "episode": "Their Time Is Now",
          "episodeCode": "S0E1"
        },
        {
          "aired": "2016-01-18T00:00:00",
          "serie": "Supergirl",
          "episode": "Childish Things",
          "episodeCode": "S1E10"
        },
        {
          "aired": "2016-01-04T00:00:00",
          "serie": "Supergirl",
          "episode": "Blood Bonds",
          "episodeCode": "S1E9"
        },
        {
          "aired": "2015-12-14T00:00:00",
          "serie": "Supergirl",
          "episode": "Hostile Takeover",
          "episodeCode": "S1E8"
        },
        {
          "aired": "2015-12-09T00:00:00",
          "serie": "Arrow",
          "episode": "Dark Waters",
          "episodeCode": "S4E9"
        },
        {
          "aired": "2015-12-08T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Running to Stand Still",
          "episodeCode": "S2E9"
        },
        {
          "aired": "2015-12-07T00:00:00",
          "serie": "Supergirl",
          "episode": "Human for a Day",
          "episodeCode": "S1E7"
        },
        {
          "aired": "2015-12-02T00:00:00",
          "serie": "Arrow",
          "episode": "Legends of Yesterday (2)",
          "episodeCode": "S4E8"
        },
        {
          "aired": "2015-12-01T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Legends of Today (1)",
          "episodeCode": "S2E8"
        },
        {
          "aired": "2015-11-30T00:00:00",
          "serie": "Supergirl",
          "episode": "Red Faced",
          "episodeCode": "S1E6"
        },
        {
          "aired": "2015-11-23T00:00:00",
          "serie": "Supergirl",
          "episode": "How Does She Do It?",
          "episodeCode": "S1E5"
        },
        {
          "aired": "2015-11-18T00:00:00",
          "serie": "Arrow",
          "episode": "Brotherhood",
          "episodeCode": "S4E7"
        },
        {
          "aired": "2015-11-17T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Gorilla Warfare",
          "episodeCode": "S2E7"
        },
        {
          "aired": "2015-11-16T00:00:00",
          "serie": "Supergirl",
          "episode": "Livewire",
          "episodeCode": "S1E4"
        },
        {
          "aired": "2015-11-11T00:00:00",
          "serie": "Arrow",
          "episode": "Lost Souls",
          "episodeCode": "S4E6"
        },
        {
          "aired": "2015-11-10T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Enter Zoom",
          "episodeCode": "S2E6"
        },
        {
          "aired": "2015-11-09T00:00:00",
          "serie": "Supergirl",
          "episode": "Fight or Flight",
          "episodeCode": "S1E3"
        },
        {
          "aired": "2015-11-04T00:00:00",
          "serie": "Arrow",
          "episode": "Haunted",
          "episodeCode": "S4E5"
        },
        {
          "aired": "2015-11-03T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Darkness and the Light",
          "episodeCode": "S2E5"
        },
        {
          "aired": "2015-11-02T00:00:00",
          "serie": "Supergirl",
          "episode": "Stronger Together",
          "episodeCode": "S1E2"
        },
        {
          "aired": "2015-10-28T00:00:00",
          "serie": "Arrow",
          "episode": "Beyond Redemption",
          "episodeCode": "S4E4"
        },
        {
          "aired": "2015-10-27T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Fury of Firestorm",
          "episodeCode": "S2E4"
        },
        {
          "aired": "2015-10-26T00:00:00",
          "serie": "Supergirl",
          "episode": "Pilot",
          "episodeCode": "S1E1"
        },
        {
          "aired": "2015-10-21T00:00:00",
          "serie": "Arrow",
          "episode": "Restoration",
          "episodeCode": "S4E3"
        },
        {
          "aired": "2015-10-20T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Family of Rogues",
          "episodeCode": "S2E3"
        },
        {
          "aired": "2015-10-14T00:00:00",
          "serie": "Arrow",
          "episode": "The Candidate",
          "episodeCode": "S4E2"
        },
        {
          "aired": "2015-10-13T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Flash of Two Worlds",
          "episodeCode": "S2E2"
        },
        {
          "aired": "2015-10-07T00:00:00",
          "serie": "Arrow",
          "episode": "Green Arrow",
          "episodeCode": "S4E1"
        },
        {
          "aired": "2015-10-06T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Man Who Saved Central City",
          "episodeCode": "S2E1"
        },
        {
          "aired": "2015-05-19T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Fast Enough",
          "episodeCode": "S1E23"
        },
        {
          "aired": "2015-05-12T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Rogue Air",
          "episodeCode": "S1E22"
        },
        {
          "aired": "2015-05-05T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Grodd Lives",
          "episodeCode": "S1E21"
        },
        {
          "aired": "2015-04-29T00:00:00",
          "serie": "Arrow",
          "episode": "Al Sah-him",
          "episodeCode": "S3E21"
        },
        {
          "aired": "2015-04-28T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Trap",
          "episodeCode": "S1E20"
        },
        {
          "aired": "2015-04-22T00:00:00",
          "serie": "Arrow",
          "episode": "The Fallen",
          "episodeCode": "S3E20"
        },
        {
          "aired": "2015-04-21T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Who is Harrison Wells?",
          "episodeCode": "S1E19"
        },
        {
          "aired": "2015-04-15T00:00:00",
          "serie": "Arrow",
          "episode": "Broken Arrow",
          "episodeCode": "S3E19"
        },
        {
          "aired": "2015-04-14T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "All-Star Team-Up",
          "episodeCode": "S1E18"
        },
        {
          "aired": "2015-04-10T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Daredevil",
          "episodeCode": "S1E13"
        },
        {
          "aired": "2015-04-10T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "The Ones We Leave Behind",
          "episodeCode": "S1E12"
        },
        {
          "aired": "2015-04-10T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "The Path of the Righteous",
          "episodeCode": "S1E11"
        },
        {
          "aired": "2015-04-10T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Nelson v. Murdock",
          "episodeCode": "S1E10"
        },
        {
          "aired": "2015-04-10T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Speak of the Devil",
          "episodeCode": "S1E9"
        },
        {
          "aired": "2015-04-10T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Shadows in the Glass",
          "episodeCode": "S1E8"
        },
        {
          "aired": "2015-04-10T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Stick",
          "episodeCode": "S1E7"
        },
        {
          "aired": "2015-04-10T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Condemned",
          "episodeCode": "S1E6"
        },
        {
          "aired": "2015-04-10T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "World on Fire",
          "episodeCode": "S1E5"
        },
        {
          "aired": "2015-04-10T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "In the Blood",
          "episodeCode": "S1E4"
        },
        {
          "aired": "2015-04-10T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Rabbit in a Snow Storm",
          "episodeCode": "S1E3"
        },
        {
          "aired": "2015-04-10T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Cut Man",
          "episodeCode": "S1E2"
        },
        {
          "aired": "2015-04-10T00:00:00",
          "serie": "Marvel's Daredevil",
          "episode": "Into the Ring",
          "episodeCode": "S1E1"
        },
        {
          "aired": "2015-04-01T00:00:00",
          "serie": "Arrow",
          "episode": "Public Enemy",
          "episodeCode": "S3E18"
        },
        {
          "aired": "2015-03-31T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Tricksters",
          "episodeCode": "S1E17"
        },
        {
          "aired": "2015-03-25T00:00:00",
          "serie": "Arrow",
          "episode": "Suicidal Tendencies",
          "episodeCode": "S3E17"
        },
        {
          "aired": "2015-03-24T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Rogue Time",
          "episodeCode": "S1E16"
        },
        {
          "aired": "2015-03-18T00:00:00",
          "serie": "Arrow",
          "episode": "The Offer",
          "episodeCode": "S3E16"
        },
        {
          "aired": "2015-03-17T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Out of Time",
          "episodeCode": "S1E15"
        },
        {
          "aired": "2015-02-25T00:00:00",
          "serie": "Arrow",
          "episode": "Nanda Parbat",
          "episodeCode": "S3E15"
        },
        {
          "aired": "2015-02-18T00:00:00",
          "serie": "Arrow",
          "episode": "The Return",
          "episodeCode": "S3E14"
        },
        {
          "aired": "2015-02-17T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Fallout",
          "episodeCode": "S1E14"
        },
        {
          "aired": "2015-02-11T00:00:00",
          "serie": "Arrow",
          "episode": "Canaries",
          "episodeCode": "S3E13"
        },
        {
          "aired": "2015-02-10T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Nuclear Man",
          "episodeCode": "S1E13"
        },
        {
          "aired": "2015-02-04T00:00:00",
          "serie": "Arrow",
          "episode": "Uprising",
          "episodeCode": "S3E12"
        },
        {
          "aired": "2015-02-03T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Crazy for You",
          "episodeCode": "S1E12"
        },
        {
          "aired": "2015-01-28T00:00:00",
          "serie": "Arrow",
          "episode": "Midnight City",
          "episodeCode": "S3E11"
        },
        {
          "aired": "2015-01-27T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Sound and the Fury",
          "episodeCode": "S1E11"
        },
        {
          "aired": "2015-01-21T00:00:00",
          "serie": "Arrow",
          "episode": "Left Behind",
          "episodeCode": "S3E10"
        },
        {
          "aired": "2015-01-20T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Revenge of the Rogues",
          "episodeCode": "S1E10"
        },
        {
          "aired": "2014-12-10T00:00:00",
          "serie": "Arrow",
          "episode": "The Climb",
          "episodeCode": "S3E9"
        },
        {
          "aired": "2014-12-09T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Man in the Yellow Suit",
          "episodeCode": "S1E9"
        },
        {
          "aired": "2014-12-03T00:00:00",
          "serie": "Arrow",
          "episode": "The Brave and the Bold (2)",
          "episodeCode": "S3E8"
        },
        {
          "aired": "2014-12-02T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Flash vs. Arrow (1)",
          "episodeCode": "S1E8"
        },
        {
          "aired": "2014-11-25T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Power Outage",
          "episodeCode": "S1E7"
        },
        {
          "aired": "2014-11-19T00:00:00",
          "serie": "Arrow",
          "episode": "Draw Back Your Bow",
          "episodeCode": "S3E7"
        },
        {
          "aired": "2014-11-18T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "The Flash is Born",
          "episodeCode": "S1E6"
        },
        {
          "aired": "2014-11-12T00:00:00",
          "serie": "Arrow",
          "episode": "Guilty",
          "episodeCode": "S3E6"
        },
        {
          "aired": "2014-11-11T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Plastique",
          "episodeCode": "S1E5"
        },
        {
          "aired": "2014-11-05T00:00:00",
          "serie": "Arrow",
          "episode": "The Secret Origin of Felicity Smoak",
          "episodeCode": "S3E5"
        },
        {
          "aired": "2014-10-29T00:00:00",
          "serie": "Arrow",
          "episode": "The Magician",
          "episodeCode": "S3E4"
        },
        {
          "aired": "2014-10-28T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Going Rogue",
          "episodeCode": "S1E4"
        },
        {
          "aired": "2014-10-22T00:00:00",
          "serie": "Arrow",
          "episode": "Corto Maltese",
          "episodeCode": "S3E3"
        },
        {
          "aired": "2014-10-21T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Things You Can't Outrun",
          "episodeCode": "S1E3"
        },
        {
          "aired": "2014-10-15T00:00:00",
          "serie": "Arrow",
          "episode": "Sara",
          "episodeCode": "S3E2"
        },
        {
          "aired": "2014-10-14T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "Fastest Man Alive",
          "episodeCode": "S1E2"
        },
        {
          "aired": "2014-10-08T00:00:00",
          "serie": "Arrow",
          "episode": "The Calm",
          "episodeCode": "S3E1"
        },
        {
          "aired": "2014-10-07T00:00:00",
          "serie": "The Flash (2014)",
          "episode": "City of Heroes",
          "episodeCode": "S1E1"
        },
        {
          "aired": "2014-04-30T00:00:00",
          "serie": "Arrow",
          "episode": "City of Blood",
          "episodeCode": "S2E21"
        },
        {
          "aired": "2014-04-23T00:00:00",
          "serie": "Arrow",
          "episode": "Seeing Red",
          "episodeCode": "S2E20"
        },
        {
          "aired": "2014-04-16T00:00:00",
          "serie": "Arrow",
          "episode": "The Man Under the Hood",
          "episodeCode": "S2E19"
        },
        {
          "aired": "2014-04-02T00:00:00",
          "serie": "Arrow",
          "episode": "Deathstroke",
          "episodeCode": "S2E18"
        },
        {
          "aired": "2014-03-26T00:00:00",
          "serie": "Arrow",
          "episode": "Birds of Prey",
          "episodeCode": "S2E17"
        },
        {
          "aired": "2014-03-19T00:00:00",
          "serie": "Arrow",
          "episode": "Suicide Squad",
          "episodeCode": "S2E16"
        },
        {
          "aired": "2014-03-05T00:00:00",
          "serie": "Arrow",
          "episode": "The Promise",
          "episodeCode": "S2E15"
        },
        {
          "aired": "2014-02-26T00:00:00",
          "serie": "Arrow",
          "episode": "Time of Death",
          "episodeCode": "S2E14"
        },
        {
          "aired": "2014-02-05T00:00:00",
          "serie": "Arrow",
          "episode": "Heir to the Demon",
          "episodeCode": "S2E13"
        },
        {
          "aired": "2014-01-29T00:00:00",
          "serie": "Arrow",
          "episode": "Tremors",
          "episodeCode": "S2E12"
        },
        {
          "aired": "2014-01-22T00:00:00",
          "serie": "Arrow",
          "episode": "Blind Spot",
          "episodeCode": "S2E11"
        },
        {
          "aired": "2014-01-15T00:00:00",
          "serie": "Arrow",
          "episode": "Blast Radius",
          "episodeCode": "S2E10"
        },
        {
          "aired": "2013-12-11T00:00:00",
          "serie": "Arrow",
          "episode": "Three Ghosts",
          "episodeCode": "S2E9"
        },
        {
          "aired": "2013-12-11T00:00:00",
          "serie": "Arrow",
          "episode": "Blood Rush: Part Six",
          "episodeCode": "S0E7"
        },
        {
          "aired": "2013-12-04T00:00:00",
          "serie": "Arrow",
          "episode": "The Scientist",
          "episodeCode": "S2E8"
        },
        {
          "aired": "2013-12-04T00:00:00",
          "serie": "Arrow",
          "episode": "Blood Rush: Part Five ",
          "episodeCode": "S0E6"
        },
        {
          "aired": "2013-11-27T00:00:00",
          "serie": "Arrow",
          "episode": "Blood Rush: Part Four",
          "episodeCode": "S0E5"
        },
        {
          "aired": "2013-11-20T00:00:00",
          "serie": "Arrow",
          "episode": "State v. Queen",
          "episodeCode": "S2E7"
        },
        {
          "aired": "2013-11-20T00:00:00",
          "serie": "Arrow",
          "episode": "Blood Rush: Part Three",
          "episodeCode": "S0E4"
        },
        {
          "aired": "2013-11-13T00:00:00",
          "serie": "Arrow",
          "episode": "Keep Your Enemies Closer",
          "episodeCode": "S2E6"
        },
        {
          "aired": "2013-11-13T00:00:00",
          "serie": "Arrow",
          "episode": "Blood Rush: Part Two",
          "episodeCode": "S0E3"
        },
        {
          "aired": "2013-11-06T00:00:00",
          "serie": "Arrow",
          "episode": "League of Assassins",
          "episodeCode": "S2E5"
        },
        {
          "aired": "2013-11-06T00:00:00",
          "serie": "Arrow",
          "episode": "Blood Rush: Part One",
          "episodeCode": "S0E2"
        },
        {
          "aired": "2013-10-30T00:00:00",
          "serie": "Arrow",
          "episode": "Crucible",
          "episodeCode": "S2E4"
        },
        {
          "aired": "2013-10-23T00:00:00",
          "serie": "Arrow",
          "episode": "Broken Dolls",
          "episodeCode": "S2E3"
        },
        {
          "aired": "2013-10-16T00:00:00",
          "serie": "Arrow",
          "episode": "Identity",
          "episodeCode": "S2E2"
        },
        {
          "aired": "2013-10-09T00:00:00",
          "serie": "Arrow",
          "episode": "City of Heroes",
          "episodeCode": "S2E1"
        },
        {
          "aired": "2013-10-02T00:00:00",
          "serie": "Arrow",
          "episode": "Year One",
          "episodeCode": "S0E1"
        },
        {
          "aired": "2013-05-01T00:00:00",
          "serie": "Arrow",
          "episode": "The Undertaking",
          "episodeCode": "S1E21"
        },
        {
          "aired": "2013-04-24T00:00:00",
          "serie": "Arrow",
          "episode": "Home Invasion",
          "episodeCode": "S1E20"
        },
        {
          "aired": "2013-04-03T00:00:00",
          "serie": "Arrow",
          "episode": "Unfinished Business",
          "episodeCode": "S1E19"
        },
        {
          "aired": "2013-03-27T00:00:00",
          "serie": "Arrow",
          "episode": "Salvation",
          "episodeCode": "S1E18"
        },
        {
          "aired": "2013-03-20T00:00:00",
          "serie": "Arrow",
          "episode": "The Huntress Returns",
          "episodeCode": "S1E17"
        },
        {
          "aired": "2013-02-27T00:00:00",
          "serie": "Arrow",
          "episode": "Dead to Rights",
          "episodeCode": "S1E16"
        },
        {
          "aired": "2013-02-20T00:00:00",
          "serie": "Arrow",
          "episode": "Dodger",
          "episodeCode": "S1E15"
        },
        {
          "aired": "2013-02-13T00:00:00",
          "serie": "Arrow",
          "episode": "The Odyssey",
          "episodeCode": "S1E14"
        },
        {
          "aired": "2013-02-06T00:00:00",
          "serie": "Arrow",
          "episode": "Betrayal",
          "episodeCode": "S1E13"
        },
        {
          "aired": "2013-01-30T00:00:00",
          "serie": "Arrow",
          "episode": "Vertigo",
          "episodeCode": "S1E12"
        },
        {
          "aired": "2013-01-23T00:00:00",
          "serie": "Arrow",
          "episode": "Trust But Verify",
          "episodeCode": "S1E11"
        },
        {
          "aired": "2013-01-16T00:00:00",
          "serie": "Arrow",
          "episode": "Burned",
          "episodeCode": "S1E10"
        },
        {
          "aired": "2012-12-12T00:00:00",
          "serie": "Arrow",
          "episode": "Year's End",
          "episodeCode": "S1E9"
        },
        {
          "aired": "2012-12-05T00:00:00",
          "serie": "Arrow",
          "episode": "Vendetta",
          "episodeCode": "S1E8"
        },
        {
          "aired": "2012-11-28T00:00:00",
          "serie": "Arrow",
          "episode": "Muse of Fire",
          "episodeCode": "S1E7"
        },
        {
          "aired": "2012-11-14T00:00:00",
          "serie": "Arrow",
          "episode": "Legacies",
          "episodeCode": "S1E6"
        },
        {
          "aired": "2012-11-07T00:00:00",
          "serie": "Arrow",
          "episode": "Damaged",
          "episodeCode": "S1E5"
        },
        {
          "aired": "2012-10-31T00:00:00",
          "serie": "Arrow",
          "episode": "An Innocent Man",
          "episodeCode": "S1E4"
        },
        {
          "aired": "2012-10-24T00:00:00",
          "serie": "Arrow",
          "episode": "Lone Gunmen",
          "episodeCode": "S1E3"
        },
        {
          "aired": "2012-10-17T00:00:00",
          "serie": "Arrow",
          "episode": "Honor Thy Father",
          "episodeCode": "S1E2"
        },
        {
          "aired": "2012-10-10T00:00:00",
          "serie": "Arrow",
          "episode": "Pilot",
          "episodeCode": "S1E1"
        }
      ]`);
  };


}
