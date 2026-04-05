import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_eyelidsreadingglasses.co.uk_lfx', ['https://www.eyelidsreadingglasses.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
