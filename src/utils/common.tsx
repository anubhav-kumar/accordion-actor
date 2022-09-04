import { inputDataType } from "../data-types";

export const getAgeFromDob = (dob: string) => {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export const transformInputData = (input: inputDataType) => {
    const age = getAgeFromDob(input.dob);
    return {
        id: input.id,
        first: input.first,
        last: input.last,
        age,
        gender: input.gender,
        email: input.email,
        picture: input.picture,
        country: input.country,
        description: input.description,
        isEditable: age > 17
    }
}

export function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const isEmptyObj = (obj: Object) => {
    if (obj) {
        return Object.keys(obj).length === 0;
    }
    return true;
}

