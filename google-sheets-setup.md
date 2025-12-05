# Google Sheets Integration Setup (opensheet.vercel.app)

## 📋 Sheet Structure

Create a Google Sheet with these 3 tabs:

### 1. **Skills** Tab
| category | skill |
|----------|-------|
| Languages | Dart |
| Languages | C++ |
| Languages | JavaScript |
| Frameworks | Flutter |
| Frameworks | Firebase |
| Tools | Git |
| Tools | VS Code |

### 2. **Projects** Tab
| order | title | description | stack | image | live | code |
|-------|-------|-------------|-------|-------|------|------|
| 1 | Math Quiz App | Interactive quiz with LaTeX support | Flutter,Google Sheets,Dart | https://... | https://... | https://... |
| 2 | Physics Quiz | Educational platform for physics | Flutter,Firebase | https://... | https://... | https://... |

### 3. **Journey** Tab
| order | year | text |
|-------|------|------|
| 1 | 2023 | Started Coding |
| 2 | 2024 | Flutter Projects |
| 3 | 2025 | Cloud Architecture Learning |

## 🔧 Setup Steps

1. **Create Google Sheet**: Copy the structure above
2. **Get Sheet ID**: From URL `https://docs.google.com/spreadsheets/d/1FuTWOwO-A6KmxmrnyaeGSdnAvBxYKkRuIf6ZPF_IMNo/edit`
3. **Make Sheet Public**: Share → Anyone with link can view
4. **Update script.js**: Replace `1FuTWOwO-A6KmxmrnyaeGSdnAvBxYKkRuIf6ZPF_IMNo` with your actual Sheet ID

## 📝 Configuration

```javascript
const SHEET_ID = "1FuTWOwO-A6KmxmrnyaeGSdnAvBxYKkRuIf6ZPF_IMNo";
```

## ✅ Benefits

- **No API Key Required**: Uses opensheet.vercel.app proxy
- **Simple Setup**: Just make sheet public and get ID
- **Dynamic Content**: Update portfolio without touching code
- **Easy Management**: Edit skills/projects directly in Google Sheets
- **Real-time Updates**: Changes reflect immediately on website

## 🔗 URLs Generated

- Skills: `https://opensheet.vercel.app/1FuTWOwO-A6KmxmrnyaeGSdnAvBxYKkRuIf6ZPF_IMNo/Skills`
- Projects: `https://opensheet.vercel.app/1FuTWOwO-A6KmxmrnyaeGSdnAvBxYKkRuIf6ZPF_IMNo/Projects`  
- Journey: `https://opensheet.vercel.app/1FuTWOwO-A6KmxmrnyaeGSdnAvBxYKkRuIf6ZPF_IMNo/Journey`

## 📊 Column Names (Important!)

Make sure your Google Sheet has these exact column names:

**Skills:** `category`, `skill`
**Projects:** `order`, `title`, `description`, `stack`, `image`, `live`, `code`
**Journey:** `order`, `year`, `text`

The `order` column helps sort items (1, 2, 3, etc.)