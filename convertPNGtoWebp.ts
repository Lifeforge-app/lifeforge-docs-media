import * as fs from "fs";
import * as path from "path";
import sharp from "sharp";

async function convertImagesToWebP() {
  const currentDir = process.cwd();
  console.log(`Scanning directory: ${currentDir}`);

  try {
    // Read all files in the current directory
    const files = fs.readdirSync(currentDir);

    // Filter PNG and JPG files
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return ext === ".png" || ext === ".jpg" || ext === ".jpeg";
    });

    if (imageFiles.length === 0) {
      console.log("No PNG or JPG files found in the current directory.");
      return;
    }

    console.log(
      `Found ${imageFiles.length} image file(s): ${imageFiles.join(", ")}`
    );

    // Convert each image file
    for (const imageFile of imageFiles) {
      const inputPath = path.join(currentDir, imageFile);
      const fileExtension = path.extname(imageFile).toLowerCase();
      const baseName = path.basename(imageFile, fileExtension);
      const outputPath = path.join(currentDir, `${baseName}.webp`);

      console.log(`Converting ${imageFile} to WebP...`);

      try {
        await sharp(inputPath)
          .webp({
            quality: 80,
            effort: 6, // Higher effort for better compression
          })
          .toFile(outputPath);

        // Get file sizes for comparison
        const originalSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = (
          ((originalSize - newSize) / originalSize) *
          100
        ).toFixed(1);

        console.log(`✓ Converted ${imageFile} -> ${path.basename(outputPath)}`);
        console.log(
          `  Size: ${(originalSize / 1024).toFixed(1)}KB -> ${(
            newSize / 1024
          ).toFixed(1)}KB (${savings}% reduction)`
        );

        // Delete the original image file
        fs.unlinkSync(inputPath);
        console.log(`✓ Deleted original file: ${imageFile}`);
      } catch (error) {
        console.error(`✗ Error converting ${imageFile}:`, error);
      }
    }

    console.log("\nConversion complete!");
  } catch (error) {
    console.error("Error scanning directory:", error);
  }
}

// Run the conversion
convertImagesToWebP().catch(console.error);
