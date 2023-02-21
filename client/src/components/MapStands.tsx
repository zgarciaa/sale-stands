import React from "react";
import mapUrl from "../../../client/stands_feria_buga.jpg";
import "../utils/mapStands.css";
import { DotStand } from "./DotStand";

export const MapStands: React.FC = () => {
  const p1 = { x: 737, y: 813 };
  const p2 = { x: 767, y: 834 };
  const p3 = { x: 831, y: 830 };
  const p4 = { x: 830, y: 800 };
  const p5 = { x: 897, y: 826 };
  const p6 = { x: 450, y: 190 };
  const p7 = { x: 751, y: 640 };
  const p8 = { x: 624, y: 610 };
  const p9 = { x: 644, y: 611 };
  const p10 = { x: 637, y: 516 };
  const p11 = { x: 450, y: 255 };
  const p12 = { x: 554, y: 255 };
  const p13 = { x: 691, y: 260 };
  const p14 = { x: 815, y: 258 };
  const p15 = { x: 949, y: 258 };
  const p16 = { x: 554, y: 330 };
  const p17 = { x: 691, y: 320 };
  const p18 = { x: 815, y: 310 };

  const standIsAvailable = (
    isAvailable: boolean,
    standNum: number
  ): JSX.Element => {
    return isAvailable ? (
      <div className="green-dot">{standNum}</div>
    ) : (
      <div className="red-dot">{standNum}</div>
    );
  };
  return (
    <div className="container mt-5 position-relative">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${mapUrl})`,
          height: "1120px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "1600px 1120px",
        }}
      >
        <DotStand standId={1} position={p1} />
        <DotStand standId={2} position={p2} />
        <DotStand standId={3} position={p3} />
        <DotStand standId={4} position={p4} />
        <DotStand standId={5} position={p5} />
        {/*<DotStand standId={5} position={p6} />*/}
        <DotStand standId={7} position={p7} />
        <DotStand standId={8} position={p8} />
        <DotStand standId={9} position={p9} />
        <DotStand standId={10} position={p10} />
      </div>
    </div>
  );
};
