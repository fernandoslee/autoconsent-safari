import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_weltzentrum-der-medizintechnik.de_eq3', ['https://www.weltzentrum-der-medizintechnik.de/start'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
