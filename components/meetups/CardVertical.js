import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

function CardVertical({title, image}){
  const [imageID, setImageID] = useState('');

  const myLoader = () => {
    if(imageID !== ''){
      if(imageID.includes("google")){
        return `https://drive.google.com/uc?export=view&id=${imageID}`;

      }
      else{
        return image;
      }
    }
    else{
      return "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg";
    }
  }

  useEffect(() => {

    setImageID(image);
  }, [image])
    return (
      <Fragment>
        <div className="group item">
          <Image
            src={image}
            loader={myLoader}
            alt=""
            width="750w"
            layout="fill"
            height="700w"
            className="object-cover w-full h-full duration-200 md:block group-hover:scale-110"
          />
          <div className="item-gradient"></div>
          <h5>{title}</h5>
        </div>
      </Fragment>
    );
}

export default CardVertical;
