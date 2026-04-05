import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_laengineering.it_nt2', ['https://www.laengineering.it/it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
