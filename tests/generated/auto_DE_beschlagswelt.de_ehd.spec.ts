import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_beschlagswelt.de_ehd', ['https://beschlagswelt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
