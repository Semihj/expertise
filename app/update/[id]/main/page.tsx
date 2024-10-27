"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { CarDataProps } from "@/types/carData";
const url = process.env.NEXT_DEV_URL || "http://localhost:3000"

export default function UpdateMainPage() {
  const [formData, setFormData] = useState<CarDataProps>({});
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams()

  const handleChange = (e: any) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const getCar = async () => {
    try {
      const res = await fetch(`https://expertise-five.vercel.app/api/car/${params.id}`,{
        method:"GET"
      })
      const data:CarDataProps = await res.json();
      setFormData(data)
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getCar()
  }, [])
  
  const router = useRouter();
  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://expertise-five.vercel.app/api/car/${params.id} `, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data) {
        setIsLoading(false);
        router.push(`https://expertise-five.vercel.app/car/${data._id}`);
      }
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };


  console.log(formData);

  return (
    <div className="w-full h-full flex justify-center py-10    ">
      {isLoading ? (
        <Loading/>
      ) : (
        <div className="w-[1000px] min-h-screen  px-2 flex flex-col gap-5 mb-20   ">
          <div className="w-full p-4 text-center text-white font-bold text-3xl bg-green-500 uppercase ">
          Güncelle
          </div>

          <div className="w-full flex flex-col gap-5">
         
            <div className="flex gap-5 w-full justify-between ">
              <div className="border-2 rounded-md w-full flex flex-col  ">
             
                <div className="border-b flex h-full w-full justify-between items-center p-3 pr-20 ">
                  <h1 className="uppercase font-semibold ">
                    Araç Giriş Tarihi
                  </h1>
                  <input
                    name="arac_giris_tarih"
                    defaultValue={formData?.arac_giris_tarih}
                    type="text"
                    onChange={handleChange}
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
        
                <div className="border-b flex h-full w-full justify-between items-center p-3 pr-20 ">
                  <h1 className="uppercase font-semibold ">
                    Araç Giriş KM/MIL
                  </h1>
                  <input
                    onChange={handleChange}
                    defaultValue={formData?.arac_giris_km}
                    name="arac_giris_km"
                    type="number"
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
          
                <div className="border-b flex h-full w-full justify-between items-center p-3 pr-20 ">
                  <h1 className="uppercase font-semibold ">
                    Araç Çıkış KM/MIL
                  </h1>
                  <input
                    onChange={handleChange}
                    defaultValue={formData?.arac_cıkıs_km}

                    name="arac_cıkıs_km"
                    type="number"
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
              </div>
              <div className="border-2 rounded-md w-full flex flex-col uppercase ">
        
            
           
                <div className="border flex h-full w-full justify-between items-center p-3 pr-20 ">
                  <h1 className="uppercase font-semibold ">
                    Raporu olusturan{" "}
                  </h1>
                  <input
                    onChange={handleChange}
                    defaultValue={formData?.olusturan}

                    name="olusturan"
                    type="text"
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
                <div className="border flex h-full w-full justify-between items-center p-3 pr-20 ">
                  <h1 className="uppercase font-semibold ">Expertiz paketi</h1>
                  <input
                    onChange={handleChange}
                    defaultValue={formData?.paket}

                    name="paket"
                    type="text"
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
                <div className="border flex h-full w-full justify-between items-center p-3 pr-20 ">
                  <h1 className="uppercase font-semibold ">Hizmet ucreti</h1>
                  <input
                    onChange={handleChange}
                    name="ucret"
                    type="number"
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col ">
            <div className="flex">
              <div className="flex flex-col  border w-full gap-2  ">
                <div className="flex w-full justify-between px-5 py-2 font-semibold border-b ">
                  <div className="uppercase flex gap-24  w-full ">
                    <h1 className="">Marka</h1>
                    <input
                      onChange={handleChange}
                      defaultValue={formData.marka}
                      name="marka"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                  <div className="  "></div>
                </div>
                <div className="flex w-full justify-between px-5 py-2  font-semibold border-b ">
                  <div className="uppercase flex  w-full ">
                    <h1 className="w-full">Model yili</h1>
                    <input
                      onChange={handleChange}
                      defaultValue={formData.model_yıl}
                      name="model_yıl"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                  <div className="uppercase flex w-full ">
                    <h1 className="w-full">Plaka</h1>
                    <input
                      onChange={handleChange}
                      defaultValue={formData.plaka}
                      name="plaka"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                </div>
                <div className="flex w-full justify-between px-5 py-2  font-semibold border-b ">
                  <div className="uppercase flex w-full border-green-700 ">
                    <h1 className="w-full">Yakıt türü</h1>
                    <input
                      onChange={handleChange}
                      defaultValue={formData.yakıt}

                      name="yakıt"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                  <div className="uppercase flex w-full border-gray-800 ">
                    <h1 className="w-full">şasi no</h1>
                    <input
                      onChange={handleChange}
                      defaultValue={formData.sasi_no}

                      name="sasi_no"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                </div>
                <div className="flex w-full justify-between px-5 py-2  font-semibold border-b ">
                  <div className="uppercase flex  w-full ">
                    <h1 className="w-full">vites</h1>
                    <input
                      onChange={handleChange}
                      defaultValue={formData.vites}

                      name="vites"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                  <div className="uppercase flex  w-full ">
                    <h1 className="w-full">motor no</h1>
                    <input
                      onChange={handleChange}
                      defaultValue={formData.motor_no}

                      name="motor_no"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                </div>
                <div className="flex w-full justify-between px-5 py-2  font-semibold border-b ">
                  <div className="uppercase flex   w-full ">
                    <h1 className="w-full">renk</h1>
                    <input
                      onChange={handleChange}
                      defaultValue={formData.renk}

                      name="renk"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                  <div className="uppercase flex  w-full ">
                    <h1 className="w-full">KM/mıl</h1>

                    <input
                      onChange={handleChange}
                      defaultValue={formData.km}

                      name="km"
                      type="number"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between gap-5">
           
           
          </div>
          <div className="flex w-full justify-between gap-5 ">
            <div className="w-full flex flex-col border">
              <h1 className="w-full bg-yellow-500 text-2xl py-3 font-semibold text-center uppercase text-white  ">
                Alıcı bilgileri
              </h1>

              <div className="flex flex-col">
                <div className="flex gap-5 p-5  items-center border font-semibold">
                  <h1 className=" ">AD SOYAD</h1>
                  <input
                    onChange={handleChange}
                    defaultValue={formData.alıcı_ad}
                    name="alıcı_ad"
                    type="text"
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
                <div className="flex gap-5 p-5  items-center border font-semibold">
                  <h1 className=" ">Telefon</h1>
                  <input
                    onChange={handleChange}
                    defaultValue={formData.alıcı_tel}
                    
                    name="alıcı_tel"
                    type="number"
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col border">
              <h1 className="w-full bg-yellow-500 text-2xl py-3 font-semibold text-center uppercase text-white  ">
                Araç Sahibi
              </h1>

              <div className="flex flex-col">
                <div className="flex gap-5 p-5  items-center border font-semibold">
                  <h1 className=" ">AD SOYAD</h1>
                  <input
                    name="sahib_ad"
                    defaultValue={formData.sahib_ad}
                    type="text"
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
                <div className="flex gap-5 p-5  items-center border font-semibold">
                  <h1 className=" ">Telefon</h1>
                  <input
                    name="sahib_tel"
                    defaultValue={formData.sahib_tel}
                    type="number"
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
              </div>
            </div>
          </div>
        
          <div className="w-full flex justify-end ">
            <Button onClick={handleUpdate}>Güncelle</Button>
          </div>
        </div>
      )}
    </div>
  );
}
