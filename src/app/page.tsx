export default function Home() {
  const videos = [
    {
      src: "https://drive.google.com/file/d/1IfjaweZ5AH0HMVscV9chVzlck1NYrvpZ/preview",
      title: "สวนลุม ติ๊ดส์ พ่อ แม่",
      day: "11-08-2007",
      time: "11:01 น.",
    },
    {
      src: "https://drive.google.com/file/d/1x2KqiUv1rHFqDU0Z3haDror_qAXa70ij/preview",
      title: "สวนลุม ติ๊ดส์ พ่อ แม่",
      day: "04-08-2007",
      time: "15:06 น.",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 justify-center p-8">
      {videos.map((video, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center flex-1 min-w-[300px] max-w-[500px] bg-white rounded-2xl shadow-lg border-2 border-[#eee] overflow-hidden m-2"
        >
          <div className="w-full px-5 pt-5 pb-2 box-border text-center">
            <span className="text-[1.2rem] text-[#333] tracking-wide">
              <b>ชื่อเรื่อง</b> {video.title}
            </span>
          </div>
          <div className="relative w-full pb-[56.25%] h-0 bg-black">
            <iframe
              src={video.src}
              className="absolute top-0 left-0 w-full h-full border-0 rounded-b-xl"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}