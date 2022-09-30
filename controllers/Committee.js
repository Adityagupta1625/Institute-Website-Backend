const Committee = require("../models/Committee");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addCommittee = async (req, res) => {
    const data = new Committee({
        Committee: req.body.Committee,
    });

    data.save((err,data)=>{
        if(err){
            res.status(500).send("Something wrong happend");
            return;
        }
        res.status(200).send(data);
    });
    
};

exports.showCommittee = async (req, res) => {
  Committee.find({}, (err, data) => {
    if (err) {
      res.status(500).send("Something wrong happend");
    } else {
        res.status(200).send(data);
    }
  });
};

exports.showCommitteebyId = async (req, res) => {
    Committee.find({id: req.body.id}, (err, data) => {
      if (err) {
        res.status(500).send("Something wrong happend");
      } else {
        res.status(200).send(data);
      }
    });
  };
  

exports.updateCommittee = async (req, res) => {
  Committee.findOneAndUpdate(
    { id: req.body.id },
    {$set: { Committee: req.body.Committee }},
    (err,data)=>{
        if(err){
            res.status(500);
        }
        else res.status(200).send(data);
    }
  );
};

exports.deleteCommittee = async (req, res) => {
    Committee.findOneAndUpdate(
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
  


