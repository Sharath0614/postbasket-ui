import { Component, OnInit, setTestabilityGetter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('this is initialisation');
  };

 onAddPost = ()  => {
return '';
  };
};


