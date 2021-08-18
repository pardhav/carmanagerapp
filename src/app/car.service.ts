import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car';
import { environment } from '../environments/environment';
import { CapstoreWebURL } from './capstoreWebUrl';
@Injectable({providedIn: 'root'})

/*This is a clear mirroring of what we have done in the backend */
export class CarService {


  private apiServerUrl = environment.apiBasedUrl;

  constructor(private http: HttpClient) { }

  validateLogin(userId: string, userPassword: string, userType: string): Observable<any> {
    return this.http.get(`${CapstoreWebURL.URL}/login/login/${userId}/${userPassword}/${userType}`, { responseType: 'text' as 'json' })
  }

  public getCars(): Observable<Car[]>
  {
    return this.http.get<Car[]>(`${this.apiServerUrl}/car/all`);
  }
  public addCar(car: Car): Observable<any> {
    return this.http.post<Car>(`${this.apiServerUrl}/car/add`,car);
  }
  public updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiServerUrl}/car/update`, car);
  }

  public deleteCar(carId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/car/delete/${carId}`);
  }
}
