'use client'
import Image from "next/image";

export default function Home() {

    const formatDateToThai = (date) => {
        const year = date.getFullYear() + 543; // แปลงปีเป็น พ.ศ.
        const month = date.toLocaleString('th-TH', { month: 'long' }); // รูปแบบเดือน
        const day = date.getDate(); // วัน
        return `${day} ${month} ${year}`;
    };

    const formatTimeToThai = (date) => {
        return date.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }); // รูปแบบเวลา
    };

    const getCurrentDate = () => {
        const date = new Date();
        return formatDateToThai(date); // ใช้ฟังก์ชัน formatDateToThai
    };

    const getCurrentTime = () => {
        const date = new Date();
        return formatTimeToThai(date);
    };

  return (
      <div className="flex gap-5">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-sky-800">What is your day?</span>
          </div>
          <input
              type="text"
              value={getCurrentDate()} // ใช้ค่าที่ได้จากฟังก์ชัน getCurrentDate
              placeholder="Day"
              className="input input-md bg-rose-300 text-base-300 input-md-info w-full bg-white border-sky-700 border-2"
              disabled // ตั้งค่า disabled เพื่อไม่ให้ผู้ใช้แก้ไข
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-sky-800">What is your time?</span>
          </div>
          <input
              type="text"
              value={getCurrentTime()} // ใช้ค่าที่ได้จากฟังก์ชัน getCurrentTime
              placeholder="Time"
              className="input input-md bg-rose-300 text-base-300 input-md-info w-full  border-sky-700 border-2"
              disabled // ตั้งค่า disabled เพื่อไม่ให้ผู้ใช้แก้ไข
          />
        </label>
      </div>
  );
}
