const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = openai.createCompletion({
  model: "code-davinci-002",
  prompt: "\"\"\"\nTable customers, columns = [CustomerId, FirstName, LastName, Company, Address, City, State, Country, PostalCode, Phone, Fax, Email, SupportRepId]\nCreate a MySQL query for all customers in Texas named Jane\n\"\"\"\nquery = \"\"\"\nSELECT * FROM customers\nWHERE State = 'TX' AND FirstName = 'Jane'\n\"\"\"\n\nrun_query(query)\n\n\"\"\"\nTable employees, columns = [EmployeeId, LastName, FirstName, Title, ReportsTo, BirthDate, HireDate, Address, City, State, Country, PostalCode, Phone, Fax, Email]\nCreate a MySQL query for all employees hired in the year 2000\n\"\"\"\nquery = \"\"\"\nSELECT * FROM employees\nWHERE HireDate LIKE '2000%'\n\"\"\"\n\nrun_query(query)\n\n\"\"\"\nTable invoices, columns = [InvoiceId, CustomerId, InvoiceDate, BillingAddress, BillingCity, BillingState, BillingCountry, BillingPostalCode, Total]\nCreate a MySQL query for all invoices with a total greater than $10\n\"\"\"\nquery = \"\"\"\nSELECT * FROM invoices\nWHERE Total > 10\n\"\"\"\n\nrun_query(query)\n\n\"\"\"\nTable invoices, columns = [InvoiceId, CustomerId, InvoiceDate, BillingAddress, BillingCity, BillingState, BillingCountry,",
  temperature: 0,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

const printResponse = async () => {
  const data = await response;
  console.log(data.choices[0].text);
};

printResponse();