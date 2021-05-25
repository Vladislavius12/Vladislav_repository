class AdCollection {

    constructor(adList) {
         if(adList.length != 0){
            this._adList = adList.slice();
        }else{
            this._adList = [];
            }
    }
    
       _filterByVendors(ads, vendors,skip, top){
        return ads.filter(сurrentValue => vendors.includes(сurrentValue.vendor)).slice(skip,skip+top);
    }

    _filterByTags (ads, hashTags, skip, top){
        return ads.filter(currentAd =>{
            return hashTags.some(hashTag =>{ return currentAd.hashTags.includes(hashTag)})
        });
    }

    getPage(skip = 0, top = 10, filterConfig = {}) {
        let foundAds = [];
        let key = Object.keys(filterConfig);

        if (key.length === 0){ // default date filter
            let timeSortedAds = this.#adList.slice().sort((adItem1, adItem2) => adItem1.createdAt.getTime() - adItem2.createdAt.getTime());
            foundAds.push(timeSortedAds.slice(skip, top));
        } else if (key[0] === "hashTags") { // hashTags filter
            let hashTags = filterConfig[[key[0]]];
            let hashTagsAds = this.#adList.filter((adItem)=> hashTags.some((hashTag)=>adItem.hashTags.includes(hashTag)));
            hashTagsAds.sort((adItem1, adItem2) => adItem1.createdAt.getTime() - adItem2.createdAt.getTime());
            foundAds.push(hashTagsAds.slice(skip, top));
        } else if (key[0] === "vendors") { // vendors filter
            let vendors = filterConfig[[key[0]]];
            let vendorsAds = this.#adList.filter((adItem)=> vendors.includes(adItem.vendor));
            vendorsAds.sort((adItem1, adItem2) => adItem1.createdAt.getTime() - adItem2.createdAt.getTime());
            foundAds.push(vendorsAds.slice(skip, top));
        }
        return foundAds;
    }

      get(id){
        let result = this._adList.find(currentValue => currentValue.id == id);
        if(result == undefined){
            return {};
        } else{
            return result;
        }
        
           static validate(ad){
        if (typeof(ad.id) == 'string' &&
        typeof(ad.description) == 'string' && ad.description.length < 200  &&
        ad.createdAt instanceof Date &&  
        typeof(ad.link) == 'string' &&
        typeof(ad.vendor) == 'string' && ad.vendor.length != 0 &&
        ad.hashTags instanceof Array &&
        typeof(ad.discount) == 'string' &&  ad.discount.length != 0 &&
        ad.validUntil instanceof Date){
            return true;
        }else{
            return false;
        }
    }
    add(ad) {
        if (this.get(ad.id) !== undefined) {
            return false;
        }

        if (AdCollection.validate(ad)) {
            this.#adList.push(ad);
            return true;
        } else{
            return false;
        }
    }

    edit(id, adItem) {
        //checking forbidden keys
        let keys = Object.keys(adItem);
        if (keys.includes("id") || keys.includes("vendor") || keys.includes("createdAt")) {
            return false;
        }
        // finding add
        let index = this.#adList.findIndex((item)=> item.id === id);
        if (index === -1) {
            return false;
        }
        let updatedAd = this.#adList[index];
        // updating
        keys.forEach((key)=>updatedAd[key] = adItem[key]);
        // validating
        if (AdCollection.validate(updatedAd)) {
            this.#adList[index] = updatedAd;
            return true;
        } else {
            return false;
        }
    }

    remove(id) {
        let index = this.#adList.findIndex((item)=> item.id === id);
        if (index === -1) {
            return false;
        }
        this.#adList.splice(index,1);
        return true;
    }

        if (typeof(ad.id) === "string" && ad.id.match(REGEX_ID) &&
            typeof(ad.description) === "string" && ad.description.match(REGEX_DESCRIPTION) &&
            ad.createdAt instanceof Date && ad.createdAt < today &&
            typeof(ad.link) === "string" && ad.link.length !== 0 &&
            typeof(ad.vendor) === "string" && ad.vendor.length !== 0 &&
            typeof(ad.photoLink) === "string" && ad.photoLink.length !== 0 &&
            ad.validUntil instanceof Date && ad.validUntil > today &&
            ad.hashTags instanceof Array && ad.hashTags.every((hashTag)=> typeof(hashTag) === "string") &&
            typeof(ad.discount) === "string" &&  ad.discount.length !== 0 &&
            typeof(ad.rating) === "number") {

            return true;
        } else {
            return false;
        }
    }

    addAll(adList) {
        let notValidatedAds = [];
        adList.forEach(element => {
            if(!this.add(element)){
                notValidatedAds.push(element);
            }
        });
        return notValidatedAds;
    }

    clear() {
        this.#adList.length = 0;
    }
}


