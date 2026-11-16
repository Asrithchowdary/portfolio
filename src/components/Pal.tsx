import type { ComponentProps } from "react";
import { PiixPal } from "piixpal/react";

type PalName = ComponentProps<typeof PiixPal>["pal"];

export default function Pal({ pal }: { pal: PalName }) {
  return (
    <span className="pal" aria-hidden="true">
      <PiixPal pal={pal} />
    </span>
  );
}