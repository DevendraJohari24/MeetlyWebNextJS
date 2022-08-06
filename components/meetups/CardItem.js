import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

function CardItem({ id, title, image, subtitle, createdAt, index , meetID}) {
  const [itemtitle, setItemtitle] = useState('');
  const [itemImage, setItemImage] = useState('');
  const [itemSubtitle, setItemSubtitle] = useState('');
  const [itemDate, setItemDate] = useState();
  const [itemID, setItemID] = useState('')
  
  const date = new Date(createdAt).toLocaleString();
  const router = useRouter();

  useEffect(()=>{
    setItemDate(date);
    setItemImage(image);
    setItemtitle(title);
    setItemID(meetID);
    setItemSubtitle(subtitle);
  }, []);

  function showMeetup() {
    router.push("/" + id);
  }
  return (
    <Fragment>
      <div key={id}>
        <div>
          <img
            src={itemImage}
            alt=" random imgee"
            className="w-full object-cover object-center rounded-lg shadow-md hover:translate-y-4"
          />

          <div className="relative px-4 -mt-16 hover:scale-90">
            <div
              className="bg-white p-6 rounded-lg shadow-lg active:opacity-75"
              onClick={showMeetup}
            >
              <div className="flex items-baseline">
                {index === 0 ? (
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    New
                  </span>
                ) : null}
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  {itemDate}
                </div>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                {itemtitle}
              </h4>

              <div className="mt-1">{itemSubtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CardItem;
