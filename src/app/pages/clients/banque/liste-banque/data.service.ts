import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeBanque = [
    {
        sigleBanque: 'SGBCI', rcBanque: 'Soiete Générale de Banque CI',
        emailBanque: 'demo@gmail.com',
        telBanque: '+225 07 07 19 52 63',
        pays: 'CI',
        ville: 'Abidjan',
        adresse: 'Angré 8 tranche, rue des banques'
    },
    {
      sigleBanque: 'BNI',
      rcBanque: 'Banque Nationale Investissement',
      emailBanque: 'demo@gmail.com',
      telBanque: '+225 07 07 19 52 63',
      pays: 'CI',
      ville: 'Abidjan',
      adresse: 'Angré 8 tranche, rue des banques'
  },
  {
    sigleBanque: 'ECOBANK',
    rcBanque: 'Banque Panafricaine',
    emailBanque: 'demo@gmail.com',
    telBanque: '+225 07 07 19 52 63',
    pays: 'CI', ville: 'Abidjan',
    adresse: 'Angré 8 tranche, rue des banques'
},

  ];
  constructor() { }
}
