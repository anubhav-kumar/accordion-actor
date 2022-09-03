export type inputDataType = {
    id: number,
    first: string,
    last: string,
    dob: string,
    gender: string,
    email: string,
    picture: string,
    country: string,
    description: string
};

export type transformedDataType = {
    id: number,
    first: string,
    last: string,
    age: number,
    gender: string,
    email: string,
    picture: string,
    country: string,
    description: string,
    dataIndex: any,
    isEditable: boolean
};

export type userHeading = {
    first: string,
    last: string,
    picture: string
};

export interface userDetails extends userHeading {
        age: number,
        gender: string,
        email: string,
        country: string,
        description: string
};

export interface userAccordion extends userDetails {
    isOpen: Boolean,
    updateData: Function,
    dataIndex: number,
    deleteIndex: Function
    isEditable: boolean
};

export interface userHeadingProps extends userHeading {
    isEditMode: boolean,
    isOpen: boolean,
    updateData: Function
}

export interface userDetailsEditProps extends userDetails {
    isEditMode: boolean,
    updateData: Function
}