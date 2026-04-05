import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_krankenhaus-sachsenhausen.de_7tq', ['https://www.krankenhaus-sachsenhausen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
