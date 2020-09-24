import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  petName = 'con Ky';
  petImg = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';

  updateName(name){
    this.petName = name;
  }

  updateImg(img){
    this.petImg = img;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
