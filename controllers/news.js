const LatestNews=require('../models/news');
//----------------------------------->

//----------------------------------------------------------------------->
exports.addNews = async (req, res) => {
    
    const latestNews = new LatestNews({
        title:req.body.title,
        desc:req.body.desc,
        sourceOfInfo:req.body.sourceOfInfo,
    });

    latestNews.save()
        .then((news) => res.status(200).send("News added successfully"))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.getNews = async (req, res) => {
    LatestNews.find({show:true})
        .then(news => res.status(200).json(news))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.getNewsbyId = async (req, res) => {
    LatestNews.findById(req.params.id).
    then(news => res.status(200).json(news)).
    catch(err => res.status(400).json('Error: ' + err));
}

exports.updateNews = async (req, res) => {
    LatestNews.findByIdAndUpdate(req.params.id,{
        title:req.body.title,
        desc:req.body.desc,
        sourceOfInfo:req.body.sourceOfInfo,
    }).then(() => {
        res.status(200).send("News updated successfully");
    }).catch(err => res.status(400).json('Error: ' + err));
}

exports.deleteNews = async (req, res) => {
    LatestNews.findByIdAndUpdate(req.params.id,{$set:{show:false}}).then(() => {
        res.status(200).send("News updated successfully");
    }).catch(err => res.status(400).json('Error: ' + err));
}

exports.getAllNews = async (req, res) => {
    LatestNews.find({}).
    then(news => res.status(200).json(news)).
    catch(err => res.status(400).json('Error: ' + err));
}
