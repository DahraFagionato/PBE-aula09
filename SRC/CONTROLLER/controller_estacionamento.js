const con = require('../CONNECT/banco').con;

const create = (req, res) => {
    let estacionamento_id = req.body.estacionamento_id;
    let cliente_id = req.body.cliente_id;
    let veiculo_placa = req.body.veiculo_placa;
    let veiculo_marca = req.body.veiculo_marca;
    let veiculo_modelo = req.body.veiculo_modelo;
    let data_entrada = req.body.data_entrada;
    let data_saida = req.body.data_saida;

    let query = `INSERT INTO estacionamento (estacionamento_id, cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida) VALUES`
    query += `('${estacionamento_id}','${cliente_id}', '${veiculo_placa}', '${veiculo_marca}', '${veiculo_modelo}', '${data_entrada}', '${data_saida}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM estacionamento', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json(result)
        }
    })
}

module.exports = {
    create,
    read
}