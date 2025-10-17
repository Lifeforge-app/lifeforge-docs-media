# LifeForge Documentation Media Repository

This repository contains all media assets (images, screenshots, diagrams, etc.) used in the [LifeForge Documentation](https://docs.lifeforge.dev). It serves as a centralized storage for media files that are referenced throughout the documentation site. GitHub CDN is used to efficiently deliver these assets.

### Image Optimization

This repository includes an automated image optimization script that converts PNG and JPG files to WebP format for better web performance.

```bash
# Convert all PNG and JPG files to WebP and delete originals
bun run convert
```

The script will:
- ✅ Scan the current directory for PNG, JPG, and JPEG files
- ✅ Convert them to WebP format (80% quality)
- ✅ Show compression statistics
- ✅ Delete original files after successful conversion

## 📋 Dependencies

- **[Sharp](https://sharp.pixelplumbing.com/)**: High-performance image processing
- **[Bun](https://bun.com)**: Fast JavaScript runtime and package manager

## 📄 License

This repository is part of the [LifeForge project](https://github.com/lifeforge-app/lifeforge). Please refer to the main project repository for license information.

## 🔗 Related Links

- [LifeForge Documentation](https://docs.lifeforge.dev)
- [LifeForge Main Repository](https://github.com/lifeforge-app/lifeforge)
- [Report Issues](https://github.com/lifeforge-app/lifeforge/issues)

---

Made with ❤️ for the LifeForge community
