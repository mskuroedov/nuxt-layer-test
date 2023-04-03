export interface IUser {
  application_id: string
  auth_key: string
  email: string
  email_confirmed: boolean
  id: number
  is_email_subscriber: boolean
  mobile_push_token: string | null //todo ???
  phone: string
  web_push_enabled: boolean
  web_push_token: null | string //todo ???
  web_push_token_type: null | string //todo ???
}
export interface IDoc {
  document_type: string;
  document_value: string;
  owner_name: string | null;
  additional_fields: {
    name?: string;
    licence_plate?: string;
    vehicle_model?: string;
  }[] | [];
  id: number;
  source_service: string;
  source_name: string;
  subscribes: {
    email: boolean;
    push: boolean;
  };
}
export interface INotification {
  target: string;
  count: number;
  html_markup: string;
  image: string;
  button_label: string;
}
//
// const ctc = {
//   "document_type": "ctc",
//   "document_value": "11АА111111",
//   "owner_name": "Мингазов Рамиль Шамильевич",
//   "additional_fields": {
//     "name": "",
//     "licence_plate": ""
//   },
//   "id": 106207,
//   "source_service": "https://simplepayment.app.link/email",
//   "source_name": "Мобильное приложение ГИБДД",
//   "subscribes": {
//     "email": true,
//     "push": false
//   }
// }
// const vu = {
//   "document_type": "vu",
//   "document_value": "6427948977",
//   "owner_name": "Налеев Максим Витальевич",
//   "additional_fields": [],
//   "id": 2008306,
//   "source_service": "https://simplepayment.app.link/email",
//   "source_name": "Мобильное приложение ГИБДД",
//   "subscribes": {
//     "email": true,
//     "push": false
//   }
// }
//
// const passport = {
//   "document_type": "passport",
//   "document_value": "2131232132",
//   "owner_name": null,
//   "additional_fields": [],
//   "id": 12993108,
//   "source_service": "https://oplata-fssp.ru",
//   "source_name": "",
//   "subscribes": {
//     "email": true,
//     "push": false
//   }
// }
// const snils = {
//   "document_type": "snils",
//   "document_value": "15370742459",
//   "owner_name": "Максуди Иннокентий Рустэмович",
//   "additional_fields": [],
//   "id": 82532,
//   "source_service": "https://oplata-fssp.ru",
//   "source_name": "",
//   "subscribes": {
//     "email": true,
//     "push": false
//   }
// }
// const fio_birth_date_requisite = {
//   "document_type": "fio_birth_date_requisite",
//   "document_value": {
//     "fio": "Истомин Юрий Александрович",
//     "region_id": "16",
//     "birth_date": "1996-06-19"
//   },
//   "owner_name": null,
//   "additional_fields": [],
//   "id": 6752236,
//   "source_service": "https://oplata-fssp.ru",
//   "source_name": "",
//   "subscribes": {
//     "email": true,
//     "push": false
//   }
// }
// const inn = {
//   "document_type": "inn",
//   "document_value": "000000000000",
//   "owner_name": "Бобало Ирина Анатольевна",
//   "additional_fields": {
//     "licence_plate": "Н858РА197"
//   },
//   "id": 13763,
//   "source_service": "https://paygibdd.ru",
//   "source_name": "",
//   "subscribes": {
//     "email": true,
//     "push": false
//   }
// }
//
// const uin = {
//   "document_type": "uin",
//   "document_value": "18810571220927134785",
//   "owner_name": null,
//   "additional_fields": [],
//   "id": 11983460,
//   "source_service": "https://gos-oplata.ru",
//   "source_name": "",
//   "subscribes": {
//     "email": true,
//     "push": false
//   }
// }
