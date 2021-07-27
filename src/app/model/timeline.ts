export interface Timeline {
    content: Content[],

}

export interface Content {

    cardType: string,
    status: string,
    notes:string,
    cardDate: Date,
    author: {
        name: string,
    }
    id: number,
    currencySymbol: string,
    amountTotal: number,
}
