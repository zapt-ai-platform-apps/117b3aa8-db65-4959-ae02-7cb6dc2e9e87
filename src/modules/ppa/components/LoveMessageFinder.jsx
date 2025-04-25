import React, { useState } from 'react';
import { FaSearch, FaHeart, FaPlus, FaTrash } from 'react-icons/fa';

const LoveMessageFinder = () => {
  const [problem, setProblem] = useState('');
  const [messages, setMessages] = useState([]);
  
  const handleAddMessage = () => {
    if (problem.trim()) {
      // This is a simplified version - in a real app, you would provide guidance
      // based on the specific problem entered
      const suggestedMessages = [
        "Allah mengundang Anda untuk lebih bersabar dan mengambil hikmah dari situasi ini",
        "Allah ingin Anda lebih mendekatkan diri kepada-Nya di tengah kesulitan ini",
        "Allah menguji keimanan Anda untuk meningkatkan derajat Anda",
        "Allah ingin mengajarkan Anda untuk lebih bertawakal dan berserah diri",
        "Allah ingin Anda lebih bersyukur atas nikmat-nikmat yang sering terabaikan"
      ];
      
      const randomIndex = Math.floor(Math.random() * suggestedMessages.length);
      
      setMessages([
        {
          id: Date.now(),
          problem: problem,
          message: suggestedMessages[randomIndex]
        },
        ...messages
      ]);
      
      setProblem('');
    }
  };
  
  const deleteMessage = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Pencari "Pesan Cinta" Allah</h2>
      
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-bold mb-3">Apa itu "Pesan Cinta" Allah?</h3>
        <p className="text-sm text-neutral-700 mb-4">
          "Pesan cinta" Allah adalah hikmah atau pelajaran tersembunyi di balik setiap ujian 
          atau masalah yang kita hadapi. Setiap kesulitan sebenarnya adalah undangan Allah 
          untuk lebih dekat kepada-Nya dan meningkatkan kualitas diri kita.
        </p>
        
        <div className="p-3 bg-secondary-50 rounded-lg text-sm">
          <p className="font-medium mb-1">Mengapa mencari "pesan cinta" penting?</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Membuat kita lebih positif dalam menghadapi masalah</li>
            <li>Membantu kita melihat ujian sebagai bentuk kasih sayang Allah</li>
            <li>Membuka mata hati untuk melihat tujuan di balik setiap ujian</li>
            <li>Menguatkan hubungan kita dengan Allah di setiap situasi</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-neutral-50 p-4 rounded-lg">
        <h3 className="font-bold mb-3">Temukan Pesan Cinta dalam Masalah Anda</h3>
        
        <div className="space-y-3 mb-4">
          <textarea
            className="input-field h-24"
            placeholder="Tuliskan masalah atau ujian yang sedang Anda hadapi..."
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          ></textarea>
          
          <button 
            onClick={handleAddMessage}
            className="btn-secondary w-full flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaSearch /> <span>Temukan Pesan Cinta</span>
          </button>
        </div>
      </div>
      
      <div>
        <h3 className="font-bold mb-3">Pesan Cinta yang Ditemukan</h3>
        
        {messages.length === 0 ? (
          <div className="text-center py-6 bg-white rounded-lg border border-dashed border-neutral-300">
            <p className="text-neutral-500 mb-2">Belum ada pesan cinta yang ditemukan</p>
            <button
              onClick={() => setProblem("Saya sedang mengalami kesulitan keuangan")}
              className="text-secondary-600 text-sm flex items-center justify-center gap-1 mx-auto cursor-pointer"
            >
              <FaPlus size={12} /> <span>Tambahkan Contoh Masalah</span>
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className="bg-white p-3 rounded-lg border border-neutral-200">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-xs text-secondary-600 font-medium">Masalah:</div>
                  <button
                    onClick={() => deleteMessage(msg.id)}
                    className="text-neutral-400 hover:text-red-500 p-1 cursor-pointer"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
                <p className="text-sm mb-3">{msg.problem}</p>
                
                <div className="bg-secondary-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaHeart className="text-red-500" />
                    <div className="text-xs font-medium">Pesan Cinta Allah:</div>
                  </div>
                  <p className="text-sm italic">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveMessageFinder;