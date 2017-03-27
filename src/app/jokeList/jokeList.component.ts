import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joke-list',
  templateUrl: './jokeList.component.html',
  styleUrls: ['./jokeList.component.css']
})
export class JokeListComponent implements OnInit {
  setup: string;
  punchline: string;
  
  jokes: Object[];

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?",
        "Halloumi (Hello Me)"),
      new Joke("What kind of cheese do you use to disguise a pony?",
        "Mask-a-pony(Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me",
        "I thought 'That's not very mature'")
    ];
  }

  ngOnInit() {
  }

}
