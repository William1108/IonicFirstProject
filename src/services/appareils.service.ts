import {Appareil} from "../models/Appareil";

export class AppareilsService{
  appareilsList:Appareil[] = [
    {
      name:'Machine à laver',
      description:[
        'Volume: 6 litres',
        'Temps de lavage: 2 heures',
        'Consomation: 135 kWh/an'
      ],
      isOn:true
    },
    {
      name:'Lavabo',
      description:[
        'Dimension: 40 pouces',
        'Consomation: 22 kWh/an'
      ],
      isOn:true
    },
    {
      name:'Ordinateur',
      description:[
        'Marque: Asus',
        'Consomation: 500 kWh/an'
      ],
      isOn:false
    }
  ];
}
