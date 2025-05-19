"use client";

export default function Home() {
  const videos = [
    {
      src: "https://drive.google.com/file/d/1ppXmpS-nLw_Ykau2xn7zL1R87bzNLuyn/preview",
      title: "ไออังติ๊ดเล่นเกมและแม่สอนเขียนหนังสือ",
      day: "01-07-2007",
      time: "09.38 น.",
      cover: "https://i.imgur.com/2yaf2wb.jpg", // ตัวอย่างรูปปก
    },
    {
      src: "https://drive.google.com/file/d/1Un_k_HQmn4RXuvLKuFc5WyTMKi8_d3N1/preview",
      title: "แผ่น4พ่อ+แม่",
      day: "12-08-2007",
      time: "17.16 น.",
    },
    {
      src: "https://drive.google.com/file/d/19_FW8CjPORwkScWSoeny_g2uo_jDnWP1/preview",
      title: "ติ๊ดส์ถือมีดใส่ไอ",
      day: "19-06-2007",
      time: "17.42 น.",
    },
    {
      src: "https://drive.google.com/file/d/1x2KqiUv1rHFqDU0Z3haDror_qAXa70ij/preview",
      title: "(1)สวนลุม ติ๊ดส์ พ่อ แม่",
      day: "04-08-2007",
      time: "15:06 น.",
    },
    {
      src: "https://drive.google.com/file/d/11J8gB-9SLa2SwsxaiR07SVU3tSaKy7FK/preview",
      title: "(2)_แผ่นที่1งานคุณพ่อบุญรอด บัวเขียว",
      day: "16-01-2010",
      time: "06.42 น.",
    },
    {
      src: "https://drive.google.com/file/d/1Uh7kpFjGK6tEgNWipI8gBuxZcLMS-x0H/preview",
      title: "(1)_แผ่นที่1งานคุณพ่อบุญรอด บัวเขียว",
      day: "13-01-2010",
      time: "19.59 น.",
    },
    {
      src: "https://drive.google.com/file/d/1Btn7sRroFc1mp5WGHXycPyAnvYgJfLvs/preview",
      title: "ว่ายน้ำ",
      day: "28-02-2009",
      time: "15.15 น.",
    },
    {
      src: "https://drive.google.com/file/d/1IfjaweZ5AH0HMVscV9chVzlck1NYrvpZ/preview",
      title: "(2)สวนลุม ติ๊ดส์ พ่อ แม่",
      day: "11-08-2007",
      time: "11.01 น.",
    },
  ];

  return (
    <div
      className="flex flex-wrap gap-1 justify-center p-2 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 font-sans"
      style={{
        fontFamily: `'Kanit', 'Prompt', 'Noto Sans Thai', sans-serif`,
      }}
    >
      <h1 className="w-full text-center text-3xl font-bold text-[#333]">
        วิดีโอของครอบครัว
      </h1>
      {videos.map((video, idx) => (
        <div
          key={idx}
          // max-w-[500px]
          className="flex flex-col items-center flex-1 min-w-[180px] max-w-[500px] bg-white rounded-2xl shadow-lg border-2 border-[#eee] overflow-hidden m-2"
        >
          <div className="relative w-full pb-[56.25%] h-0 bg-black">
            <iframe
              src={video.src}
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
            ></iframe>
          </div>
         <div className="w-full px-6 pt-5 pb-4 box-border text-left">
              <div className="text-lg font-semibold text-[#3b0764] mb-1">
                <b>ชื่อวิดีโอ</b> <span className="font-normal text-[#333]">{video.title}</span>
              </div>
              <div className="text-base text-[#555] mb-1">
                <b>วันที่</b> <span className="font-normal">{video.day}</span>
              </div>
              <div className="text-base text-[#555]">
                <b>เวลา</b> <span className="font-normal">{video.time}</span>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
}
