import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_buendnis-buergerenergie.de_rne', ['https://www.buendnis-buergerenergie.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
