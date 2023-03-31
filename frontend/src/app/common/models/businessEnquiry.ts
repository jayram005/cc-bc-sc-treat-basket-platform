export interface BusinessQueryForm {
    mName: string;
    fname: string;
    phoneNo: string;
    email: string;
    businessType: string;
    businessUrl: string;
    businessAddress: string;
}

export interface BusinessEnqueryRequest {
    merchantName: string;
    contactName: string;
    contactPhone: string;
    contactEmail: string;
    typeOfBusiness: string;
    businessUrl: string;
    businessAddress: string;
    source?: string;
}

export interface BusinessEnqueryResponse {
    id?: number;
    errorId?: number;
    message?: string;
}
