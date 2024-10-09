import neonLamp from '../dark/neonLamp'
import darkNightLceBlade from '../dark/darkNightLceBlade'
import dark3 from '../dark/dark3'
import dark4 from '../dark/dark4'
import dark2 from '../dark/dark2'
import dark from '../dark/dark'
import classic from '../dark/classic'
import blackHumour from '../dark/blackHumour'
import lateNightOffice from '../dark/lateNightOffice'
import blackGold from '../dark/blackGold'
import orangeJuice from '../dark/orangeJuice'
import dark5 from '../dark/dark5'
import dark6 from '../dark/dark6'
import dark7 from '../dark/dark7'

export default [
  {
    name: '脑图经典',
    value: 'classic',
    theme: classic
  },
  {
    name: '黑色幽默',
    value: 'blackHumour',
    theme: blackHumour
  },
  {
    name: '深夜办公室',
    value: 'lateNightOffice',
    theme: lateNightOffice
  },
  {
    name: '黑金',
    value: 'blackGold',
    theme: blackGold
  },
  {
    name: '橙汁',
    value: 'orangeJuice',
    theme: orangeJuice
  },
  {
    name: '霓虹灯',
    value: 'neonLamp',
    theme: neonLamp
  },
  {
    name: '暗夜冰刃',
    value: 'darkNightLceBlade',
    theme: darkNightLceBlade
  },
  {
    name: '暗色',
    value: 'dark',
    theme: dark
  },
  {
    name: '暗色2',
    value: 'dark2',
    theme: dark2
  },
  {
    name: '暗色3',
    value: 'dark3',
    theme: dark3
  },
  {
    name: '暗色4',
    value: 'dark4',
    theme: dark4
  },
  {
    name: '暗色5',
    value: 'dark5',
    theme: dark5
  },
  {
    name: '暗色6',
    value: 'dark6',
    theme: dark6
  },
  {
    name: '暗色7',
    value: 'dark7',
    theme: dark7
  }
].map(item => {
  return {
    ...item,
    dark: true
  }
})
