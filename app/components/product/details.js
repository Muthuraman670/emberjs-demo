import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class ProductDetailsComponent extends Component {
    @tracked value=0;
    @action
    change(n){
         if( this.value==10 && n==1)
         {
             alert("exceeds 10 product");
         }
         else if(this.value==0 && n==-1)
         {
             alert("sorry..! its already 0");
         }
         else{
             this.value=this.value+n;
         }
     }
}

