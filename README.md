# Gigradar Automation

This project automates the process of parsing data from a JSON file into a Google Spreadsheet. It is written in JavaScript and specifically designed for Gigradar, but can be adapted for other use cases.

## Prerequisites

- **Node.js**: Ensure you have Node.js version 18 or newer installed. You can download it from [Node.js official website](https://nodejs.org).

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/wildanku/gigradar-automation
   ```

2. Navigate to the project directory:

   ```bash
   cd gigradar-automation
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

## Integrating Google Spreadsheet Service

1. **Set Up Google Cloud Project**:

   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.
   - Enable the "Google Sheets API" and "Google Drive API" for the project.

2. **Create a Service Account**:

   - Navigate to the "APIs & Services > Credentials" section.
   - Click on "Create Credentials" and select "Service Account."
   - Assign a name and role (e.g., Editor) to the service account.
   - Click "Done" to create the service account.

3. **Generate Service Account Key**:

   - In the service account details, go to the "Keys" section.
   - Click on "Add Key" and choose "JSON" to generate and download the key file.
   - Save this file as `service-account-key.json` in the root of your project directory.

4. **Share Access to Google Spreadsheet**:
   - Share your Google Spreadsheet with the service account email (found in the `client_email` field of the key file).

## Usage

1. **Prepare the JSON File**:

   - A sample JSON file (`resource.json`) is included in this repository.
   - Replace the `resource.json` file with your own JSON file if needed.
   - Ensure the key-value structure of your JSON file matches the sample file provided.

2. **Run the Automation Script**:
   - Execute the script with the following command:
     ```bash
     node automation.js
     ```

## Sample JSON File Structure

Below is an example of the JSON structure expected by the script:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "Developer"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "role": "Designer"
  }
]
```

## Output

- The script will generate a Google Spreadsheet containing the parsed data from the JSON file.
- The output will be available in your Google Drive.

## Troubleshooting

- **Missing Dependencies**: If you encounter errors related to missing dependencies, run `npm install` again to ensure all required packages are installed.
- **Invalid JSON Structure**: Ensure your JSON file follows the correct format and structure as shown in the sample.
- **Access Issues**: Make sure the service account email has been granted access to the target Google Spreadsheet.

## Contributing

Contributions are welcome! If you have suggestions for improvements or additional features, feel free to open an issue or submit a pull request.

---

Happy automating! If you have any questions or feedback, please reach out.
