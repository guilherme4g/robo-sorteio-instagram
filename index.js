const puppeteer = require('puppeteer');
const fs = require('fs');

const file = fs.readFileSync('./credentials.json');
const datauser = JSON.parse(file);
const LOGIN_INSTAGRAM = datauser.LOGIN;
const SENHA_INSTAGRAM = datauser.SENHA;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const date = () => {
    d = new Date();
    return (d.getDate().toString() + "/" + d.getMonth().toString() + "/" + d.getFullYear().toString() + " " +
    d.getHours().toString() + ":" + d.getMinutes().toString())
}

const comment = async (link, textComment , quantTagInstagramProfiles) => {
    let browser = null;
    try {
        const file = fs.readFileSync('./usuarios.json');
        const json = JSON.parse(file);
        const profiles = json.lista;
        fs.writeFileSync('./usuarios.json' , JSON.stringify(json));
        browser = await puppeteer.launch({
            headless: false, 
            args: ['--start-maximized'] ,
            executablePath: '/usr/bin/google-chrome-stable',
            defaultViewport: null
        });
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(60000);
        await page.goto(link);
        await page.click('a.tdiEy');
        await page.waitForSelector("form.HmktE");   
        await page.type("input[name='username']",LOGIN_INSTAGRAM, { delay: 567 });
        await page.type("input[name='password']",SENHA_INSTAGRAM, { delay: 434 });
        await page.click("button[type='submit']");
        await page.waitForSelector("section.ABCxa");   
        await page.click("button.sqdOP");   
        const quant = 7;
        for (let i = 0; i < quant; i++) {
            let pos = randomInt(0,profiles.length);
            await page.waitFor(randomInt(30678, 35678));
            await page.waitForSelector("form.X7cDz");   
            let comentario = textComment;
            for (let j = 0; j < quantTagInstagramProfiles; j++) {
                comentario += " @" + profiles[pos + j].ig;   
            }
            await page.type("textarea",comentario, { delay: 567 });
            await page.click("button[type='submit']");    
    }
        await browser.close();
        console.log(date()); 
    } catch (err) {
        console.log(err);
    } finally {
        browser.close();
        await  sleep(randomInt(3000000, 3120000));
    }
};

const commentForever = async () => {
    while(true){
      await comment('https://www.instagram.com/p/CGV4iJbgy6Q/', "", 1);
    }
}

commentForever();
