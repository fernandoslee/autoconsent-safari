import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pembrokeshirecoast.wales_utp', ['https://www.pembrokeshirecoast.wales/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
