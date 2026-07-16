import React from 'react'

function page() {
  return (
    <div>
      <div className="w-full max-w-full bg-[#1e1e1e] text-[#f3f4f6] rounded-3xl p-6 md:p-8 shadow-2xl border border-zinc-800">
    
    <div className="text-center mb-6">
      <p className="text-zinc-400 text-xs md:text-sm tracking-wider uppercase">ETHchess presents</p>
      <h1 className="text-2xl md:text-4xl font-bold mt-1 text-white">The ETHchess League</h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div className="bg-[#161616] rounded-xl p-5 border border-zinc-800/80 hover:border-zinc-700 transition flex flex-col items-center text-center">
        <span className="text-[#3b82f6] text-2xl mb-2">
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C16 1.44772 16.4477 1 17 1H18H19C19.5523 1 20 1.44772 20 2C20 2.55228 19.5523 3 19 3V5C20.6569 5 22 6.34315 22 8V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V8C2 6.34315 3.34315 5 5 5V4C4.44772 4 4 3.55228 4 3C4 2.44772 4.44772 2 5 2H6H7C7.55228 2 8 2.44772 8 3C8 3.55228 7.55228 4 7 4V5H17V3C16.4477 3 16 2.55228 16 2ZM6 7H18H19C19.5523 7 20 7.44772 20 8V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V8C4 7.44772 4.44772 7 5 7H6ZM12 8C12.5523 8 13 8.44771 13 9V13.4648L15.5547 15.1679C16.0142 15.4743 16.1384 16.0952 15.8321 16.5547C15.5257 17.0142 14.9048 17.1384 14.4453 16.8321L11.4453 14.8321C11.1671 14.6466 11 14.3344 11 14V9C11 8.44771 11.4477 8 12 8ZM7 15C7.55228 15 8 14.5523 8 14C8 13.4477 7.55228 13 7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15ZM18 14C18 14.5523 17.5523 15 17 15C16.4477 15 16 14.5523 16 14C16 13.4477 16.4477 13 17 13C17.5523 13 18 13.4477 18 14ZM12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="#000000"/>
</svg>

        </span>
        <h3 className="font-semibold text-base text-white">ETHchess Tuesday</h3>
        <p className="text-zinc-400 text-xs mt-1">9-round swiss</p>
      </div>

      <div className="bg-[#161616] rounded-xl p-5 border border-zinc-800/80 hover:border-zinc-700 transition flex flex-col items-center text-center">
        <span className="text-[#3b82f6] text-2xl mb-2">
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C16 1.44772 16.4477 1 17 1H18H19C19.5523 1 20 1.44772 20 2C20 2.55228 19.5523 3 19 3V5C20.6569 5 22 6.34315 22 8V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V8C2 6.34315 3.34315 5 5 5V4C4.44772 4 4 3.55228 4 3C4 2.44772 4.44772 2 5 2H6H7C7.55228 2 8 2.44772 8 3C8 3.55228 7.55228 4 7 4V5H17V3C16.4477 3 16 2.55228 16 2ZM6 7H18H19C19.5523 7 20 7.44772 20 8V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V8C4 7.44772 4.44772 7 5 7H6ZM12 8C12.5523 8 13 8.44771 13 9V13.4648L15.5547 15.1679C16.0142 15.4743 16.1384 16.0952 15.8321 16.5547C15.5257 17.0142 14.9048 17.1384 14.4453 16.8321L11.4453 14.8321C11.1671 14.6466 11 14.3344 11 14V9C11 8.44771 11.4477 8 12 8ZM7 15C7.55228 15 8 14.5523 8 14C8 13.4477 7.55228 13 7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15ZM18 14C18 14.5523 17.5523 15 17 15C16.4477 15 16 14.5523 16 14C16 13.4477 16.4477 13 17 13C17.5523 13 18 13.4477 18 14ZM12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="#000000"/>
</svg>
        </span>
        <h3 className="font-semibold text-base text-white">Freestyle Friday</h3>
        <p className="text-zinc-400 text-xs mt-1">9-round swiss</p>
      </div>
    </div>

    <div className="space-y-3 mb-8">
      <div className="bg-[#0c2440] border-l-4 border-[#1d4ed8] text-[#93c5fd] px-4 py-3 rounded-r-lg flex items-start gap-3">
        <span className="text-lg mt-0.5">
            <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path fill="#000000" fill-rule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm8-4a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm.01 8a1 1 0 102 0V9a1 1 0 10-2 0v5z"/>
            </svg>
        </span>
        <p className="text-xs md:text-sm font-medium leading-relaxed">
          Only registered players are eligible to compete and earn league points.
        </p>
      </div>

      <div className="bg-[#3b1212] border-l-4 border-[#b91c1c] text-[#fca5a5] px-4 py-3 rounded-r-lg flex items-start gap-3">
        <span className="text-lg mt-0.5">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15H12.01M12 12V9M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 15.9923L13.7276 3.96153C12.9558 2.63852 11.0442 2.63852 10.2724 3.96153L3.25452 15.9923C2.47675 17.3256 3.43849 19 4.98207 19Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
        <p className="text-xs md:text-sm font-medium leading-relaxed">
          Suspicious accounts, sandbagging, and cheating will not be tolerated. Violations result in a lifetime ban.
        </p>
      </div>
    </div>

    <hr className="border-zinc-800/80 mb-6" />

    <div className="mb-8">
      <h2 className="text-base font-semibold text-white mb-4 tracking-wide uppercase text-zinc-300">F1-style scoring, per event</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
        <div className="bg-[#4a2e0a] border border-[#d97706]/30 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-[#f59e0b]">25</div>
          <div className="text-[10px] uppercase tracking-wider text-[#fcd34d] font-semibold mt-1">1st place</div>
        </div>

        <div className="bg-[#161616] border border-zinc-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-white">20</div>
          <div className="text-[10px] uppercase tracking-wider text-zinc-400 mt-1">2nd place</div>
        </div>

        <div className="bg-[#161616] border border-zinc-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-white">16</div>
          <div className="text-[10px] uppercase tracking-wider text-zinc-400 mt-1">3rd place</div>
        </div>

        <div className="bg-[#161616] border border-zinc-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-white">13</div>
          <div className="text-[10px] uppercase tracking-wider text-zinc-400 mt-1">4th place</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div className="bg-[#161616] border border-zinc-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-white">10</div>
          <div className="text-[10px] uppercase tracking-wider text-zinc-400 mt-1">5th to 8th place</div>
        </div>

        <div className="bg-[#161616] border border-zinc-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-white">5</div>
          <div className="text-[10px] uppercase tracking-wider text-zinc-400 mt-1">Finished, 6+ rounds</div>
        </div>
      </div>

      <div className="bg-[#161616] border border-zinc-800 rounded-xl p-4 text-center">
        <div className="text-2xl font-bold text-white">2</div>
        <div className="text-[10px] uppercase tracking-wider text-zinc-400 mt-1">5 rounds or fewer played</div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-800 pt-6">
      <div className="border-l-2 border-blue-500 pl-3">
        <span className="text-xs text-zinc-400 block uppercase tracking-wider">Season length</span>
        <span className="text-base font-semibold text-white">2 to 3 months</span>
      </div>

      <div className="border-l-2 border-blue-500 pl-3">
        <span className="text-xs text-zinc-400 block uppercase tracking-wider">Reward</span>
        <span className="text-base font-semibold text-white">Cash prize, details soon</span>
      </div>
    </div>

  </div>
    </div>
  )
}

export default page
