import React from "react";
import img1 from "../../../../assets/gallery/grid2_1.png";
import img2 from "../../../../assets/gallery/grid2_2.png";
import img3 from "../../../../assets/gallery/grid2_3.png";
import img4 from "../../../../assets/gallery/grid2_4.png";
import img5 from "../../../../assets/gallery/grid2_5.png";
import img6 from "../../../../assets/gallery/grid2_6.png";
import svg3 from "../../../../assets/gallery/3.svg";
import ImageDiv from "./ImageDiv";
const ImgGridRow2 = () => {
  return (
    <div className={" relative"}>
      <img
        className="  rotate-12 absolute -top-20 right-1/3 translate-x-10"
        src={svg3}
        alt=""
      />
      <div className=" w-full h-[640px] grid grid-cols-9  gap-8">
        {/* left  */}
        <div className=" col-start-1 col-end-3 col-span-2 h-full     ">
          <ImageDiv className={"border-orange-400 "} src={img1} />
        </div>

        {/* middle  */}
        <div className="  col-start-3 col-end-7   grid justify-between  gap-6  ">
          <ImageDiv className={"border-green-300 "} src={img2} />
          <div className="  grid grid-cols-2  gap-6 ">
            <ImageDiv className={"border-red-400 "} src={img3} />
            <ImageDiv className={"border-fuchsia-400 "} src={img4} />
          </div>
        </div>
        {/* right*/}
        <div className="col-start-6-col-end-9 col-span-3  grid grid-col-1 gap-6  ">
          <ImageDiv className={"border-green-400 "} src={img6} />

          <ImageDiv className={"border-slate-600 "} src={img5} />
        </div>
      </div>
    </div>
  );
};

export default ImgGridRow2;