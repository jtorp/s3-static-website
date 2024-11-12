# Static S3 Website with Cross-Origin Resource Sharing (CORS)

This repository contains the configuration and files for a static S3 website with resources fetched cross-origin from a separate S3 bucket. The main website bucket hosts HTML, CSS, and JavaScript, while a secondary bucket stores shared images accessed via CORS.

**Content Sharing Across Applications:** If you have multiple websites or applications that share resources, this setup allows different sites to access common resources without duplicating storage.

## Features

- **Static Website Hosting**: Primary S3 bucket configured to serve HTML, CSS, and JavaScript files as a static website.
- **CORS-Enabled Resource Bucket**: Secondary S3 bucket contains images accessible cross-origin to allow resource sharing across domains.
- **HTTPS Upload Restriction**: Bucket policies are configured to allow only secure HTTPS uploads.

## Bucket Setup

### Main Website Bucket
- **Name**: `your-website-bucket`
- **Purpose**: Hosts the main HTML, CSS, and JavaScript files for the website.
- **Public Access**: Configured for public read access to allow website content to be accessible over the internet.
- **Bucket Policy**: Contains a policy to enforce secure (HTTPS) uploads.

### CORS-Enabled Resource Bucket
- **Name**: `your-resource-bucket`
- **Purpose**: Stores images and other resources fetched cross-origin by the main website.
- **CORS Policy**: Configured to allow cross-origin requests so images can be displayed on the main website hosted in a separate S3 bucket.

## Setup Instructions

1. **Upload Files to the Website Bucket**:
   - Upload the `index.html`, `style.css`, and any static  assets to `your-website-bucket`.
   - Configure the bucket for [Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html).

2. **Upload Resources to the Resource Bucket**:
   - Upload images and assets to `your-resource-bucket`.
   - Ensure the CORS policy below is applied to allow cross-origin access.

3. **CORS Policy for Resource Bucket**:
   Add this policy to `your-resource-bucket` to allow cross-origin requests from the website bucket:
   ```json
   [
     {
       "AllowedHeaders": ["*"],
       "AllowedMethods": ["GET"],
       "AllowedOrigins": ["*"],  // replace '*' with your website origin if restricting to specific domains
       "ExposeHeaders": []
     }
   ]

## License

[MIT](https://choosealicense.com/licenses/mit/)
