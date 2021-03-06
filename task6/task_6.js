var adList = [
    {
        id: "1",
        description: "BMW X5",
        createdAt: new Date("2020-04-14T22:00:00"),
        link: "https://www.bmw.by/ru/",
        vendor:"Bayerische Motoren Werke AG",
        photoLink: "https://www.bmw.by/content/dam/bmw/common/all-models/x-series/x5/2018/at-a-glance/bmw-g05-x5-onepager-stage-sp-xxl.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1569992884125.jpg",
        validUntil: new Date("2022-04-14T22:00:00"),
        discount: "15%",
        rating: 4.9,
        hashTags: ["BMW", "New_style", "Sport", "OffRoad"]
        reviews:[Wow]
    },
    {
        id: "2",
        description: "Mersedes",
        createdAt: new Date("2021-02-15T23:00:00"),
        link: "https://www.mercedes-benz.by/ru/desktop/home.html",
        vendor: "Mercedes-Benz",
        photoLink: "https://oir.mobi/uploads/posts/2019-12/1575860099_17-34.jpg",
        validUntil: new Date("2021-04-01T23:00:00"),
        discount: "10%",
        rating: 4.9,
        hashTags: ["Mersedes", "New_style", "Sport", "Modern"]
        reviews:[wah]
    },
    {
        id: "3",
        description: "Geely",
        createdAt: new Date("2021-03-10T23:00:00"),
        link: "https://geely.atlantm.by/?utm_source=yandex&utm_medium=cpc&utm_content=8827790032&utm_term=geely%20джили&utm_campaign=Geely_Brand_Yandex_Search&yclid=2362249578115786592",
        vendor: "Geely Automobile",
        photoLink: "https://quest-auto.ru/img/Geely-Emgrand-X7-14.jpg",
        validUntil: new Date("2021-04-10T23:00:00"),
        discount: "50%",
        rating: 2.9,
        hashTags: ["Geely", "loan", "Sale50", "pensioner_auto"]
        reviews:[Not bad]
    },
    {
        id: "4",
        description: "Geely Emgrand GT 2020",
        createdAt: new Date("2021-01-15T23:00:00"),
        link: "https://cenyavto.com/dzhili-emgrand-gt-2020/",
        vendor: "Geely Automobile",
        photoLink: "https://i.cenyavto.com/2020/02/c81e728d9d4c2f636f067f89cc14862c-6-1068x932.jpeg",
        validUntil: new Date("2021-10-01T23:00:00"),
        discount: "12%",
        rating: 3.2,
        hashTags: ["Geely", "loan", "Sport", "pensioner_auto"]
        reviews:[bad]
    },
    {
        id: "5",
        description: "Mersedes",
        createdAt: new Date("2021-03-20T23:00:00"),
        link: "https://mbbelarus.by/s-class/",
        vendor: "Mercedes-Benz",
        photoLink: "https://i.ytimg.com/vi/8gOZ2YpoOAM/maxresdefault.jpg",
        validUntil: new Date("2021-06-29T23:00:00"),
        discount: "12%",
        rating: 5.0,
        hashTags: ["Mersedes", "New_style", "S-class", "Modern"]
        reviews:[good]
    },
    {
        id: "6",
        description: "Mercedes-Benz Sprinter",
        createdAt: new Date("2020-03-15T23:00:00"),
        link: "https://www.mercedes-benz.by/vans/ru/sprinter/panel-van",
        vendor: "Mercedes-Benz",
        photoLink: "https://luxurylaunches.com/wp-content/uploads/2015/02/luxury-senzati-jet-sprinter-van-10.jpg",
        validUntil: new Date("2022-06-01T23:00:00"),
        discount: "5%",
        rating: 5.0,
        hashTags: ["Mersedes", "New_style", "Sprinter-class", "Commerce"]
        reviews:[Not bad]
    },
    {
        id: "7",
        description: "Tesla Model S",
        createdAt: new Date("2021-03-01T23:00:00"),
        link: "https://www.tesla.com/models",
        vendor: "Tesla",
        photoLink: "https://tvoe-avto.com/wp-content/uploads/Red-Tesla-Model-S-with-Unplugged-Performance-kit.jpg",
        validUntil: new Date("2021-06-30T23:00:00"),
        discount: "10%",
        rating: 4.9,
        hashTags: ["ecology", "Tesla", "New_style", "Sport", "Modern"]
        reviews:[Well]
    },
    {
        id: "8",
        description: "Tesla Model 3",
        createdAt: new Date("2021-01-22T23:00:00"),
        link: "https://www.tesla.com/model3",
        vendor: "Tesla",
        photoLink: "https://unpluggedperformance.com/wp-content/uploads/2020/10/Unplugged-Performance-Tesla-Model-3-Blue-Brushed-UP-03-Wheels-CCM-Brakes-1200x800.jpg",
        validUntil: new Date("2021-11-11T23:00:00"),
        discount: "33%",
        rating: 4.8,
        hashTags: ["ecology", "Tesla", "New_style", "Sport", "Modern"]
        reviews:[Not bad]
    },
    {
        id: "9",
        description: "Cybertruck",
        createdAt: new Date("2021-02-22T23:00:00"),
        link: "https://www.tesla.com/cybertruck",
        vendor: "Tesla",
        photoLink: "https://1.bp.blogspot.com/-kYuuWTQ6kFo/XhdH_FO2hlI/AAAAAAAAEmQ/fyaFYbZAiagyaUbglJTOQ3oitfDedcrMQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Tesla-Cybertruck-unveiling%2Bdfb.jpg",
        validUntil: new Date("2022-12-12T23:00:00"),
        discount: "44%",
        rating: 5.0,
        hashTags: ["Ecology", "Tesla", "Cybe_style", "Super_Sport", "Neo_Modern"]
    },
    {
        id: "10",
        description: "Tesla Model X",
        createdAt: new Date("2021-01-01T23:00:00"),
        link: "https://www.tesla.com/modelx",
        vendor: "Tesla",
        photoLink: "https://i.blogs.es/ab8d32/tesla-model-x-motorpasion-prueba-1/1366_2000.jpg",
        validUntil: new Date("2021-04-01T23:00:00"),
        discount: "30%",
        rating: 4.5,
        hashTags: ["ecology", "Tesla", "New_style", "Sport", "Modern"]
        reviews:[Not bad]
    },
    {
        id: "11",
        description: "Tesla Y",
        createdAt: new Date("2015-03-15T23:00:00"),
        link: "https://www.tesla.com/modely",
        vendor: "Tesla",
        photoLink: "https://i.simpalsmedia.com/point.md/news/thumbnails/large/e9df695089d5776487fe193d74140af2.jpg",
        validUntil: new Date("2025-06-01T23:00:00"),
        discount: "25%",
        rating: 4.0,
        hashTags: ["ecology", "Tesla", "New_style", "Sport", "Modern"]
        reviews:[Not bad]
    },
    {
        id: "12",
        description: "Audi e-tron",
        createdAt: new Date("2021-03-11T23:00:00"),
        link: "https://www.audi.by/by/web/ru/models/tron/audi-e-tron.html",
        vendor: "Audi",
        photoLink: "https://family-auto.ru/wp-content/uploads/2020/06/audi-e-tron.jpg",
        validUntil: new Date("2025-04-11T23:00:00"),
        discount: "40%",
        rating: 4.3,
        hashTags: ["ecology", "Audi", "New_style", "Sport", "Modern", "quattro"]
        reviews:[Not bad]
    },
    {
        id: "13",
        description: "Audi A4 allroad quattro",
        createdAt: new Date("2020-02-02T23:00:00"),
        link: "https://www.audi.by/by/web/ru/models/a4/a4-allroad-quattro-2021.html",
        vendor: "Audi",
        photoLink: "https://cdn.motor1.com/images/mgl/pQPEW/s1/2017-audi-a4-allroad-first-drive.jpg",
        validUntil: new Date("2022-02-02T23:00:00"),
        discount: "5%",
        rating: 4.5,
        hashTags: ["Audi", "New_style", "Sport", "Modern", "quattro"]
    },
    {
        id: "14",
        description: "Audi A7 Sportback",
        createdAt: new Date("2021-03-03T23:00:00"),
        link: "https://www.audi.by/by/web/ru/models/a7/a7sb.html",
        vendor: "Audi",
        photoLink: "https://www.carpixel.net/w/02a2863b69a783d01cf9d20e57f6fb61/audi-a7-sportback-plug-in-hybrid-s-line-car-wallpaper-89134.jpg",
        validUntil: new Date("2021-04-03T23:00:00"),
        discount: "4%",
        rating: 4.9,
        hashTags: ["Audi", "New_style", "Sport", "Modern"]
        reviews:[Not bad]
    },
    {
        id: "15",
        description: "Новый компактный купе-кроссовер Audi Q3 Sportback",
        createdAt: new Date("2021-03-15T20:00:00"),
        link: "https://www.audi.by/by/web/ru/models/q3/q3-sportback-2021.html",
        vendor: "Audi",
        photoLink: "https://www.wallpaperup.com/uploads/wallpapers/2019/10/17/1346411/7e89d5efb03a931a090f65ad26de1ccb-1000.jpg",
        validUntil: new Date("2021-06-01T22:00:00"),
        discount: "35%",
        rating: 4.4,
        hashTags: ["Audi", "New_style", "Sport", "Modern", "quattro", "OffRoad"]
        reviews:[Not bad]
    },
    {
        id: "16",
        description: "Добро пожаловать в мир острых ощущений.Audi RS Q8.",
        createdAt: new Date("2021-01-02T23:00:00"),
        link: "https://www.audi.by/by/web/ru/models/q8/rs-q8.html",
        vendor: "Audi",
        photoLink: "https://s1.paultan.org/image/2019/11/2020-Audi-RS-Q8-Exterior-20.jpg",
        validUntil: new Date("2022-01-01T23:00:00"),
        discount: "4%",
        rating: 3.8,
        hashTags: ["Audi", "New_style", "Sport", "Modern", "quattro", "OffRoad"]
    },
    {
        id: "17",
        description: "ОБНОВЛЕННАЯ CAMRY ЭЛЕГАНС",
        createdAt: new Date("2020-01-01T23:00:00"),
        link: "https://toyota.by/new-cars/car/toyota/camry-2021/n2127102",
        vendor: "Toyota",
        photoLink: "https://a.d-cd.net/6f3fd804lf2-960.jpg",
        validUntil: new Date("2023-06-01T23:00:00"),
        discount: "20%",
        rating: 4.5,
        hashTags: ["Toyota", "New_style", "Reliability", "FWD", "Liquidity"]
        reviews:[Not bad]
    },
    {
        id: "18",
        description: "TOYOTA C-HR",
        createdAt: new Date("2019-01-11T23:00:00"),
        link: "https://toyota.by/toyota/new-c-hr",
        vendor: "TOYOTA",
        photoLink: "https://forum.autoebid.com/uploads/default/original/1X/3c88724cb19514ed3b999752bbd2b4e5a7f9a657.jpeg",
        validUntil: new Date("2025-06-01T23:00:00"),
        discount: "6%",
        rating: 4.4,
        hashTags: ["Toyota", "New_style", "Reliability", "FWD", "OffRoad"]
    },
    {
        id: "19",
        description: "RAV4 КОМФОРТ",
        createdAt: new Date("2021-01-13T20:00:00"),
        link: "https://toyota.by/new-cars/car/toyota/new-rav4/n2084615",
        vendor: "Toyota",
        photoLink: "https://4-x-4.ru/wp-content/uploads/2019/12/toyota-rav4-ef02ebdac0e6b743-large.jpg",
        validUntil: new Date("2021-12-12T23:00:00"),
        discount: "25%",
        rating: 4.4,
        hashTags: ["Toyota", "New_style", "Reliability", "FWD", "OffRoad"]
        reviews:[Not bad]
    },
    {
        id: "20",
        description: "NISSAN X-TRAIL",
        createdAt: new Date("2020-01-15T23:00:00"),
        link: "https://www.nissan.by/vehicles/new-vehicles/x-trail-2020/",
        vendor: "Nissan",
        photoLink: "https://www.nissan.by/upload/iblock/152/silver.jpg",
        validUntil: new Date("2024-01-01T12:00:00"),
        discount: "5%",
        rating: 3.9,
        hashTags: ["Nissan", "New_style", "FWD", "OffRoad"]
        reviews:[Not bad]
    },
    ]

