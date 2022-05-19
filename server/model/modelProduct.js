const mongoose= require('mongoose');

const product = mongoose.model('product',new mongoose.Schema(
    {
        key:Number,
        type: String,
        title:String,
        imgUrl:String,
        desc:String,
        descM: String,
        prise:Number,
        sizes: [String]
      })
      );

      module.exports = product