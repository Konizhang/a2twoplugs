import { Component, OnInit,AfterViewInit} from '@angular/core';
import { Category } from '../model/category';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';

declare var jQuery: any;

@Component({
  selector: 'app-addservice',
  templateUrl: 'addservice.component.html'
})
export class AddserviceComponent implements OnInit {
  title: string = "add";
  islogin: boolean;
  logedinheader: string;

  categories: Category[];
  serviceForm: FormGroup;
  subcategories: Category[];
  constructor(private serviceService: ServiceService) {



    this.serviceForm = new FormGroup({
      'name': new FormControl("", Validators.required),
      'desc': new FormControl(),
      'category': new FormControl("", [Validators.required]),
      'subcategory': new FormControl("", [Validators.required]),
      'price': new FormControl("", [Validators.required]),
    });

  }
ngAfterViewInit(){

  // jQuery('.typeFile input,.check input,.cuSelect select').styler();
  //  jQuery('.typeFileAddImg input').styler({
  //       filePlaceholder: '',
  //       fileBrowse: 'ADD HERE'
  //   });

}
  ngOnInit() {
    this.serviceService.getSubCategoriesByid(0).subscribe(
      cateogries => {
        this.categories = cateogries;
        console.log(this.categories);
      }
    )
    this.islogin = true;
  }

  onSubmit() {
    console.log(this.serviceForm.value);

  }


  getsubcategory(category) {
    //console.log(category.value);
     this.serviceService.getSubCategoriesByid(category.value).subscribe(
      cateogries => {
        this.subcategories = cateogries; 
      }
    )
  }
}
