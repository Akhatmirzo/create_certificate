import React, { useEffect, useMemo } from "react";
import gerb_logo from "../assets/gerb.png";
import gex_logo from "../assets/gex_logo.png";
import { useNavigate } from "react-router-dom";
import editText from "../utils/editText";

export default function Certificate({ student }) {
  const navigate = useNavigate();
  const {
    fullname,
    specialization_name,
    from,
    to,
    diplom_number,
    kredit_number,
    boss_name,
    createdAt,
    expiredAt,
    record_number,
  } = student || {};

  useEffect(() => {
    if (!student?.fullname) {
      navigate("/");
    }
  }, [student, navigate]);

  const editingText = useMemo(() => {
    if (specialization_name) {
      return editText(specialization_name, 30);
    }
  }, [specialization_name]);

  return (
    <div className="flex items-center justify-center h-screen font-times">
      <div className="w-[1120px] h-[785px] border-image px-[60px]">
        <div className="flex items-center justify-center gap-[32px]">
          <h2 className="tracking-[5%] text-[#0026c0] w-[277px] text-center font-bold">
            O’ZBEKISTON RESPUBLIKASI SOG’LIQNI SAQLASH VAZIRLIGI
          </h2>

          <img src={gerb_logo} alt="gerb" />

          <h2 className="tracking-[5%] text-[#0026c0] w-[305px] text-center font-bold">
            MINISTRY OF HEALTH OF THE REPUBLIC OF UZBEKISTAN
          </h2>
        </div>

        <div className="flex gap-[20px] mt-[11px]">
          <img src={gex_logo} alt="gex_logo" className="w-max" />

          <div>
            <p className="text-black tracking-[5%] text-[14px] font-bold mb-[3px] text-center font-times">
              O’ZBEKISTON RESPUBLIKASI SURXONDARYO VILOYATI DENOV TUMANI
              “GOLD-EDUCATION-XTRA MAS’ULIYATI CHEKLANGAN JAMIYATI TASARRUFIDAGI
              TA’LIM MUASSASASI
            </p>
            <p className="text-black tracking-[5%] text-[14px] font-bold text-center font-times">
              REPUBLIC OF UZBEKISTAN SURKHANDARYA REGION DENOV DISTRICT
              “GOLD-EDUCATION-XTRA” LIABILITY IS LIMITIED COMPANY CONTROLLED
              EDUCATIONAL INSTITUTION
            </p>
          </div>
        </div>

        <h1 className="text-center text-[80px] uppercase tracking-[25px] text-[#002C8C] font-bold leading-[90px]">
          Sertifikat
        </h1>

        <h3 className="mt-[-10px] text-center text-[18px] font-bold tracking-[5%] text-[#002C8C]">
          MO № <span>000045</span>
        </h3>

        <p className="text-center flex items-center justify-center gap-[9px]">
          <span className="flex flex-col w-[120px]">
            <span className="font-bold">№ {diplom_number}</span>
            <hr className="border-black" />
            <i className="text-[13px] tracking-[5%]">(diplom raqami)</i>
          </span>{" "}
          <span className="text-black tracking-[5%] -mt-1">
            ushbu sertifikat egasining diplom raqami
          </span>
        </p>

        <div className="flex items-center justify-center gap-2">
          <div className="flex flex-col text-center w-2/3">
            <h2 className="text-[26px] font-bold -mb-2">{fullname}</h2>

            <hr className="border-black" />

            <i className="text-[13px] tracking-[5%]">(mutaxassisning f.i.sh)</i>
          </div>

          <p>ga</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="text-center w-[200px]">
            <h2 className="text-[26px] font-bold -mb-2">{from}</h2>
            <hr className="border-black" />
          </div>

          <p className="-mb-4">dan</p>

          <div className="text-center w-[200px]">
            <h2 className="text-[26px] font-bold -mb-2">{to}</h2>
            <hr className="border-black" />
          </div>

          <p className="-mb-4">gacha</p>
        </div>

        <div className="flex items-center justify-center mt-[15px]">
          <div className="text-center w-[90px]">
            <h2 className="text-[26px] font-bold -mb-2">{kredit_number}</h2>
            <hr className="border-black" />
          </div>

          <p className="-mb-4">
            kredit <span className="mr-1"></span> &#10092;&#10092;{" "}
            <span className="mr-1"></span>
          </p>

          <div className="text-center w-[478px]">
            <h2 className="text-[26px] font-bold -mb-2">
              {editingText?.firstText}
            </h2>
            <hr className="border-black" />
          </div>

          {!editingText?.secondText && <p className="-mb-3">&#10093;&#10093;</p>}
        </div>

        <div className="flex items-center justify-center mt-[15px] gap-3">
          <div className="text-center w-2/3">
            {editingText?.secondText && (
              <>
                <h2 className="text-[26px] font-bold -mb-2">
                  {editingText?.secondText || ""}
                </h2>

                <hr className="border-black" />
              </>
            )}

            <p className="w-[570px] tracking-[5%] font-light leading-[18px]">
              mutaxassisligi bo’yicha uzluksiz kasbiy ta’lim tizimida malaka
              oshirish kursini muvaffaqiyatli tugatganligi haqida berilgan.
            </p>
          </div>

          {editingText?.secondText && <p className="-mt-5">&#10093;&#10093;</p>}
        </div>

        <div className="flex items-center justify-evenly mt-[10px]">
          <h3 className="text-[16px] font-bold -mb-2">Rahbar</h3>

          <div className="text-center w-[200px]">
            <h2 className="text-[24px] font-bold -mb-2">{boss_name}</h2>
            <hr className="border-black" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-[40px] mt-5">
          <div className="flex items-center gap-2">
            <p className="-mb-5">Ro’yxatga olingan sana</p>

            <div className="text-center w-[200px]">
              <h2 className="text-[26px] font-bold -mb-2">{createdAt}</h2>
              <hr className="border-black" />
            </div>
          </div>

          <p className="-mb-5">
            Sertifikat amal qilish muddati{" "}
            <span className="text-black font-bold">{expiredAt} yil</span>
          </p>

          <div className="flex items-center gap-2">
            <p className="-mb-5">Qayd raqami</p>

            <div className="text-center w-[123px]">
              <h2 className="text-[26px] font-bold -mb-2">{record_number}</h2>
              <hr className="border-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
