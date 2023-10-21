const XLSX = require('xlsx');
const fs = require('fs');

const getPOData = async (req, res) => {
  try {
    const filePath = "./data/export29913.xlsx"; // path to XLSX file

    // Read the XLSX file
    const data = fs.readFileSync(filePath);

    // Parse the data
    const workbook = XLSX.read(data, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    res.send(sheet);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getPOData
}