const valueExists = (value: any): boolean => !!value;

export const validateLength = (field: string, value: string, min: number, max: number): boolean => {
    if (valueExists(value)) {
        const len = value.length;

        if (len <= max && len >= min) {
            return true;
        }

        throw new Error(`${field} length should be in range ${min} - ${max}`);
    }

    throw new Error(`${field} is required`);
}

export const validateMinValue = (field: string, value: number, min: number): boolean => {
    if (valueExists(value)) {
        if (value >= min) {
            return true;
        }
    
        throw new Error(`${field} should be greater than ${min}`);
    }

    throw new Error(`${field} is required`);
};

export const validatePhoneNumber = (field: string, value: string): boolean => {
    if (valueExists(value)) {
        const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    
        if (regex.test(value)) {
            return true;
        }
    
        throw new Error(`${value} is not a valid phone number`);
    }

    throw new Error(`${field} is required`);
}

export const validateEmail = (field: string, value: string) => {
    if (valueExists(value)) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
        if (regex.test(value)) {
            return true;
        }
    
        throw new Error(`${value} is not a valid email`);
    }

    throw new Error(`${field} is required`);
}
