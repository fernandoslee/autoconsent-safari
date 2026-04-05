import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rabot.energy_77q', ['https://www.rabot.energy/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
