const {mysqldb} = require('./../connection')

module.exports={
    addMovie:(req,res)=>{
        var {title,
            image,
            sinopsis,
            sutradara,
            trailer,
            produksi} = req.body
        
        var data = {
            title,
            image,
            sinopsis,
            sutradara,
            trailer,
            produksi
        }

            var sql = `insert into movies set ?`
            mysqldb.query(sql,data,(err,result)=>{
                if(err) throw err

                res.status(200).send(result)

            })
    },
    addGenre:(req,res)=>{
        // console.log(req.body[0])
        const data = req.body
        let sql = `insert into genre (movieId,namaGenre) values ?`
        // console.log(data)
        
        let dataarr = []
        for(const props in data){
            // dataarr.push([data[props].movieId,data[props].namaGenre])
            
            console.log(props)
        }
        // console.log(dataarr, 'dataarr')



        // mysqldb.query(sql, [dataarr], (err,result)=>{
        //     if(err) throw err
        //     return res.status(200).send(result)
        // })


        // res.send('woi')
    }
}