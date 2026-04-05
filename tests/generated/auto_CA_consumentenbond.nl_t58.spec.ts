import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_consumentenbond.nl_t58', ['https://www.consumentenbond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
