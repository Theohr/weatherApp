import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly API_KEY = 'c3c87bbde4f1bd3600cd2b3af556a3bd';
  private readonly BASE_URL = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/weather`, {
      params: {
        q: city,
        units: 'metric',
        app_Id: this.API_KEY
      }
    });
  }

  getForecast(city: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/forecast`, {
      params: {
        q: city,
        units: 'metric',
        app_Id: this.API_KEY
      }
    });
  }
}