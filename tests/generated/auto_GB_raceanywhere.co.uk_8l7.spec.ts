import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_raceanywhere.co.uk_8l7', ['https://www.raceanywhere.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
