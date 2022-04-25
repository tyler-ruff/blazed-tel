enum serviceTiers {
    Personal = 1,
    Business,
    Enterprise
}
export interface Settings {
    id?: string;
    email: string;
    name: string;
    address: string;
    city: string;
    zipCode: string;
    country: string;
    nickname: string;
    accountType: serviceTiers;
}