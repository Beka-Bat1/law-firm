const path = require('path')

module.exports ={
    webpack: {
        alias:{
            "@img": path.resolve(__dirname, 'src/assets/images')
        }
    }
}