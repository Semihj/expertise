"use client";

import Loading from "@/components/Loading";
import Pagination from "@/components/pagination";
import AdminOnly from "@/components/safety/AdminOnly";
import { CarDataProps } from "@/types/carData";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const url = process.env.NEXT_DEV_URL || "http://localhost:3000"

export default function Home() {
  const [cars, setCars] = useState<CarDataProps[]>([]);
  const [carsLength, setCarsLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [marka, setMarka] = useState("");
  const [plaka, setPlaka] = useState("");
  const [page, setPage] = useState(1);
  const router = useRouter();
  const getCars = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `/api/car?page=${page}&marka=${marka}&plaka=${plaka}&limit=${9}  `,{
         
        }
      );
      const data = await res.json();
      setCars(data.data);
      setCarsLength(data.carsLength);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getCars();
  }, [page]);

  return (
    <AdminOnly>
    <div className="w-full flex justify-center   min-h-max ">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-[1000px] min-h-[500px] flex flex-col border shadow-lg rounded-lg p-5 mt-20   ">
          <div className="w-full flex items-center gap-5">
            <input
              type="text"
              className="max-w-[700px] min-w-[55%] p-3 rounded-md 
            focus:outline-none border"
              placeholder="Marka"
              onChange={(e) => setMarka(e.target.value)}
              defaultValue={marka}
            />
            <input
              type="text"
              className="max-w-[200px] w-full p-3 rounded-md 
            focus:outline-none border"
              placeholder="Plaka"
              onChange={(e) => setPlaka(e.target.value)}
              defaultValue={plaka}
            />

            <IoSearch className="text-3xl cursor-pointer " onClick={getCars} />
          </div>
          <div className="mt-10 flex flex-col gap-4 border ">
            <div className="flex justify-between uppercase font-semibold text-lg border-b h-10 px-2 ">
              <h1 className="w-full">Marka</h1>
              <h1 className="w-full">Alıcı Ad</h1>
              <h1 className="w-full">Alıcı Tel</h1>
              <h1 className="w-full">plaka</h1>
            </div>
            <div className="flex flex-col w-full  gap-4 ">
              {cars?.map((car) => (
                <div
                  key={car._id}
                  className="w-full flex justify-between border-b items-center h-full uppercase font-semibold px-2 "
                >
                  <Link
                    href={`/car/${car._id}`}
                    className="w-full font-semibold  "
                  >
                    {car.marka}{" "}
                  </Link>
                  <Link
                    href={`/car/${car._id}`}
                    className="w-full font-semibold  "
                  >
                    {car.alıcı_ad}{" "}
                  </Link>
                  <Link
                    href={`/car/${car._id}`}
                    className="w-full font-semibold  "
                  >
                    {car.alıcı_tel}{" "}
                  </Link>
                  <Link
                    href={`/car/${car._id}`}
                    className="w-full font-semibold  "
                  >
                    {car.plaka}{" "}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Pagination length={carsLength} page={page} setPage={setPage} />
        </div>
      )}
      {!isLoading && (
        <div className="mt-20">
          <div
            className="cursor-pointer"
            onClick={() => router.push("/create")}
          >
            <CirclePlus className="w-10 h-10" />
          </div>
        </div>
      )}
    </div></AdminOnly>
  );
}
