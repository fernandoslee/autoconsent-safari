import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_accountingexamsmastery.ca_707', ['https://accountingexamsmastery.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
