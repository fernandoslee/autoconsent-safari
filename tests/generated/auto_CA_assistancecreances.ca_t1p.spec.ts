import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_assistancecreances.ca_t1p', ['https://www.assistancecreances.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
