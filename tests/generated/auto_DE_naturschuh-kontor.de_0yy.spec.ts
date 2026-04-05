import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_naturschuh-kontor.de_0yy', ['https://www.naturschuh-kontor.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
