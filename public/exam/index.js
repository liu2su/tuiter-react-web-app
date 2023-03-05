const qwe = { asd: 123, sdf: 234 }
const zxc = { sdf: 345, ...qwe, asd: 456, zxc: 567 }
const { sdf, asd } = zxc
console.log(asd)
console.log(sdf)