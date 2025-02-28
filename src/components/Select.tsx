import {Select as HeroSelect, SelectSection, SelectItem} from "@heroui/select";
import CurrencyExchange from "../model/CurrencyExchange";
import Currency from "../model/Currency";

interface DropdownProps {
    selectedCurrency?: string;
    currencyList: Currency[];
    onSelect: (newCurrency: string) => void;
}

const Select = ({currencyList, onSelect}: DropdownProps) => {
    return (
        <HeroSelect className="select" label="Select an animal" disableAnimation onSelectionChange={(e) => onSelect(e.anchorKey as string)}>
        {currencyList.map((currency) => (
          <SelectItem key={currency.id}>
            <div className="flex flex-row gap-2">
            <img src={currency.icon} alt="image" />
              <div>
                {currency.id}
              </div>
            </div>
          </SelectItem>
        ))}
      </HeroSelect>
    )

}

export default Select;