// functions
function compareData(a, b) {
    return new Date(a.createdAt) - new Date(b.createdAt);
}

function getAds (skip,top,filterConfig){
	
}
let getAds = function (skip = 0, top = 10, filterConfig = {}) {

        let resultAds = [];

        if (typeof filterConfig === 'object' && Object.keys(filterConfig).length) {
            let keys = Object.keys(filterConfig);
            let value = filterConfig[keys[0]];

            if (keys[0] === 'createdAt' || keys[0] === 'validUntil') {
                adList.forEach(elem => {
                    let timeRequest = String(new Date(value));
                    let time = String(elem[keys]);
                    if (time == timeRequest)
                        resultAds.push(elem);
                });
            } else {
                adList.forEach(elem => {
                    if (elem[keys] === value)
                        resultAds.push(elem);
                });
            }

            if (resultAds.length !== 0) {
                resultAds.sort(function (a, b) {
                    return new Date(a.createdAt) - new Date(b.createdAt);
                });
            }
        } else {
            resultAds = adList.slice();
            resultAds.sort(function (a, b) {
                return new Date(a.createdAt) - new Date(b.createdAt);
            });
        }

        if (resultAds.length) {
            let border = skip + top;
            if (border > resultAds.length) {
                resultAds = resultAds.slice(skip, resultAds.length);
            } else {
                resultAds = resultAds.slice(skip, border);
            }
        }

        return resultAds;
    };

    let getAd = function (id) {
        let resultObj = adList.find(elem => elem.id === id);

        if (resultObj !== undefined) {
            return resultObj;
        } else {
            return {};
        }
    };
