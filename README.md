# JCR Search

A static web app for searching JCR, Chinese Academy journal partitions, CCF lists, warning lists, and XR journal/conference data.

This repository is designed for GitHub Pages. It has no build step, no server code, and no desktop application code.

## Features

- Search by journal name, conference name, abbreviation, Chinese name, ISSN/EISSN, or CN.
- Live search suggestions.
- Top journal/conference list.
- Q1 / 1-zone journal/conference list.
- List filters by text, item type, and first-level category.
- Chinese and English interface toggle.
- Mobile-friendly layout.
- Local browser storage for selected datasets.

## Files

- `index.html` - static page shell
- `styles.css` - responsive interface styles
- `app.js` - CSV loading, search, filters, and rendering
- `中科院分区表及JCR原始数据文件/*.csv` - source data used by the page

## Local Preview

Run a static server from the repository root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Do not open `index.html` directly from the file system, because browsers block local CSV fetches.

## GitHub Pages

1. Push this repository to GitHub.
2. Open `Settings` -> `Pages`.
3. Set source to `Deploy from a branch`.
4. Select the branch and `/ (root)`.
5. Save and open the Pages URL after deployment finishes.

## Data Notes

The app reads CSV files directly in the browser. To update data, add or replace CSV files in `中科院分区表及JCR原始数据文件/`, then update the dataset list in `app.js` if the filename changes.
