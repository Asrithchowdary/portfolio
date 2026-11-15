import { useEffect } from "react";

export function useClickSound() {
  useEffect(() => {
    let ctx: AudioContext | undefined;

    const play = () => {
      try {
        ctx = ctx ?? new AudioContext();
        if (ctx.state === "suspended") void ctx.resume();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const t = ctx.currentTime;
        osc.type = "square";
        osc.frequency.setValueAtTime(900, t);
        osc.frequency.exponentialRampToValueAtTime(300, t + 0.04);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.06);
      } catch {
        // audio not supported, ignore
      }
    };

    window.addEventListener("click", play);
    return () => {
      window.removeEventListener("click", play);
      void ctx?.close();
    };
  }, []);
}