console.log('getAds(0, 10)', getAds(0, 10));
console.log('getAds(3, 5)', getAds(3, 5));
console.log('getAds(0, 8, {vendor: \'Divan\'})', getAds(0, 8, {vendor: 'Divan'}));
console.log('getAds(3, 5, {vendor: \'Divan\'})', getAds(3, 5, {vendor: 'Divan'}));
console.log('getAds(3, 5, {hashTags: [\'coffee\',\'laptop\']})', getAds(0, 4, {hashTags: ['coffee','laptop']}));
console.log('getAds(3, 5, {hashTags: [\'chairs\'})', getAds(0, 5, {hashTags: ['chairs']}));
console.log('getAds(0, 8, 10)', getAds(0, 8, 10));
console.log('getAds(\'a\', \'b\')', getAds('a', 'b'));
console.log('getAds(10, 0)', getAds(10, 0));
console.log('getAds()', getAds());

function getAd(id) {

    let item;
    if (typeof id === 'string') {
        item = adList.find(function (element) {
            return element.id === id;
        });

        if (item) {
            return item;
        }
    }

    return false;
}
console.log('getAd(\'3\')', getAd('3'));
console.log('getAd(\'100\')', getAd('100'));
console.log('getAd(\'0\')', getAd('0'));
console.log('getAd(1)', getAd(1));
console.log('getAd(\'a\'))', getAd('a'));
console.log('getAd()', getAd());

