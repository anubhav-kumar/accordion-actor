export type userHeading = {
    first: string,
    last: string,
    picture: string
};

export interface userDetails extends userHeading {
        dob: string,
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