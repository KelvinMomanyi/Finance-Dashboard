export interface ExpensesByCategory{
    salaries:number;
    supplies: number;
    services:number;
}
export interface Month{
    id:string;
    month:string;
    revenue:number;
    expenses:number;
    nonOperatinalExpenses: number;
    operationalExpenses: number;
}

export interface Day{
    id:string;
    date:string;
    revenue:number;
    expenses:number;
}


export interface GetKpisResponse{
    id: string,
    _id: string,
    __v: number;
    totalProfit: number;
    totalRevenue:number;
    totalExpenses: number;
    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<Month>;
    dailyData: Array<Day>
    createdAt: string;
    updatedAt: string;
}

export interface GetProductsResponse{
    id: string,
    _id: string,
    __v: number;
    Price: number;
    expense:number;
    transactions: Array<string>;
    createdAt: string;
    updatedAt: string;
}

export interface GetTransactionsResponse{
    id: string,
    _id: string,
    __v: number;
    buyer:string;
    amount: number;
    expense:number;
    productId: Array<string>;
    createdAt: string;
    updatedAt: string;
}