function validateAd(adItem) {

    if (typeof adItem === 'object') {

        return typeof adItem.id === 'string' && (adItem.id > 0 || adItem.id <= adList.length) &&
            typeof adItem.description === 'string' && adItem.description !== '' && adItem.description.length <= 200 &&
            typeof adItem.createdAt === 'object' && adItem.createdAt !== null &&
            typeof adItem.vendor === 'string' && adItem.vendor !== '' &&
            typeof adItem.hashTags === 'object' && adItem.hashTags !== null && adItem.hashTags.length <= 7 &&
            adItem.hashTags.every(function (item) {
                return !(typeof item !== 'string' && item.length >= 20);
            }) &&
            typeof adItem.discount === 'string' && adItem.discount !== '' && adItem.discount.length <= 4;
    }

    return false;
}

console.log('validateAd(getAd(\'4\'))', validateAd(getAd('4')));

const tempItem = {

    id: '8',
    description: '',
    createdAt: new Date('2021-02-12T20:00:00'),
    siteLink: 'https://catalog.onliner.by/notebook/honor/53011mal',
    vendor: 'HONOR',
    photoLink: 'lib/pic/p8.jpg',
    hashTags: ['laptop'],
    discount: '25%',
    validUntil: new Date('2021-04-21T12:00:00'),
    rating: '5.0',
    reviews: ['Хорошее качество']

};

