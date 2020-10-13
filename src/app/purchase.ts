import { Data } from '@angular/router';
import { Product } from './product';
import { User } from './user';

export class Purchase {
id:number;
date:Data;
total:number;
user:User;
product:Product



}