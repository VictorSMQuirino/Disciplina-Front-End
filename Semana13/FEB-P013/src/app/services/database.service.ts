import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PetAssistance } from '../models/petAssistance.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  postPetAssistance(petData: {
    petName: string,
    petBreed: string,
    tutorName: string,
    petAge: string,
    hour: string
  }) {
    this.http.post(
      'https://feb-p013-1ba46-default-rtdb.firebaseio.com/pets.json', petData
    ).subscribe(response => {
      console.log(response);
    });
  }

  getPetAssistances() {
    return this.http.get<{[key: string]: PetAssistance}>('https://feb-p013-1ba46-default-rtdb.firebaseio.com/pets.json',
      {
        params: new HttpParams().set('print', 'pretty')
      }
    )
    .pipe(
      map((responseData) => {
        const array: PetAssistance[] = [];
        for (const key in responseData) {
          if ((responseData).hasOwnProperty(key)){
            array.push({...(responseData as any)[key], id: key});
          }
        }
        return array;
      })
    )
  }

  putPetAssistance(petId: string, petData: {
    petName: string,
    petBreed: string,
    tutorName: string,
    petAge: string,
    hour: string
  }) {
    return this.http.put(`https://feb-p013-1ba46-default-rtdb.firebaseio.com/pets/${petId}.json`, petData, { observe: 'response'});
  }


}
