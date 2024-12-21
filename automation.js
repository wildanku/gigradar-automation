import { google } from "googleapis";
import { createRequire } from "module";
import fs from "fs";
import { getData } from "./data-wralling.js";

const require = createRequire(import.meta.url);
const data = require("./resource.json");

const totalData = data.length;
// let batch = 140;
let batch = 0;

// Create sheets instance
const sheets = google.sheets("v4");

// Load service account credentials
const credentials = JSON.parse(fs.readFileSync("service-account-key.json"));

// Authenticate client
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Spreadsheet ID
const SPREADSHEET_ID = "1YWVZhy24qJNzDdfOlFpDsX6xd_CTvQZEX6wV3F9uPeU";

export async function appendData(currentData, batchIndex) {
  try {
    const client = await auth.getClient();
    const batchData = await getData(currentData);

    // Data to append
    const values = [batchData];
    const range = `Data!A${batchIndex + 5}`; // Adjust range based on batch index

    // Append data
    const response = await sheets.spreadsheets.values.append({
      auth: client,
      spreadsheetId: SPREADSHEET_ID,
      range,
      valueInputOption: "RAW",
      resource: {
        values,
      },
    });

    console.log(`Batch ${batchIndex} appended successfully!`);
    return response;
  } catch (error) {
    console.error(`Error appending batch ${batchIndex}:`, error);
    throw error;
  }
}

// Process batches with a delay
async function processBatches() {
  try {
    if (batch < totalData) {
      console.log(`Processing batch ${batch}...`);
      await appendData(data[batch], batch);
      batch++;

      // Schedule the next batch after 3 seconds
      setTimeout(() => {
        processBatches().catch(console.error);
      }, 3000);
    } else {
      console.log("All batches processed!");
    }
  } catch (error) {
    console.error("Error in batch processing:", error);
  }
}

// Start processing
processBatches().catch(console.error);
