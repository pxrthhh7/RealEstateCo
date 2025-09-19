import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState({
        location: "All",
        maxPrice: "",
        propertyType: "All",
    });

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};
