'use strinct'

var response = require('./res')
var connection = require('./koneksi')

exports.index = function(req,res){
    response.ok('aplikasi REST API ku berjalan!',res)
}

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req,res){
    connection.query('select * from mahasiswa', function(error, rows, fields){
        if(error) {
            connection.log(error)
        }else {
            response.ok(rows, res)
        }       
    })
}

//menampilkan semua data mahasiswa berdasarkan ID
exports.tampilberdasarkanid = function(req,res){
  let id = req.params.id
  connection.query('select * from mahasiswa where id_mahasiswa = ?', [id],
    function(error, rows, fields) {
        if(error){
            console.log(error) 
        }else {
            response.ok(rows, res)
        }
    }
  )   
}

//menambahkan data mahasiswa
exports.tambahMahasiswa = function(req,res) {
    var nim = req.body.nim
    var nama = req.body.nama
    var jurusan = req.body.jurusan

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)', 
    [nim, nama, jurusan],
    function (error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok('Berhasil menambahkan data!!',res)
        }
    })

}