export interface Sidebar {
    content: Content[],

}

export interface Content {

    returned: number,
    received: number,
    accountabilityStatus: string,
    balance: number,
    cardDate: Date,
    currency: {
        name: string,
        symbol: string,
    }
    accountabilityId: number,
    currencySymbol: string,
    amountTotal: number,
}
