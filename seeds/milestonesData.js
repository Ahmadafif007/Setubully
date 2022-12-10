const { Milestone } = require('../models');

const milestoneData = [
  {
    name: 'Muhammad Adji',
    description:
      'Kita harus menghindari cikal bakal bullying.',
  },
  {
    name: 'Afif',
    description:
      'Yups. Thats right man',
  },
  {
    name: 'Fian',
    description:
      'Saya letih dibully terus nih guys',
  },
  {
    name: 'Fivy',
    description:
      'Sabar Guys',
  },
  {
    name: 'Tama',
    description:
      'Sharing your story and helping others',
  },
  {
    name: 'Anonimous',
    description:
      'With this new life that you have created for yourself, through all the hardhips, you have made it this far and have show to not only your friends and family but most importantly yourself that having a goal and staying dedicated can make all the difference to changing ones life around.',
  },
];

const seedMilestones = () => Milestone.bulkCreate(milestoneData);

module.exports = seedMilestones;