//USER
class User{
    constructor(name, isLoggedIn){
        this._name = name;
        this._isLoggedIn = isLoggedIn;
    }
}

//VIEW
class View{
    #user;
    #adCollection;

    constructor(user, adCollection){
        this.#user = user;
        this.#adCollection = adCollection
    }

    formatDate(date) {
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    }


    logIn(){
        this.createHeader(user);
        this.showAds();
    }


    showAds(skip = 0, top = 10, filter = {}){
        let buttons = '';
        if(this.#user.isLoggedIn){
            buttons = '<i class="far fa-file-alt fa-3x"></i>'
        }
        const products = document.getElementsByClassName("product")[0];
        products.innerHTML = '';

        let itemCollection = [];

        this.#adCollection.getPage(skip,top,filter)[0].forEach(
            elem =>{
                const adItem = document.createElement('div');
                adItem.classList.add('product__item');

                let reviewsText = "";


                let hashTagsText = "";
                elem.hashTags.forEach(
                    hashTag => {
                        hashTagsText += `<a>\#${hashTag}</a>`;
                    }
                )

                adItem.innerHTML =
                    `
            <div class="product__item-top">
              <div class="product__info">
                <img class="product__icon" src=${elem.photoLink} alt="Product">
                <div class="product__name"></div>
                <div class="product__vendor">${elem.vendor}</div>
                <div class="product__profit">${elem.discount}</div>
                <div class="product__rate">${elem.rating}</div>
                <div class="product__date">
                  <span class="text">Expires on:</span>
                  <time>${this.formatDate(elem.validUntil)}</time>
                </div>
              </div>
              <div class="product__desc">
                <div class="product__desc-text">
                  <p>${elem.description}</p>
                  <a class="product__desc-text" href = ${elem.link}>learn more</a>
                </div>
                <ul class="product__reviews">
                    <li>Review 1</li>
                    <li>Review 2</li>
                    <li>Review 3</li>
                    <li>Review 4</li>
              </ul>
              </div>
            </div>
            <div class="product__item-bottom">
                  <a class="add__review">
                        write review
                  </a>
                  <div class="product__meta">
                    ${hashTagsText}
                  </div>
            </div>
            `;
                itemCollection.push(adItem);
            }
        );

        itemCollection.sort((a,b) => {return b.createdAt - a.createdAt});

        itemCollection.forEach(elem => {
            products.appendChild(elem);
        })


    }

    removeAd(id){
        if(this.#adCollection.remove(id)){
            this.showAds();
        }
    }

    editAd(id, changes){
        if(this.#adCollection.edit(id,changes)){
            this.showAds();
        }
    }

    addAd(ad){
        if(this.#adCollection.add(ad)){
            this.showAds();
        }
    }

    createHeader(){
        if(this.#user.isLoggedIn){
            const headerUserName = document.getElementsByClassName("nav__username")[0];
            headerUserName.innerHTML = this.#user.name;
        }else{
            const headerUserName = document.getElementsByClassName("nav__username")[0];
            headerUserName.innerHTML = " ";
            const headerButton = document.getElementsByClassName("nav__link")[0];
            headerButton.innerHTML = "sign in";
        }
    }
}


let adList = [
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
    ];

let adCollection = new AdCollection(adList);

const user = new User("test_user", false);

const viewer = new View(user, adCollection);

viewer.logIn();
