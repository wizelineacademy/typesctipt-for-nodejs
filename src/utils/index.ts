export const validateLength = (value: string, min: number, max: number): boolean => {
    const len = value.length;

    if (len <= max && len >= min) {
        return true;
    }

    throw new Error(`${value} length should be in range ${min} - ${max}`);
}

export const validateMinValue = (value: number, min: number): boolean => {
    if (value >= min) {
        return true;
    }

    throw new Error(`${value} should be greater than ${min}`);
};