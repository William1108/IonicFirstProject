import {Appareil} from "../models/Appareil";
import {Subject} from "rxjs/Subject";
import * as firebase from 'firebase';



import DataSnapshot = firebase.database.DataSnapshot;

export class AppareilsService{

  appareil$ = new Subject<Appareil[]>();

  appareilsList:Appareil[] = [
    {
      name:'Machine à laver',
      description:[
        'Volume: 6 litres',
        'Temps de lavage: 2 heures',
        'Consomation: 135 kWh/an'
      ],
      isOn:true,
      startTime: '',
      endTime:''
    },
    {
      name:'Lavabo',
      description:[
        'Dimension: 40 pouces',
        'Consomation: 22 kWh/an'
      ],
      isOn:true,
      startTime: '',
      endTime:''
    },
    {
      name:'Ordinateur',
      description:[
        'Marque: Asus',
        'Consomation: 500 kWh/an'
      ],
      isOn:false,
      startTime: '',
      endTime:''
    }
  ];

  addAppareil(appareil: Appareil){
    this.appareilsList.push(appareil);
    this.emitAppareil();
  }

  emitAppareil(){
    this.appareil$.next(this.appareilsList.slice());
  }

  saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('appareils').set(this.appareilsList).then(
        (data: DataSnapshot) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  retrieveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('appareils').once('value').then(
        (data: DataSnapshot) => {
          this.appareilsList = data.val();
          this.emitAppareil();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}

