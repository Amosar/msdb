import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { DriverPointsDetails } from './driver-points-details.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class DriverPointsDetailsService {

    private resourceUrl = 'api/driver-points-details';
    private resourceSearchUrl = 'api/_search/driver-points-details';

    constructor(private http: Http) { }

    create(driverPointsDetails: DriverPointsDetails): Observable<DriverPointsDetails> {
        const copy = this.convert(driverPointsDetails);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(driverPointsDetails: DriverPointsDetails): Observable<DriverPointsDetails> {
        const copy = this.convert(driverPointsDetails);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<DriverPointsDetails> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }
    
    findDriverPointsDetail(eventEditionId: number, driverId: number): Observable<ResponseWrapper> {
        return this.http.get(`/api/event-editions/${eventEditionId}/points/${driverId}`).map((res: Response) => {
            return new ResponseWrapper(res.headers, res.json(), res.status);
        });
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(driverPointsDetails: DriverPointsDetails): DriverPointsDetails {
        const copy: DriverPointsDetails = Object.assign({}, driverPointsDetails);
        return copy;
    }
}