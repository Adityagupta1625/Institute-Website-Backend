const Navbar = require("../models/navbar");
const uuid = require("uuid");
//----------------------------------->

//----------------------------------------------------------------------->
const obj = {
    Administration: [
      "ABOUT US",
      "LEADERSHIP",
      "GOVERNING BODIES",
      "CELLS",
      "COMMITTEES",
    ],
    Acadmeics: [
      "DEPARTMENTS",
      "CENTERS",
      "ACADEMIC SYSTEM",
      "ACADEMIC SERVICES",
      "ACADEMIC FACILITIES",
      "PROGRAMMES OF STUDY",
      "CONVOCATION",
      "OTHER LINKS",
    ],
    Admissions: [
      "PROSPECTIVE STUDENTS",
      "ANTI RAGGING",
      "JOIN NITJ",
      "INSTITUTE PROSPECTS",
    ],
    Research: [
      "Research @NITJ",
      "INCUBATION @NITJ",
      "CONSULTANCY @NITJ",
      "UPCOMING EVENTS",
    ],
    Alumni: [

    ],
    LifeatNITJ: [
      "CLUB & SOCITIES",
      "SCHOLARSHIPS",
      "LEADERSHIP",
      "GOVERNING BODIES",
      "CELLS",
      "COMMITIES",
    ]
};
exports.show = async (req, res) => {
  Navbar.findOne({}, (err, data) => {
    if (err) {
      res.Status(500).send("Something wrong happend");
    } else {
      res.status(200).json(data);

      res.send(data);
    }
  });
};

//----------------------------------------------------------------------->
exports.add = async (req, res) => {
  Navbar.findOne({}, (err, data) => {
    if (err) {
      res.Status(500).send("Something wrong happend");
    } else {
      const type = req.body.type;
      const subtype = req.body.subtype;
      const link = req.body.link;
      const name = req.body.name;
      const id = uuid.v4();
      
      console.log(type, subtype, link, name);

      let idx=obj[`${type}`].indexOf(`${subtype}`);
      data[`${type}`][idx].push({name,link,id});
      console.log(data);
      Navbar.findOneAndUpdate({}, {$set:data}, (err, data) => {
        if (err) {
          res.send("Something wrong happend");
        } else {
          res.send(data);
        }
      });

    }
  });
};

//----------------------------------------------------------------------->
exports.delete = async (req, res) => {
  Navbar.findOne({}, (err, data) => {
    if (err) {
      res.Status(500).send("Something wrong happend");
    } else {
      const type = req.body.type;
      const subtype = req.body.subtype;
      const id = req.body.id;
      
      let idx=obj[`${type}`].indexOf(`${subtype}`);
      let arr=data[`${type}`][idx];

      for(let i=2;i<arr.length;i++){
        if(arr[i].id===id){
          arr.splice(i,1);
          break;
        }
      }

      Navbar.findOneAndUpdate({}, {$set:data}, (err, data) => {
        if (err) {
          res.send("Something wrong happend");
        } else {
          res.send(data);
        }
      });
    }
  });
};

exports.create= async(req,res)=>{
    const navbar=new Navbar({
        Administration: [
            ["ABOUT US","FASLE"],
            ["LEADERSHIP","FASLE"],
            ["GOVERNING BODIES","FASLE"],
            ["CELLS","FASLE"],
            ["COMMITTEES","FASLE"],
          ],
          Acadmeics: [
            ["DEPARTMENTS","FASLE"],
            ["CENTERS","FASLE"],
            ["ACADEMIC SYSTEM","FASLE"],
            ["ACADEMIC SERVICES","FASLE"],
            ["ACADEMIC FACILITIES","FASLE"],
            ["PROGRAMMES OF STUDY","FASLE"],
            ["CONVOCATION","FASLE"],
            ["OTHER LINKS","FASLE"],
          ],
          Admissions: [
            ["PROSPECTIVE STUDENTS","FASLE"],
            ["ANTI RAGGING","FASLE"],
            ["JOIN NITJ","FASLE"],
            ["INSTITUTE PROSPECTS","FASLE"],
          ],
          Research: [
            ["Research @NITJ","FASLE"],
            ["INCUBATION @NITJ","FASLE"],
            ["CONSULTANCY @NITJ","FASLE"],
            ["UPCOMING EVENTS","FASLE"],
          ],
          Alumni: [],
          LifeatNITJ: [
            "CLUB & SOCITIES",
            "SCHOLARSHIPS",
            "LEADERSHIP",
            "GOVERNING BODIES",
            "CELLS",
            "COMMITIES",
          ]
    });
    navbar.save();
    res.sendStatus(200);
};



