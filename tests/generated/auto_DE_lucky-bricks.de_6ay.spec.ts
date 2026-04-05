import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lucky-bricks.de_6ay', ['https://lucky-bricks.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
