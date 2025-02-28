import React from "react";

interface ItemProps {
  icon?: string;
  id?: string;
}

const Item = ({ id, icon }: ItemProps) => {
  return (
    <div className="item">
      <img src={icon} alt="image" width={24} height={24} />
      <div className="item__id">{id}</div>
    </div>
  );
};

export default Item;
