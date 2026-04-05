import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_scandinavia-design.fr_wq3', ['https://www.scandinavia-design.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
