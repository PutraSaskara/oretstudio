import React from "react";

const TrendCard = (props) => {
  const { title_1, title_2,title_3, desc_1,desc_2,desc_3, imageUrl_1,imageUrl_2,imageUrl_3,imageName_1,imageName_2,imageName_3 } = props;

  return (
    <div className="flex justify-center mx-[258px] ">
      {/* #1 card */}
      
      <div className="flex flex-col mx-[56px] " >
        <img
        className=""
        src={imageUrl_1}
        alt={imageName_1}/>
        <h2 className="font-maven-pro text-lg">{title_1}</h2>
        <p className="font-maven-pro">{desc_1}</p>
        </div>
      <div className=" ">

        {/* #2 card */}
        <div className="mb-[35px] ">
        <img
        className=""
        src={imageUrl_2}
        alt={imageName_2}/>
        <h2 className="font-maven-pro text-lg">{title_2}</h2>
        <p className="font-maven-pro"> {desc_2}</p>
        </div>

        {/* 3 card */}
        <div className=" ">
        <img
        className=""
        src={imageUrl_3}
        alt={imageName_3}/>
        <h2 className="font-maven-pro text-lg">{title_3}</h2>
        <p className="font-maven-pro">{desc_3}</p>
        </div>
      </div>
    </div>
   


  );
};

export default TrendCard;
