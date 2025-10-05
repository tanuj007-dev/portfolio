 "use client";
import { useEffect, useState } from "react";
import {  Dancing_Script } from "next/font/google"; // ✅ import both

 

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Loader({ onFinish }) {
  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Olá",
    "Здравствуйте",
    "你好",
    "こんにちは",
    "안녕하세요",
    "مرحبا",
    "नमस्ते",
    "হ্যালো",
    "ہیلو",
    "Merhaba",
    "سلام",
    "Habari",
    "Γειά σας",
    "Hej",
    "Hei",
    "Cześć",
    "Ahoj",
    "Szia",
    "Salut",
    "Здравейте",
    "Здраво",
    "Bok",
    "Përshëndetje",
    "שלום",
    "สวัสดี",
    "Xin chào",
    "Halo",
    "Kamusta",
    "Labas",
    "Sveiki",
    "Tere",
    "Halló",
    "Dia dhuit",
    "Helo",
    "Halò",
    "Привіт",
    "გამარჯობა",
    "Сайн байна уу",
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % greetings.length);
        setFade(true); // fade in new greeting
      }, 200);
    }, 100);

    // hide loader after 3s
    const timeout = setTimeout(() => {
      clearInterval(interval);
      onFinish();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish, greetings.length]);

  return (
  <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 space-y-4 px-2">
   
    

      {/* Same greeting in Dancing Script (fancy style) */}
      <h2
        className={`${dancingScript.className} text-white text-4xl xs:text-5xl sm:text-6xl md:text-7xl transition-opacity duration-200 text-center`}
        style={{ opacity: fade ? 1 : 0 }}
      >
        {greetings[current]}
      </h2>
    </div>
  );
}
