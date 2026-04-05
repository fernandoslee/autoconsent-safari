import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schorndorf.traumpalast.de_ui5', ['https://schorndorf.traumpalast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
