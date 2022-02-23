const {Builder, Capabilities, By, until} = require('selenium-webdriver');
const {username, password} = require('./hidden');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get('https://app.hotschedules.com/hs/login.jsp?_ga=2.80431063.1749537157.1572278369-1299434720.1568126387')
});

afterAll(async () => {
    await driver.quit()
});

test('Login to Hotschedules', async () => {
  const usernameField = await driver.findElement(By.id('loginusername'));
  const passwordField = await driver.findElement(By.id('loginpassword'));
  const loginButton = await driver.findElement(By.id('loginBtn'));
  
  await usernameField.sendKeys(username);
  await passwordField.sendKeys(password);
  
  await loginButton.click();
})

test('Navigate to Report Dashboard', async () => {
  await driver.get('https://app.hotschedules.com/hs/menuParser.hs?screen=newReporting&sub_heading=proformaReport&type=813')

  // await driver.sleep(3000);
})

test('gathering data from report', async () => {
  const amCheckbox = await driver.wait(until.elementLocated(By.xpath(`//input[@id='daypart_10591']`)), 10000);
  const pmCheckbox = await driver.wait(until.elementLocated(By.xpath(`//input[@id='daypart_10592']`)), 10000);
  // const pmCheckbox = await driver.findElement(By.xpath(`//input[@id='daypart_10592']`));
  const dateContainer = await driver.findElement(By.xpath(`.//div[@id='date-container']`));

  // const startMonthDropdown = await driver.findElement(By.xpath(`//select[@class='ui-datepicker-month'][1]`));
  // const startYearDropdown = await driver.findElement(By.xpath(`//input[@class='ui-datepicker-month'][2]`));
  driver.findElement(By.xpath("//select[@class='ui-date-picker-month']/option[@value='1']"))
console.log('value: ', value);

  await amCheckbox.click();
  await pmCheckbox.click();
  await dateContainer.click();
  // await startMonthDropdown.sendKeys('Jan');

  await driver.sleep(2000);

})



