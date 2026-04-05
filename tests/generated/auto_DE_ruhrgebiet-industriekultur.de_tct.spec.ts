import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ruhrgebiet-industriekultur.de_tct', ['https://www.ruhrgebiet-industriekultur.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
