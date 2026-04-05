import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dronexcanada.ca_wv6', ['https://dronexcanada.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
