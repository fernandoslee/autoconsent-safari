import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kongssenteret.no_us5', ['https://kongssenteret.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
