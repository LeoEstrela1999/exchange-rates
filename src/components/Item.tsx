interface ItemProps {
  icon?: string;
  id?: string;
}

const Item = ({ id, icon }: ItemProps) => {
  return (
    <div className="flex flex-row gap-2">
      <img src={icon} alt="image" width={24} height={24} />
      <div>{id}</div>
    </div>
  );
};

export default Item;
