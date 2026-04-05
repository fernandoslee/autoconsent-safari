import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_easyframe.co.uk_sug', ['https://www.easyframe.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
