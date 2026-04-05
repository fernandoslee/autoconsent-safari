import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_westcoast.co.uk_tlp', ['https://www.westcoast.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
