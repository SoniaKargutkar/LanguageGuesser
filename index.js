//Note that franc returns ISO 639-3 codes (three letter codes). Not ISO 639-1 or ISO 639-2. 

const franc = require('franc')
const langs = require('langs')
const colors = require('colors')
const input = process.argv[2]

const langCode = franc(input)
if (langCode === 'und') {
    console.log(("Sorry. Couldn't figure out the language").red)
}
else {
    //passing ISO 639-3 code returned by franc
    const language = langs.where("3", langCode)
    console.log(("Our best guess is: " + language.name).green)

}
