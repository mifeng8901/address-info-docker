const express = require('express');
const cors = require('cors');


const puppeteer = require('puppeteer');
const fs = require('fs');

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_, res) => {
res.send('hellow')
})

app.post('/info',  async (req, res) => {
    console.log(req.body)
    const {country = 'de'} = req?.body || {}

    const info =  await getBrowserInfo(country)

    res.json(info)
})

app.listen(process.env.PORT || 3000)

async function getBrowserInfo(country) {
    try {
        // Launch the browser
        const browser = await puppeteer.launch({
            
        });

        const page = await browser.newPage();
        async function getValue(selector) {
            try {
                const element = await page.$(selector);
                if (element) {
                    return await page.evaluate(el => el.value, element);
                } else {
                    console.error(`Element not found for selector: ${selector}`);
                    return null;
                }
            } catch (error) {
                console.error(`Error getting value for selector ${selector}:`, error);
                return null;
            }
        }

        await page.goto(`https://www.meiguodizhi.com/${country}-address`);


        const data_Full_Name = await getValue('.data_Full_Name')
        const data_Gender = await getValue('.data_Gender')
        const data_Birthday = await getValue('.data_Birthday')
        const data_Title = await getValue('.data_Title')
        const data_Hair_Color = await getValue('.data_Hair_Color')
        const data_Address = await getValue('.data_Address')
        const data_Trans_Cn_Address = await getValue('.data_Trans_Cn_Address')
        const data_Trans_Address = await getValue('.data_Trans_Address')
        const data_xian = await getValue('.data_xian')
        const data_City = await getValue('.data_City')
        const data_State = await getValue('.data_State')
        const data_State_Full = await getValue('.data_State_Full')
        const data_Zip_Code = await getValue('.data_Zip_Code')
        const data_Telephone = await getValue('.data_Telephone')
        const data_Fax = await getValue('.data_Fax')
        const data_Temporary_mail = await getValue('.data_Temporary_mail')
        const data_Credit_Card_Type = await getValue('.data_Credit_Card_Type')
        const data_Credit_Card_Number = await getValue('.data_Credit_Card_Number')
        const data_CVV2 = await getValue('.data_CVV2')
        const data_Expires = await getValue('.data_Expires')
        const data_Occupation = await getValue('.data_Occupation')
        const data_Company_Name = await getValue('.data_Company_Name')
        const data_Company_Size = await getValue('.data_Company_Size')
        const data_Employment_Status = await getValue('.data_Employment_Status')
        const data_Monthly_Salary = await getValue('.data_Monthly_Salary')
        const data_Social_Security_Number = await getValue('.data_Social_Security_Number')
        const data_Chain_ID_Card = await getValue('.data_Chain_ID_Card')
        const data_Username = await getValue('.data_Username')
        const data_Password = await getValue('.data_Password')
        const data_Height = await getValue('.data_Height')
        const data_Weight = await getValue('.data_Weight')
        const data_Blood_Type = await getValue('.data_Blood_Type')
        const data_System = await getValue('.data_System')
        const data_GUID = await getValue('.data_GUID')
        const data_Browser_User_Agent = await getValue('.data_Browser_User_Agent')
        const data_Educational_Background = await getValue('.data_Educational_Background')
        const data_Website = await getValue('.data_Website')
        const data_Security_Question = await getValue('.data_Security_Question')
        const data_Security_Answer = await getValue('.data_Security_Answer')

        fs.appendFileSync('info.txt', [
            data_Full_Name,
            data_Gender,
            data_Birthday,
            data_Title,
            data_Hair_Color,
            data_Address,
            data_Trans_Cn_Address,
            data_Trans_Address,
            data_xian,
            data_City,
            data_State,
            data_State_Full,
            data_Zip_Code,
            data_Telephone,
            data_Fax,
            data_Temporary_mail,
            data_Credit_Card_Type,
            data_Credit_Card_Number,
            data_CVV2,
            data_Expires,
            data_Occupation,
            data_Company_Name,
            data_Company_Size,
            data_Employment_Status,
            data_Monthly_Salary,
            data_Social_Security_Number,
            data_Chain_ID_Card,
            data_Username,
            data_Password,
            data_Height,
            data_Weight,
            data_Blood_Type,
            data_System,
            data_GUID,
            data_Browser_User_Agent,
            data_Educational_Background,
            data_Website,
            data_Security_Question,
            data_Security_Answer

        ].join('|') + '\n', 'utf8');


        await browser.close();

        return {
            data_Full_Name,
            data_Gender,
            data_Birthday,
            data_Title,
            data_Hair_Color,
            data_Address,
            data_Trans_Cn_Address,
            data_Trans_Address,
            data_xian,
            data_City,
            data_State,
            data_State_Full,
            data_Zip_Code,
            data_Telephone,
            data_Fax,
            data_Temporary_mail,
            data_Credit_Card_Type,
            data_Credit_Card_Number,
            data_CVV2,
            data_Expires,
            data_Occupation,
            data_Company_Name,
            data_Company_Size,
            data_Employment_Status,
            data_Monthly_Salary,
            data_Social_Security_Number,
            data_Chain_ID_Card,
            data_Username,
            data_Password,
            data_Height,
            data_Weight,
            data_Blood_Type,
            data_System,
            data_GUID,
            data_Browser_User_Agent,
            data_Educational_Background,
            data_Website,
            data_Security_Question,
            data_Security_Answer
        }
    } catch (error) {
        console.error('Error getting browser info:', error);
    }
}
// getBrowserInfo()