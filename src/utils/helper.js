//extracting values for individual fields
export const parseValue = (dataKey, countryData) => {
    let dataValue;
    switch (dataKey) {
        case "name":
            dataValue = countryData[dataKey]?.common
            break;
        case "timezones":
            dataValue = countryData[dataKey][0]
            break;
        case "capital":
            dataValue = countryData[dataKey][0]
            break;
        case "maps":
            dataValue = countryData[dataKey]?.googleMaps
            break;
        default:
            dataValue = countryData[dataKey]

    }
    return dataValue
}