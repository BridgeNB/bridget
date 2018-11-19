export const required = value => (value ? undefined : 'required');
export const nonEmpty = value => { 
    return value.trim() !== '' ? undefined : 'Cannot be empty';
}
export const isTrimmed = value => {
    return value.trim() === value? undefined : 'Cannot start or end with whitespace';
}