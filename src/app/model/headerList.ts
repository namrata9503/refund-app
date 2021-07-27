export interface HeaderList {
    id: number;
    title: string;
    justification: number;
    collaborator:{
        name: string,
        email: string,
    },
    purpose: string,
    project: {
        id: number,
        title: string,
    },
    accountabilityExtraInfo: {
        amountOfPeople: number,
        budgetForBreakfast: number
    },
    createdOn: Date,
    costCenters: CostCenters[],

}

export interface CostCenters {

    name: string,
    percentage: number,
}
