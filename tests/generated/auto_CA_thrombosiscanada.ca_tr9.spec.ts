import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_thrombosiscanada.ca_tr9', ['https://thrombosiscanada.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
