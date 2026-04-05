import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schwaebisch-gmuend.traumpalast.de_net', ['https://schwaebisch-gmuend.traumpalast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
