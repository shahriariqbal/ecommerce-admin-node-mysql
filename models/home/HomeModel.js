function HomeModel(){
    this.insert = function()
    {
        return new Promise(function(resolve, reject){
            connection.query('INSERT INTO `test` VALUES("","Test 2")',function(err, rows){
                if (!err){
                    resolve(rows);
                }
                else{
                    reject(err);
                }
            });
        });
    }

    this.select = function(){

    }

    this.update = function(){

    }

    this.delete = function(){

    }
}

module.exports = new HomeModel();