console.log('validateAd(', tempItem, ')', validateAd(tempItem));
console.log('validateAd(0)', validateAd(0));
console.log('validateAd(\'a\')', validateAd('a'));
console.log('validateAd()', validateAd());

function addAd(adItem) {

    if (validateAd(adItem)) {
        adList.push(adItem);
        return true;
    }

    return false;
}

const tempItem2 = {

    id: '21',
    description: 'Ноутбук MagicBook Pro 16',
    createdAt: new Date('2021-02-12T20:00:00'),
    siteLink: 'https://catalog.onliner.by/notebook/honor/53011mal',
    vendor: 'HONOR',
    photoLink: 'lib/pic/p8.jpg',
    hashTags: ['laptop'],
    discount: '25%',
    validUntil: new Date('2021-04-21T12:00:00'),
    rating: '5.0',
    reviews: ['Хорошее качество']

};

console.log('addAd(', tempItem2, ')', addAd(tempItem2));

const tempItem3 = {

    id: '21',
    description: 'Ноутбук MagicBook Pro 16',
    createdAt: 'abcdefg',
    siteLink: 'https://catalog.onliner.by/notebook/honor/53011mal',
    vendor: 'HONOR',
    photoLink: 'lib/pic/p8.jpg',
    hashTags: ['laptop'],
    discount: '25%',
    validUntil: new Date('2021-04-21T12:00:00'),
    rating: '5.0',
    reviews: ['Хорошее качество']

};

console.log('addAd(', tempItem3, ')', addAd(tempItem3));
console.log('addAd(\'item\')', addAd('item'));
console.log('addAd(1)', addAd(1));
console.log('addAd()', addAd());

function editAd(id,changes){
    // checking not to edit fields id author createdAt
    let keys = Object.keys(changes);
    if(keys.includes('id') || keys.includes('author') || keys.includes('createdAt')){
        return false;
    }
    // finding index of element to change
    let ind = adList.findIndex(currentValue => currentValue.id == id);
    if (ind === -1) {
        return false;
    }
    newAd = Object.assign(adList[ind]);
    for(let i=0;i<=adList.length;++i){
        newAd[keys[i]] = changes[keys[i]];
    }
    if(validateAd(newAd)){
        adList[ind] = newAd;
        return true;
    }else{
        return false;
    }

}
console.log('editAd');
console.log(editAd('1',{id:27}));//false(can't change id)
console.log(editAd('23',{description:'Some random description'}));//false (can't find element with index=23)
console.log(editAd('1',{description:'Some random description', link : 'random.org'}));//true
console.log(getAd(1));


function removeAd(id){
    for (let i = 0;i<adList.length;++i){
        if(adList[i].id === id){
            adList.splice(i,1);
            return true;
        }
    }
    return false;
}

console.log('getAd(\'21\')', getAd('21'));
console.log('removeAd(\'21\')', removeAd('21'));
console.log('getAd(\'21\')', getAd('21'));

console.log('removeAd(1)', removeAd(1));
console.log('removeAd(\'a\')', removeAd('a'));
console.log('removeAd()', removeAd());

