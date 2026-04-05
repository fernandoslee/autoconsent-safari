import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_valedopartners.com_woq', ['https://www.valedopartners.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
