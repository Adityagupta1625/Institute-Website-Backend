const ResearchNews = require("../models/ResearchNews");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addResearchNews = async (req, res) => {

  const researchTitle = req.body.researchTitle;
  const researchDesc = req.body.researchDesc;
  const sourceofinformation = req.body.sourceofinformation;
  const type = req.body.type;
  
  const researchnews = new ResearchNews({
    researchTitle,
    researchDesc,
    sourceofinformation,
    type,
  });

  researchnews
    .save()
    .then(() => res.status(200).send(researchnews))
    .catch((err) => res.status(400).send("Something Wrong Happened"));
};

exports.showResearchNews = async (req, res) => {
  ResearchNews.find({}, (err, data) => {
    if (err) {
      res.status(500).send("Something wrong happend");
    } else {
      res.status(200).send(data);
    }
  });
};

exports.showResearchNewsbyId = async (req, res) => {
  ResearchNews.find({ id: req.body.id }, (err, data) => {
    if (err) {
      res.status(500).send("Something wrong happend");
    } else {
      res.status(200).send(data);
    }
  });
};

exports.updateResearchNews = async (req, res) => {
  ResearchNews.findOneAndUpdate(
    { id: req.body.id },
    {
      researchTitle: req.body.researchTitle,
      researchDesc: req.body.researchDesc,
      image: req.body.image,
      sourceofinformation: req.body.sourceofinformation,
      type: req.body.type,
    },
    (err,data)=>{
        if(err){
            console.log(err);
            res.status(500).send("Something wrong happend");
        }
        else res.status(200).send(data);
    }
  );
};

exports.deleteResearchNews = async (req, res) => {
  ResearchNews.findOneAndUpdate(
    { id: req.body.id },
    {$set: { show: false }},
    (err,data)=>{
        if(err){
            res.status(500).send("Something wrong happend");
        }
        else res.status(200).send(data);
    }
  );
};

