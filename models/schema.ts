import mongoose, { Schema } from "mongoose";

const carSchema = new Schema({
  raporno: {
    type: String,
  },
  arac_giris_tarih: {
    type: String,
  },
  arac_giris_saati: {
    type: String,
  },
  arac_giris_km: {
    type: Number,
  },
  arac_cıkıs_saati: {
    type: String,
  },
  arac_cıkıs_km: {
    type: Number,
  },
  firma_ad:{
    type:String
  },
  bayi:{
    type:String
  },
  tsb_hyb:{
    type:String
  },
  olusturan:{
    type:String
  },
  paket:{
    type:String
  },
  ucret:{
    type:Number
  },
  marka:{
    type:String
  },
  model:{
    type:String
  },
  model_yıl:{
    type:Number
  },
  plaka:{
    type:String
  },
  yakıt:{
    type:String
  },
  sasi_no:{
    type:String
  },
  vites:{
    type:String
  },
  motor_no:{
    type:String
  },
  renk:{
    type:String
  },
  km:{
    type:Number
  },
  alıcı_ad:{
    type:String
  },
  alıcı_tel:{
    type:Number
  },
  sahib_ad:{
    type:String
  },
  sahib_tel:{
    type:Number
  },
  notes:[
    
  ],
  motorData:[],
  motorNote:{
    type:String,
    defaultValue:""
  },
  desc:{
    type:String,
    defaultValue:"",
    require:true
  }
},{
  timestamps:true
});


const Car = mongoose.models.Cars || mongoose.model("Cars",carSchema)

export default Car