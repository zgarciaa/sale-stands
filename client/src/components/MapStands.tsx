import React from "react";
import mapUrl from "../../../client/stands_feria_buga.jpg";
import "../utils/mapStands.css";
import { DotStand } from "./DotStand";
import { positions } from "../utils/map/positions";

export const MapStands: React.FC = () => {
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
        <DotStand standId={1} position={positions.p1} />
        <DotStand standId={2} position={positions.p2} />
        <DotStand standId={3} position={positions.p3} />
        <DotStand standId={4} position={positions.p4} />
        <DotStand standId={5} position={positions.p5} />
        {/*<DotStand standId={6} position={positions.p6} />*/}
        <DotStand standId={7} position={positions.p7} />
        <DotStand standId={8} position={positions.p8} />
        <DotStand standId={9} position={positions.p9} />
        <DotStand standId={10} position={positions.p10} />
        {/*<DotStand standId={11} position={positions.p11} />*/}
        <DotStand standId={12} position={positions.p12} />
        <DotStand standId={13} position={positions.p13} />
        <DotStand standId={14} position={positions.p14} />
        <DotStand standId={15} position={positions.p15} />
        <DotStand standId={16} position={positions.p16} />
        <DotStand standId={17} position={positions.p17} />
        <DotStand standId={18} position={positions.p18} />
        <DotStand standId={19} position={positions.p19} />
        <DotStand standId={20} position={positions.p20} />
        <DotStand standId={21} position={positions.p21} />
        <DotStand standId={22} position={positions.p22} />
        <DotStand standId={23} position={positions.p23} />
        <DotStand standId={24} position={positions.p24} />
        <DotStand standId={25} position={positions.p25} />
        <DotStand standId={26} position={positions.p26} />
        <DotStand standId={27} position={positions.p27} />
        <DotStand standId={28} position={positions.p28} />
        <DotStand standId={29} position={positions.p29} />
        <DotStand standId={30} position={positions.p30} />
      </div>
    </div>
  );
};
