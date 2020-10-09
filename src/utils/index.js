export * from './primitiveChecks';

export const isValid = (name, address, phone) => {
    return (name !== '' && address !== '' && phone !== '');
};
