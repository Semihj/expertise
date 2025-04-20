"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

const url = process.env.NEXT_DEV_URL || "http://localhost:3000"

export default function CreatePage() {
  const [formData, setFormData] = useState({
    arac_giris_tarih:"",
    arac_giris_km:0,
    arac_cıkıs_km:0,
    olusturan:"",
    paket:"",
    ucret:0,
    marka:"",
    model:"",
    plaka:"",
    yakıt:"",
    sasi_no:"",
    vites:"",
    motor_no:"",
    renk:"",
    km:0,
    alıcı_ad:"",
    alıcı_tel:0,
    sahibi_ad:"",
    sahibi_tel:0,
    motorData:[],
    motorNote:"",
    notes:[],
    desc:""

  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const router = useRouter();
  const handleCreate = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/car`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data) {
        setIsLoading(false);
        router.push(`/car/${data._id}`);
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
        <form onSubmit={handleCreate} className="w-[1000px] min-h-screen  px-2 flex flex-col gap-5 mb-20   ">
          <div className="w-full p-4 text-center text-white font-bold text-3xl bg-green-500 uppercase ">
            Oluştur
          </div>

          <div className="w-full flex flex-col gap-5">
            <div className="w-full text-white bg-yellow-500 flex justify-center font-bold text-2xl py-2 rounded-md uppercase ">
              Araç Teslim Formu
            </div>
            <div className="flex gap-5 w-full justify-between ">
              <div className="border-2 rounded-md w-full flex flex-col  ">
          
                <div className="border-b flex h-full w-full justify-between items-center p-3 pr-20 ">
                  <h1 className="uppercase font-semibold ">
                    Araç Giriş Tarihi
                  </h1>
                  <input
                    name="arac_giris_tarih"
                    required
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
                    required

                    name="olusturan"
                    type="text"
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
                <div className="border flex h-full w-full justify-between items-center p-3 pr-20 ">
                  <h1 className="uppercase font-semibold ">Expertiz paketi</h1>
                  <input
                    onChange={handleChange}
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
            <div className="w-full text-center justify-center flex bg-yellow-500 p-3 ">
              <h1 className="text-2xl font-semibold text-white uppercase  ">
                Araç bilgileri
              </h1>
            </div>
            <div className="flex">
              <div className="flex flex-col  border w-full gap-2  ">
                <div className="flex w-full justify-between px-5 py-2 font-semibold border-b ">
                  <div className="uppercase flex gap-24  w-full ">
                    <h1 className="">Marka</h1>
                    <input
                      onChange={handleChange}
                    required

                      name="marka"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                  <div className="uppercase flex gap-24  w-full ">
                    <h1 className="">Model</h1>
                    <input
                      onChange={handleChange}
                      required

                      name="model"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                
                </div>
                <div className="flex w-full justify-between px-5 py-2  font-semibold border-b ">
                  <div className="uppercase flex  w-full ">
                    <h1 className="w-full">Model yili</h1>
                    <input
                      onChange={handleChange}
                    required

                      name="model_yıl"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                  <div className="uppercase flex w-full ">
                    <h1 className="w-full">Plaka</h1>
                    <input
                      onChange={handleChange}
                    required

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
                    required

                      name="yakıt"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                  <div className="uppercase flex w-full border-gray-800 ">
                    <h1 className="w-full">şasi no</h1>
                    <input
                      onChange={handleChange}
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
                      required

                      name="vites"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                  <div className="uppercase flex  w-full ">
                    <h1 className="w-full">motor no</h1>
                    <input
                      onChange={handleChange}
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
                    required

                      name="renk"
                      type="text"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                  <div className="uppercase flex  w-full ">
                    <h1 className="w-full">KM/mıl</h1>
                    <input
                      onChange={handleChange}
                      name="km"
                      type="number"
                      className="font-semibold border p-1 focus:outline-none "
                    />
                  </div>
                </div>
              </div>
            </div>
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
                    required

                    name="alıcı_ad"
                    type="text"
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
                <div className="flex gap-5 p-5  items-center border font-semibold">
                  <h1 className=" ">Telefon</h1>
                  <input
                    onChange={handleChange}
                    required

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
                    required

                    onChange={handleChange}
                    type="text"
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
                <div className="flex gap-5 p-5  items-center border font-semibold">
                  <h1 className=" ">Telefon</h1>
                  <input
                    name="sahib_tel"
                    required

                    onChange={handleChange}
                    type="number"
                    className="font-semibold border p-1 focus:outline-none "
                  />
                </div>
              </div>
            </div>
          </div>
         
          <div className="w-full flex justify-end ">
            <Button onClick={handleCreate}>Oluştur</Button>
          </div>
        </form>
      )}
    </div>
  );
}
