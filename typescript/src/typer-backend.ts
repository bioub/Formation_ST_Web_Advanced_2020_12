// Généré par quicktype
// depuis :
// https://api-adresse.data.gouv.fr/search/?q=21+rue+de+saussure

export interface Response {
  type:        string;
  version:     string;
  features:    Feature[];
  attribution: string;
  licence:     string;
  query:       string;
  limit:       number;
}

export interface Feature {
  type:       string;
  geometry:   Geometry;
  properties: Properties;
}

export interface Geometry {
  type:        string;
  coordinates: number[];
}

export interface Properties {
  label:        string;
  score:        number;
  housenumber?: string;
  id:           string;
  name:         string;
  postcode:     string;
  citycode:     string;
  x:            number;
  y:            number;
  city:         string;
  district?:    string;
  context:      string;
  type:         string;
  importance:   number;
  street?:      string;
}
