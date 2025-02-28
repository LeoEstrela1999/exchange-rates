import {
  Select as HeroSelect,
  SelectItem,
} from "@heroui/select";
import Currency from "../model/Currency";
import Item from "./Item";

interface DropdownProps {
  selectedCurrency: string;
  currencyList: Currency[];
  onSelect: (newCurrency: string) => void;
}

const Select = ({
  currencyList,
  onSelect,
  selectedCurrency,
}: DropdownProps) => {
  return (
    <HeroSelect
      className="select"
      items={currencyList}
      selectedKeys={[selectedCurrency]}
      disableAnimation
      onSelectionChange={(e) => onSelect(e.anchorKey as string)}
      renderValue={(currencies) => {
        return currencies.map((currency) => (
          <Item icon={currency.data?.icon} id={currency.data?.id} />
        ));
      }}
    >
      {(currency) => (
        <SelectItem key={currency.id}>
          <Item icon={currency.icon} id={currency.id} />
        </SelectItem>
      )}
    </HeroSelect>
  );
};

export default Select;
