let defaultOwnerData = { firstName: 'Martin', lastName: 'Fowler' };


export function defaultOwner() { return defaultOwnerData; }
export default defaultOwner;
export function setDefaultOwner(arg) { defaultOwnerData = arg; }

// let defaultOwner = { firstName: 'Martin', lastName: 'Fowler' };