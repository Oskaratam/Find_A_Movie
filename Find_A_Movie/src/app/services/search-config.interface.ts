export interface SearchConfig {
    genreId: string,
    gteDate : string,
    lteDate : string,
    includeAdult : boolean,
    keyword ?: number,
    originCountry : string,
}


//"movie for kids" keyword id = 286758