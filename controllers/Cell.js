const Cell = require("../models/Cell");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addCell = async (req, res) => {
    const data = new Cell({
        Cell: req.body.Cell,
    });

    data.save((err,data)=>{
        if(err){
            res.status(500).send("Something wrong happend");
            return;
        }
        res.status(200).send(data);
    });
    
};

exports.showCell = async (req, res) => {
  Cell.find({}, (err, data) => {
    if (err) {
      res.status(500).send("Something wrong happend");
    } else {
        res.status(200).send(data);
    }
  });
};

exports.showCellbyId = async (req, res) => {
    Cell.find({id: req.body.id}, (err, data) => {
      if (err) {
        res.status(500).send("Something wrong happend");
      } else {
        res.status(200).send(data);
      }
    });
  };
  

exports.updateCell = async (req, res) => {
  Cell.findOneAndUpdate(
    { id: req.body.id },
    {$set: { Cell: req.body.Cell }},
    (err,data)=>{
        if(err){
            res.status(500);
        }
        else res.status(200).send(data);
    }
  );
};

exports.deleteCell = async (req, res) => {
    Cell.findOneAndUpdate(
      { id: req.body.id },
      {$set: { show:false }},
      (err,data)=>{
          if(err){
              res.status(500).send("Something wrong happend");
          }
          else res.status(200).send(data);
      }
    );
  };
  



