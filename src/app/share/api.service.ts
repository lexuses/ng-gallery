import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export const apiBase = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    public pictureList(limit, offset) {
        return this.http.get(apiBase + '/photos?_limit=' + limit + '&_start=' + offset);
    }
}
