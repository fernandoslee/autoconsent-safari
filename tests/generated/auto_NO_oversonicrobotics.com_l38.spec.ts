import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_oversonicrobotics.com_l38', ['https://www.oversonicrobotics.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
