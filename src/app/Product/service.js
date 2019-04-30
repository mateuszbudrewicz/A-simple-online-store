import { Observable } from 'rxjs';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';

export const getProducts = () => 
    Observable.ajax.get("http://localhost:3001/products")
        .map(res => res.response)