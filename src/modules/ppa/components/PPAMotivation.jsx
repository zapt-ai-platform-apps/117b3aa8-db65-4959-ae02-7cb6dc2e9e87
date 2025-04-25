import React, { useState } from 'react';
import { FaBookOpen, FaHeart, FaShare } from 'react-icons/fa';

const initialQuotes = [
  {
    id: 1,
    text: "Dekatkan diri pada Allah sebelum kamu meminta pertolongan-Nya. Kenalilah Allah dalam kesenangan, niscaya Allah akan mengenalimu dalam kesusahan.",
    source: "Hadits"
  },
  {
    id: 2,
    text: "Janji pertolongan Allah itu dekat ketika kita juga dekat kepada-Nya. Tidaklah Allah memberi ujian kecuali untuk meningkatkan derajat kita di sisi-Nya.",
    source: "Pola Pertolongan Allah"
  },
  {
    id: 3,
    text: "Luaskan niatmu! Jangan hanya untuk dirimu sendiri, tapi juga untuk orang lain. Semakin luas niatmu, semakin besar pula pertolongan Allah.",
    source: "Pola Pertolongan Allah"
  },
  {
    id: 4,
    text: "Cari 'pesan cinta' di setiap masalah. Allah tidak bermaksud menyulitkanmu, tapi mengundangmu untuk lebih dekat kepada-Nya.",
    source: "Pola Pertolongan Allah"
  },
  {
    id: 5,
    text: "Setelah berikhtiar maksimal, 'titipkan' hasilnya kepada Allah. Percayalah bahwa hasil terbaik adalah yang Allah pilihkan untukmu.",
    source: "Pola Pertolongan Allah"
  }
];

const PPAMotivation = () => {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [liked, setLiked] = useState([]);
  
  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev < quotes.length - 1 ? prev + 1 : 0));
  };
  
  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev > 0 ? prev - 1 : quotes.length - 1));
  };
  
  const toggleLike = (id) => {
    if (liked.includes(id)) {
      setLiked(liked.filter(quoteId => quoteId !== id));
    } else {
      setLiked([...liked, id]);
    }
  };
  
  const shareQuote = () => {
    const quote = quotes[currentQuoteIndex];
    navigator.clipboard.writeText(`"${quote.text}" - ${quote.source}`);
    alert('Kutipan disalin ke clipboard!');
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Motivasi PPA</h2>
      
      <div className="bg-gradient-to-r from-secondary-50 to-secondary-100 p-5 rounded-lg border border-secondary-200 relative">
        <div className="text-center mb-8 min-h-[120px] flex items-center justify-center">
          <blockquote className="italic text-neutral-800">
            "{quotes[currentQuoteIndex].text}"
          </blockquote>
        </div>
        
        <p className="text-right text-sm text-neutral-600">
          — {quotes[currentQuoteIndex].source}
        </p>
        
        <div className="flex justify-between mt-6">
          <button 
            onClick={prevQuote}
            className="w-10 h-10 rounded-full bg-white text-neutral-700 flex items-center justify-center shadow-md cursor-pointer"
          >
            ←
          </button>
          
          <div className="flex gap-2">
            <button 
              onClick={() => toggleLike(quotes[currentQuoteIndex].id)}
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md cursor-pointer ${
                liked.includes(quotes[currentQuoteIndex].id)
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-neutral-700'
              }`}
            >
              <FaHeart size={16} />
            </button>
            
            <button 
              onClick={shareQuote}
              className="w-10 h-10 rounded-full bg-white text-neutral-700 flex items-center justify-center shadow-md cursor-pointer"
            >
              <FaShare size={16} />
            </button>
          </div>
          
          <button 
            onClick={nextQuote}
            className="w-10 h-10 rounded-full bg-white text-neutral-700 flex items-center justify-center shadow-md cursor-pointer"
          >
            →
          </button>
        </div>
        
        <div className="absolute bottom-2 left-0 right-0 flex justify-center">
          <div className="flex gap-1">
            {quotes.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentQuoteIndex 
                    ? 'bg-secondary-600' 
                    : 'bg-secondary-200'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center">
            <FaBookOpen />
          </div>
          <h3 className="font-bold">Ayat-Ayat Al-Quran tentang Pertolongan Allah</h3>
        </div>
        
        <div className="space-y-4">
          <div className="p-3 bg-neutral-50 rounded-lg">
            <p className="text-sm mb-1 font-medium">Surat Al-Baqarah: 186</p>
            <p className="text-sm">
              "Dan apabila hamba-hamba-Ku bertanya kepadamu (Muhammad) tentang Aku, maka sesungguhnya Aku dekat. 
              Aku kabulkan permohonan orang yang berdoa apabila dia berdoa kepada-Ku..."
            </p>
          </div>
          
          <div className="p-3 bg-neutral-50 rounded-lg">
            <p className="text-sm mb-1 font-medium">Surat At-Talaq: 2-3</p>
            <p className="text-sm">
              "...Barangsiapa bertakwa kepada Allah, niscaya Dia akan membukakan jalan keluar baginya, dan Dia memberinya rezeki 
              dari arah yang tidak disangka-sangkanya. Dan barangsiapa bertawakal kepada Allah, niscaya Allah akan mencukupkan (keperluan)nya..."
            </p>
          </div>
          
          <div className="p-3 bg-neutral-50 rounded-lg">
            <p className="text-sm mb-1 font-medium">Surat Al-Insyirah: 5-6</p>
            <p className="text-sm">
              "Maka sesungguhnya bersama kesulitan ada kemudahan. Sesungguhnya bersama kesulitan ada kemudahan."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPAMotivation;