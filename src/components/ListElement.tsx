interface ListElementProps {
  value: number;
  name: string;
  icon: string;
}

const ListElement = ({ value, name, icon }: ListElementProps) => {
  return (
    <div className="list-element">
      <div className="list-element__value">{value}</div>
      <div className="list-element__value">
        <img src={icon} alt="image" width={24} height={24} />
        {name}
      </div>
    </div>
  );
};

export default ListElement;
