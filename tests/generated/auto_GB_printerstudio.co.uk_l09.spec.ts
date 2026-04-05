import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_printerstudio.co.uk_l09', ['https://www.printerstudio.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
