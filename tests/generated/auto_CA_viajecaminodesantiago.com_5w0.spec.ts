import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_viajecaminodesantiago.com_5w0', ['https://viajecaminodesantiago.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
