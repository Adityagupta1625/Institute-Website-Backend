const ResearchNews = require("../models/Researchnews");
const uuid = require("uuid").v4();
//----------------------------------->

//----------------------------------------------------------------------->
exports.addResearchNews = async (req, res) => {

  console.log(req);

  const researchTitle = req.body.researchTitle;
  const researchDesc = req.body.researchDesc;
  const sourceofinformation = req.body.sourceofinformation;
  const type = req.body.type;
  const id = uuid.v4();
  
  const researchnews = new Researchnews({
    id,
    researchTitle,
    researchDesc,
    sourceofinformation,
    type,
  });

  researchnews
    .save()
    .then(() => res.json("News Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.showResearchNews = async (req, res) => {
  ResearchNews.find({}, (err, data) => {
    if (err) {
      res.Status(500).send("Something wrong happend");
    } else {
      res.send(data);
    }
  });
};

exports.showResearchNewsbyId = async (req, res) => {
  ResearchNews.find({ id: req.body.id }, (err, data) => {
    if (err) {
      res.Status(500).send("Something wrong happend");
    } else {
      res.send(data);
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
            res.Status(500);
        }
        else res.Status(200).send(data);
    }
  );
};

// check the delete one case:
// exports.deleteResearchNews = async (req, res) => {
//   ResearchNews.findOneAndUpdate(
//     { id: req.body.id },
//     {
//       researchTitle: req.body.researchTitle,
//       researchDesc: req.body.researchDesc,
//       image: req.body.image,
//       sourceofinformation: req.body.sourceofinformation,
//       type: req.body.type,
//     },
//     (err,data)=>{
//         if(err){
//             console.log(err);
//             res.Status(500);
//         }
//         else res.Status(200).send(data);
//     }
//   );
// };
