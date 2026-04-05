import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_leonberg.traumpalast.de_2tt', ['https://leonberg.traumpalast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
