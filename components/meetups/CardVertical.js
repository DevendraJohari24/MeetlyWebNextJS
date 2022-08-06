import { Fragment } from "react";
import Image from "next/image";

function CardVertical({title, image}){
    return (
      <Fragment>
            <div className="group item">
            <img
                src={image}
                alt=""
                className="object-cover w-full h-full duration-200 md:block group-hover:scale-110"
            />
            <div class="item-gradient"></div>
            <h5>{title}</h5>
            </div>
      </Fragment>
    );
}

export default CardVertical;
