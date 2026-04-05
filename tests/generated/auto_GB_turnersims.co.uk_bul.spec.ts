import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_turnersims.co.uk_bul', ['https://www.turnersims.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
