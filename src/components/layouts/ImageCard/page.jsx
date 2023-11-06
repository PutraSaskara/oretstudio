import React from "react";

const ImageCard = (props) => {
  const { title, price, colors, imageUrl } = props;

  return (
    <div className="relative w-[264px] h-[439px] ">
      <div className="absolute w-[264px] h-[23px] top-[350px] left-0">
        <p className="absolute w-[263px] h-[21px] top-0 left-0 [font-family:'Heebo-Medium',Helvetica] font-medium text-[#202020] text-[14px] tracking-[0.98px] leading-[23.1px] whitespace-nowrap">
          {title}
        </p>
      </div>
      <div className="absolute w-[49px] h-[21px] top-[383px] left-0 [font-family:'Heebo-Regular',Helvetica] font-normal text-[#4e4e4e] text-[14px] tracking-[0.98px] leading-[23.1px] whitespace-nowrap">
        {price}
      </div>
      <div className="absolute w-[264px] h-[30px] top-[409px] left-0 border-t-2 [border-top-style:solid] border-[#d8d8d8]">
        <div className="absolute w-[58px] h-[21px] top-[4px] left-0 [font-family:'Heebo-Regular',Helvetica] font-normal text-[#4e4e4e] text-[14px] tracking-[0.98px] leading-[23.1px] whitespace-nowrap">
          {colors}
        </div>
      </div>
      <div className="absolute w-[264px] h-[330px] top-0 left-0 " />
      <img
        src={imageUrl}
        alt="Background Image"
        layout="fill"
      />
    </div>
  );
};

export default ImageCard;
