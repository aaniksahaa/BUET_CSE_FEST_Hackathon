const Contact = require('./Contact')
var request = require("request");

const axios = require("axios");

exports.getMusic = (req,res) => {

    const axios = require("axios");

    console.log(req.query.genre)

    const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: {term: req.query.genre, locale: 'en-US', offset: '0', limit: '5'},
    headers: {
        'X-RapidAPI-Key': '683351e6d6msh5280d130f8100c4p1b86d2jsn83e8d30556e0',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {

        console.log(response.data) 

        console.log(response.data.tracks.hits[0].track);

        const hits = response.data.tracks.hits
        res.render('music.ejs',{hits})


    }).catch(function (error) {
        console.error(error);
    });  


    /*

    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: {
            q: req.query.topic,
            count: '20',
            freshness: 'Day',
            textFormat: 'Raw',
            safeSearch: 'Off'
        },
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '683351e6d6msh5280d130f8100c4p1b86d2jsn83e8d30556e0',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
        };
    
        var titles = ['hello']
        var descriptions = ['hello']
        var links = ['hello']
    
        axios.request(options).then(function (response) {
            console.log(response.data.value);
    
            let data = response.data.value
            for(let i=0;i<data.length;i++)
            {
                titles.push(data[i].name)
                descriptions.push(data[i].description)
                links.push(data[i].url)
            }
    
            console.log(titles)
            console.log(descriptions[1])
    
            let topic = req.query.topic
    
            res.render('index.ejs',{titles,descriptions,links,topic});
     
        }).catch(function (error) {
            console.error(error);
        });

        */

}

exports.getAllNews = (req, res) => {

    //console.log(req.query.topic);

    const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {
        q: req.query.topic,
        count: '20',
        freshness: 'Day',
        textFormat: 'Raw',
        safeSearch: 'Off'
    },
    headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '683351e6d6msh5280d130f8100c4p1b86d2jsn83e8d30556e0',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
    };

    var titles = ['hello']
    var descriptions = ['hello']
    var links = ['hello']

    axios.request(options).then(function (response) {
        console.log(response.data.value);

        let data = response.data.value
        for(let i=0;i<data.length;i++)
        {
            titles.push(data[i].name)
            descriptions.push(data[i].description)
            links.push(data[i].url)
        }

        console.log(titles)
        console.log(descriptions[1])

        let topic = req.query.topic

        res.render('index.ejs',{titles,descriptions,links,topic});
 
    }).catch(function (error) {
        console.error(error);
    });

}

exports.getSingleNews = (req, res) => {
        let { id } = req.params
        Contact.findById(id)
            .then(contact => {
                res.json(contact)
            })
            .catch(e => {
                console.log(e)
            })
}

exports.createNews = (req, res) => {
    let { name, phone, email } = req.body
    let contact = new Contact({
        name,
        email,
        phone
    })

    console.log(req.body)

    contact.save()
        .then(c => {
            res.json(c)
        })
        .catch(e => {
            console.log(e)
        })
}

exports.updateNews = (req, res) => {
    let { name, phone, email } = req.body
    let { id } = req.params

    Contact.findOneAndUpdate(
        { _id: id },
        {$set: {
            name, email, phone
        }
        },
        {new: true}
    )
    .then(contact => {
        res.json(contact)
    })
    .catch(e => {
        console.log(e)
    })
}

exports.deleteNews = (req, res) => {
    let { id } = req.params

    Contact.findOneAndDelete({ _id : id })
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
        })
}

