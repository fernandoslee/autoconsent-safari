import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_turismoroma.it_ssd', ['https://www.turismoroma.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
