const About = require("../models/About");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addAbout = async (req, res) => {
    const data = new About({
        About: req.body.About,
    });

    data.save((err,data)=>{
        if(err){
            res.status(500).send("Something wrong happend");
            return;
        }
        res.status(200).send(data);
    });
    
};

exports.showAbout = async (req, res) => {
  About.find({}, (err, data) => {
    if (err) {
      res.status(500).send("Something wrong happend");
    } else {
        res.status(200).send(data);
    }
  });
};

exports.showAboutbyId = async (req, res) => {
    About.find({id: req.body.id}, (err, data) => {
      if (err) {
        res.status(500).send("Something wrong happend");
      } else {
        res.status(200).send(data);
      }
    });
  };
  

exports.updateAbout = async (req, res) => {
  About.findOneAndUpdate(
    { id: req.body.id },
    {$set: { About: req.body.About }},
    (err,data)=>{
        if(err){
            res.status(500);
        }
        else res.status(200).send(data);
    }
  );
};

exports.deleteAbout = async (req, res) => {
    About.findOneAndUpdate(
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
  


