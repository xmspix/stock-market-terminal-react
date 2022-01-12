import React, { useEffect, useRef, useState } from "react";
import { Idata } from ".";
import { debounce } from "../../../utils/helpers";
// import debounce from "lodash.debounce";

interface Props {
  filter: any;
  symbol?: any;
}

export const filterApi = (filter: any, records: any[]) => {
  const filterName: any = Object.keys(filter)[0]

  switch (filterName) {
    case "priceOver":
      return records.filter((item: Idata) => item.close >= filter.priceOver);
    case 'priceUnder':
      return records.filter((item: Idata) => item.close <= filter.priceUnder);
    case "changePercentOver":
      return records.filter((item: Idata) => item.changePercent >= filter.changePercentOver);
    case "changePercentUnder":
      return records.filter((item: Idata) => item.changePercent <= filter.changePercentUnder);
    case "volumeOver":
      return records.filter((item: Idata) => item.volume >= filter.volumeOver);
    case "volumeUnder":
      return records.filter((item: Idata) => item.volume <= filter.volumeUnder);
    case "symbol":
      return records.filter((item: Idata) => item.symbol.includes(filter.symbol));
    default:
      break;
  }
}

export const Filters = ({ filter }: Props) => {
  const onChange = (e: any) => {
    const filters = {
      name: e.target.name,
      value: e.target.value,
    };

    switch (filters.name) {
      case "priceOver":
        filter({ priceOver: filters.value });
        break;
      case "priceUnder":
        filter({ priceUnder: filters.value });
        break;
      case "changePercentOver":
        filter({ changePercentOver: filters.value });
        break;
      case "changePercentUnder":
        filter({ changePercentUnder: filters.value });
        break;
      case "volumeOver":
        filter({ volumeOver: filters.value });
        break;
      case "volumeUnder":
        filter({ volumeUnder: filters.value });
        break;

      default:
        break;
    }
  };

  return (
    <div className="filters">
      <div className="filters__container">
        <p className="filters__col">Price:</p>
        <p className="filters__col">
          <input type="text" name="priceOver" placeholder="min" className="input input__dark" onChange={(e) => onChange(e)} />
          <input type="text" name="priceUnder" placeholder="max" className="input input__dark" onChange={(e) => onChange(e)} />
        </p>
      </div>
      <div className="filters__container">
        <p className="filters__col">Change%:</p>
        <p className="filters__col">
          <input type="text" name="changePercentOver" placeholder="min" className="input input__dark" onChange={(e) => onChange(e)} />
          <input type="text" name="changePercentUnder" placeholder="max" className="input input__dark" onChange={(e) => onChange(e)} />
        </p>
      </div>
      <div className="filters__container">
        <p className="filters__col">Volume:</p>
        <p className="filters__col">
          <input type="text" name="volumeOver" placeholder="min" className="input input__dark" onChange={(e) => onChange(e)} />
          <input type="text" name="volumeUnder" placeholder="max" className="input input__dark" onChange={(e) => onChange(e)} />
        </p>
      </div>
      {/* <table style={{ display: "block" }}>
        <tbody>
          <tr>
            <td>Price:</td>
            <td>
              <input type="text" name="priceOver" placeholder="min" onChange={(e) => onChange(e)} />
            </td>
            <td>
              <input
                type="text"
                name="priceUnder"
                placeholder="max"
                onChange={(e) => onChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Change%:</td>
            <td>
              <input
                type="text"
                name="changePercentOver"
                placeholder="min"
                onChange={(e) => onChange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="changePercentUnder"
                placeholder="max"
                onChange={(e) => onChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Volume:</td>
            <td>
              <input
                type="text"
                name="volumeOver"
                placeholder="min"
                onChange={(e) => onChange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="volumeUnder"
                placeholder="max"
                onChange={(e) => onChange(e)}
              />
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export const SearchSymbol = ({ filter, symbol }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    searchRef.current!.value = symbol;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol]);

  const debounceSaved = debounce(() => {
    const symbol = searchRef.current!.value.toUpperCase();

    // store.setSymbol(searchRef.current!.value);
    setSearchValue(symbol);
    filter({ symbol: symbol });
  }, 500);

  const handleSearch = () => {
    debounceSaved();
  }

  return (
    <>
      <i className="search search__icon fa fa-search"></i>
      <input className="search__input" type="text" placeholder="Search" defaultValue={searchValue} ref={searchRef} onChange={() => handleSearch()} />
    </>
  )
};
