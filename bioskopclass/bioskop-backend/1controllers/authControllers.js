const {mysqldb} = require('./../connection')

module.exports={
    registerUser:(req,res)=>{
        var {username,password,roleId} = req.body
        let data = {
            username,
            password,
            roleId
        }
        let sql = `select * from users where username = '${username}'`
        mysqldb.query(sql,(err,results)=>{
            if(err)  throw err
            
            if(results.length>0){
                res.status(500).send({message:'user udah ada'})
            }else{
                let sql2 = `insert into users set ?`
                mysqldb.query(sql2, data, (err,results)=>{
                    if(err) throw err
                    res.status(200).send({message:'username created'})
                })
            }
        })
    },
    loginUser:(req,res)=>{
        var {username,password} = req.body
        // let data={
        //     username,
        //     password
        // }

        let sql = `select * from users where username = ? and password =?`

        mysqldb.query(sql,[username,password], (err,result)=>{
            if(err) throw err

            if(result.length>0){
                res.status(200).send({message:'berhasil login'})
            }else
            res.status(500).send({message:'username/password salah'})
        })
    }
}