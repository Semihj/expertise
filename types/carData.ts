export interface CarDataProps {
    tech_notes: string[];
    raporno:string;
    _id: string;
    arac_giris_tarih: string;
    arac_giris_saati: string;
    arac_giris_km: number;
    arac_cıkıs_saati: string;
    arac_cıkıs_km: number;
    firma_ad: string;
    bayi: string;
    tsb_hyb: string;
    olusturan: string;
    paket: string;
    ucret: number;
    marka: string;
    model_yıl: number;
    plaka: string;
    yakıt: string;
    sasi_no: string;
    vites: string;
    motor_no: string;
    renk: string;
    km: number;
    alıcı_ad: string;
    alıcı_tel: number;
    sahib_ad:string;
    sahib_tel:number;
    
    __v: number;
    noteImage: string[];
    notes: string[];
  }

  export interface MotorDataProps {
    id: number;
    title: string;
    text: string;
    bgColor: string;
    textColor: string;
    not: string; // Optional property
  }