export interface Response {
  total_rows: number;
  offset:     number;
  rows:       Row[];
}

export interface Row {
  id:    string;
  key:   string;
  value: Value;
  doc:   Product;
}

export interface Product {
  _id:                string;
  _rev:               string;
  additionalFeatures: string;
  android:            Android;
  availability:       string[];
  battery:            Battery;
  camera:             Camera;
  connectivity:       Connectivity;
  description:        string;
  display:            Display;
  hardware:           Hardware;
  images:             string[];
  name:               string;
  sizeAndWeight:      SizeAndWeight;
  storage:            Storage;
}

export interface Android {
  os: OS;
  ui: string;
}

export enum OS {
  Android21 = "Android 2.1",
  Android22 = "Android 2.2",
  Android23 = "Android 2.3",
  Android30 = "Android 3.0",
}

export interface Battery {
  standbyTime: string;
  talkTime:    string;
  type:        string;
}

export interface Camera {
  features: Feature[];
  primary:  string;
}

export enum Feature {
  Empty = "",
  Flash = "Flash",
  Video = "Video",
}

export interface Connectivity {
  bluetooth: Bluetooth;
  cell:      string;
  gps:       boolean;
  infrared:  boolean;
  wifi:      Wifi;
}

export enum Bluetooth {
  Bluetooth20 = "Bluetooth 2.0",
  Bluetooth21 = "Bluetooth 2.1",
  Bluetooth30 = "Bluetooth 3.0",
}

export enum Wifi {
  The80211ABGN = "802.11 a/b/g/n",
  The80211BG = "802.11 b/g",
  The80211BGN = "802.11 b/g/n",
}

export interface Display {
  screenResolution: string;
  screenSize:       string;
  touchScreen:      boolean;
}

export interface Hardware {
  accelerometer:    boolean;
  audioJack:        AudioJack;
  cpu:              string;
  fmRadio:          boolean;
  physicalKeyboard: boolean;
  usb:              USB;
}

export enum AudioJack {
  Empty = "",
  The35Mm = "3.5mm",
}

export enum USB {
  USB20 = "USB 2.0",
}

export interface SizeAndWeight {
  dimensions: string[];
  weight:     string;
}

export interface Storage {
  flash: string;
  ram:   string;
}

export interface Value {
  rev: string;
}
