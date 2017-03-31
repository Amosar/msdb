import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { EventEdition } from './event-edition.model';
import { DateUtils } from 'ng-jhipster';
@Injectable()
export class EventEditionService {

    private resourceUrl = 'api/event-editions';
    private resourceSearchUrl = 'api/_search/event-editions';

    constructor(private http: Http, private dateUtils: DateUtils) { }

    create(eventEdition: EventEdition): Observable<EventEdition> {
        let copy: EventEdition = Object.assign({}, eventEdition);
        copy.eventDate = this.dateUtils
            .convertLocalDateToServer(eventEdition.eventDate);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(eventEdition: EventEdition): Observable<EventEdition> {
        let copy: EventEdition = Object.assign({}, eventEdition);
        copy.eventDate = this.dateUtils
            .convertLocalDateToServer(eventEdition.eventDate);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<EventEdition> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            let jsonResponse = res.json();
            jsonResponse.eventDate = new Date(
                    jsonResponse.eventDate[0], jsonResponse.eventDate[1] - 1, jsonResponse.eventDate[2]);
            return jsonResponse;
        });
    }
    
    findSessions(id: number): Observable<Response> {
        return this.http.get(`${this.resourceUrl}/${id}/sessions`).map((res: Response) => {
            return this.transformDateTime(res);
        });
    }

    query(req?: any): Observable<Response> {
        let options = this.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: any) => this.convertResponse(res))
        ;
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    search(req?: any): Observable<Response> {
        let options = this.createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
            .map((res: any) => this.convertResponse(res))
        ;
    }

    private convertResponse(res: any): any {
        let jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            jsonResponse[i].eventDate = new Date(
                    jsonResponse[i].eventDate[0], jsonResponse[i].eventDate[1] - 1, jsonResponse[i].eventDate[2]);
        }
        res._body = jsonResponse;
        return res;
    }
    
    private transformDateTime(res: any): any {
        let jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            jsonResponse[i].sessionStartTime = new Date(jsonResponse[i].sessionStartTime * 1000);
        }
        res._body = jsonResponse;
        return res;
    }

    private createRequestOption(req?: any): BaseRequestOptions {
        let options: BaseRequestOptions = new BaseRequestOptions();
        if (req) {
            let params: URLSearchParams = new URLSearchParams();
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('query', req.query);

            options.search = params;
        }
        return options;
    }
}
