import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_en.legaseriea.it_pm5', ['https://en.legaseriea.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
