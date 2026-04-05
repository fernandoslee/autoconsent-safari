import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_theaudiofactory.ca_hhx', ['https://theaudiofactory.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
