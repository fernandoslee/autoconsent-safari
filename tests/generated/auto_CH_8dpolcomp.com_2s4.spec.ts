import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_8dpolcomp.com_2s4', ['https://www.8dpolcomp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
