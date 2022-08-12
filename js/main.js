import {range} from 'lodash'

const test = () => {
  const list = range(0, 10000, 1)
  list.forEach(item => console.log(item))
  document.getElementById("temp").append('ddddddddddddd')
  console.log(document.getElementById("temp"))
}

test()
