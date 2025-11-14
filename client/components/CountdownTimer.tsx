import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 6,
    hours: 24,
    minutes: 12,
    seconds: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-4 xl:gap-4 sm:gap-14 md:gap-10 lg:gap-8 justify-center">
      <FlipCard value={timeLeft.days} label="Days" />
      <FlipCard value={timeLeft.hours} label="Hours" />
      <FlipCard value={timeLeft.minutes} label="Minutes" />
      <FlipCard value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

function FlipCard({ value, label }: { value: number; label: string }) {
  const displayValue = value.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-1 sm:gap-3 md:gap-3.5">
      <div className="relative w-[48px] h-[64px] sm:w-[75px] sm:h-[100px] md:w-[98.25px] md:h-[131px]">
        {/* Top half */}
        <div
          className="absolute left-[0.4px] sm:left-[0.75px] md:left-[1px] top-[5.6px] sm:top-[9px] md:top-[11px] w-[47px] h-[29.6px] sm:w-[74px] sm:h-[46px] md:w-[97px] md:h-[60px] rounded-t-[5.2px] sm:rounded-t-[8.5px] md:rounded-t-[10.694px] border border-black"
          style={{
            background: "linear-gradient(3deg, #535353 0.19%, #3D3D3D 94.3%)",
            boxShadow: "inset 0 2.673px 2.673px 0 rgba(255, 255, 255, 0.25)",
          }}
        />

        {/* Bottom half */}
        <div
          className="absolute left-[0.4px] sm:left-[0.75px] md:left-[1px] top-[34.4px] sm:top-[55px] md:top-[71px] w-[47px] h-[29.6px] sm:w-[74px] sm:h-[46px] md:w-[97px] md:h-[60px] rounded-b-[5.2px] sm:rounded-b-[8.5px] md:rounded-b-[10.694px] border border-black"
          style={{
            background: "linear-gradient(3deg, #535353 0.19%, #3D3D3D 94.3%)",
            boxShadow: "inset 0 2.673px 2.673px 0 rgba(255, 255, 255, 0.25)",
          }}
        />

        {/* Middle flip effect */}
        <div
          className="absolute left-[0.4px] sm:left-[0.75px] md:left-[1px] top-[34.4px] sm:top-[55px] md:top-[71px] w-[47px] h-[29.6px] sm:w-[74px] sm:h-[46px] md:w-[97px] md:h-[60px] rounded-t-[5.2px] sm:rounded-t-[8.5px] md:rounded-t-[10.694px] border border-black"
          style={{
            background: "linear-gradient(3deg, #535353 0.19%, #3D3D3D 94.3%)",
            boxShadow: "inset 0 -2.673px 2.673px 0 rgba(255, 255, 255, 0.25)",
          }}
        />

        {/* Number */}
        <div
          className="absolute left-[6.4px] sm:left-[10px] md:left-[13px] top-[10.4px] sm:top-[17px] md:top-[22px] w-[36px] h-[42.4px] sm:w-[56px] sm:h-[66px] md:w-[74px] md:h-[87px] text-white text-center font-['Noto_Sans'] text-[30px] sm:text-[48px] md:text-[64px] leading-normal capitalize flex items-center justify-center"
          style={{
            textShadow: "0 2.673px 2.673px rgba(0, 0, 0, 0.25)",
          }}
        >
          {displayValue}
        </div>

        {/* Dark overlay on bottom */}
        <div
          className="absolute left-0 top-[34.4px] sm:top-[55px] md:top-[71px] w-[48px] h-[29.6px] sm:w-[75px] sm:h-[46px] md:w-[98px] md:h-[60px] rounded-b-[5.2px] sm:rounded-b-[8.5px] md:rounded-b-[10.694px] border-t"
          style={{
            borderTopColor: "rgba(255, 255, 255, 0.24)",
            background: "rgba(0, 0, 0, 0.34)",
          }}
        />

        {/* Center divider */}
        <div className="absolute left-[0.4px] sm:left-[0.75px] md:left-[1px] top-[34.4px] sm:top-[55px] md:top-[71px] w-[47px] sm:w-[74px] md:w-[97px] h-0 bg-black" />

        {/* Left screw */}
        <div
          className="absolute left-0 top-[32px] sm:top-[50px] md:top-[65px] w-[1.2px] sm:w-[1.75px] md:w-[2px] h-[5.6px] sm:h-[9px] md:h-[12px]"
          style={{
            background:
              "linear-gradient(84deg, #EBBC4C -27.73%, #F0C955 -13.49%, #F3D25B 1.6%, #F3D660 3.35%, #F5F17F 15.81%, #F6FB8B 22.75%, #F6F785 29.28%, #F5ED75 37.82%, #F4E264 44.2%, #F5E76D 53.71%, #F5EC74 67.37%, #EDD361 76.36%, #DA9332 95.44%, #D88D2E 97%, #C9832B 104.57%, #B97927 114.92%, #BC7B28 117.01%, #D88D2E 137.16%, #DE9B37 142.45%, #E7B346 153.59%, #EBBC4C 160.44%)",
          }}
        />

        {/* Right screw */}
        <div
          className="absolute left-[46.8px] sm:left-[73.25px] md:left-[96px] top-[32px] sm:top-[50px] md:top-[65px] w-[1.2px] sm:w-[1.75px] md:w-[2px] h-[5.6px] sm:h-[9px] md:h-[12px]"
          style={{
            background:
              "linear-gradient(84deg, #EBBC4C -27.73%, #F0C955 -13.49%, #F3D25B 1.6%, #F3D660 3.35%, #F5F17F 15.81%, #F6FB8B 22.75%, #F6F785 29.28%, #F5ED75 37.82%, #F4E264 44.2%, #F5E76D 53.71%, #F5EC74 67.37%, #EDD361 76.36%, #DA9332 95.44%, #D88D2E 97%, #C9832B 104.57%, #B97927 114.92%, #BC7B28 117.01%, #D88D2E 137.16%, #DE9B37 142.45%, #E7B346 153.59%, #EBBC4C 160.44%)",
          }}
        />
      </div>

      {/* Label */}
      <div className="text-[#010D3E] text-center font-semibold text-sm sm:text-base md:text-xl leading-[18px] sm:leading-[20px] md:leading-[23px] tracking-[-0.15px] sm:tracking-[-0.18px] md:tracking-[-0.2px]">
        {label}
      </div>
    </div>
  );
}
