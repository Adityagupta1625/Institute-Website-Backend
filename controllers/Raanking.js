const Ranking = require("../models/Ranking");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addRanking = async (req, res) => {
    const data = new Ranking({
        ranking: req.body.ranking,
    });

    data.save((err,data)=>{
        if(err){
            res.status(500).send("Something wrong happend");
            return;
        }
        res.status(200).send(data);
    });
    
};

exports.showRanking = async (req, res) => {
  Ranking.find({}, (err, data) => {
    if (err) {
      res.status(500).send("Something wrong happend");
    } else {
        res.status(200).send(data);
    }
  });
};

exports.showRankingbyId = async (req, res) => {
    Ranking.find({id: req.body.id}, (err, data) => {
      if (err) {
        res.status(500).send("Something wrong happend");
      } else {
        res.status(200).send(data);
      }
    });
  };
  

exports.updateRanking = async (req, res) => {
  Ranking.findOneAndUpdate(
    { id: req.body.id },
    {$set: { ranking: req.body.ranking }},
    (err,data)=>{
        if(err){
            res.status(500);
        }
        else res.status(200).send(data);
    }
  );
};

exports.deleteRanking = async (req, res) => {
    Ranking.findOneAndUpdate(
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
  


