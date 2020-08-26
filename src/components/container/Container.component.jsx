import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import '../container/container.style.scss';

const Container = () => {
  const [section, setSection] = useState([
    {
      title: "men",
      imageUrl: "https://cdn.lifestyleasia.com/wp-content/uploads/sites/2/2020/06/03144012/summer-t-shirts-for-men-1600x855.jpg",
      linkUrl: "men",
      size: 'large',
      id: 1
    },
    {
      title: "women",
      imageUrl: "https://fashionisers.com/wp-content/uploads/2019/04/Perfect-Casual-Style-Tips-for-Women-1160x720.jpg",
      linkUrl: "women",
      size: 'large',
      id: 2

    },
    {
      title: "girls",
      imageUrl: "https://i.pinimg.com/originals/90/bb/42/90bb4234e348f43a86d567faf85aca13.jpg",
      linkUrl: "girls",
      size: 'large',
      id: 3
    },
    {
      title: "boys",
      imageUrl: "https://www.sperry.com/on/demandware.static/-/Sites-sperry_us-Library/default/dw9bda0313/content/seasonal-content/landing-pages/kids/2020/07/sbs-demo-boy-d.jpg",
      size: 'large',

      linkUrl: "boys",
      id: 4
    },
    {
      title: "accessories",
      imageUrl: "https://freedesignfile.com/upload/2017/06/Fashion-summer-women-and-cosmetics-and-accessories-HD-picture-06.jpg",
      size: 'large',
      linkUrl: "accessories",
      id: 5
    }
  ]);
  return (
    <div className="container">
      {section.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Container;
